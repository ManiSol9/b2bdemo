import React, { Component } from "react";
import axios from "axios";
import { access_token, url_dev, params, url_prod, url, headers } from "../../../config/config";
import moment from 'moment';
import "./summary.css";
import MechineSVG from "./mechinesvg/mechinesvg";
import { Graph } from "./graph/graph";


var updateInterval = 5000;

var configInterval = 60000;


export default class Summary extends Component {
  constructor() {
    super();
    this.state = {
      variables: [],
      aspects: [],
      assetId: null,
      aspectName: null,
      load_data: 0
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount = () => {
    this.getAspects(this.props.asset._links.aspects.href)
    this.updateChart()
    //this.fetchDetails()
    setInterval(this.updateChart, updateInterval);
    //setInterval(this.updateLoadingStatus, loadingInterval);

  }


  

  getAspects = (url_data) => {
    axios({
      method: "get",
      url: url_data,
      headers: headers
    })
      .then(response => {
        const { variables, name, holderAssetId } = response.data._embedded.aspects[0];
        console.log("GET ASPECTS: ", response, moment().utc().format(), moment().subtract(10, 'minute').utc().format())
        this.setState({ variables: variables })

        this.setState({
          assetId: holderAssetId,
          aspectName: name
        })
      })
      .catch(err => {
        console.log(err);
      });
  };


  updateChart = () => {

    if (this.state.assetId != null) {

      var date = new Date();
      var timestamp = date.getTime();

      var to_timstamp = parseInt(timestamp) - 60000;

      var date1 = moment(parseInt(timestamp)).utc().format();
      var date2 = moment(parseInt(to_timstamp)).utc().format();

      // console.log(date1)

      var time1 = date1.split("Z");
      var time2 = date2.split("Z");

      var to_time = time1[0] + ".000Z";
      var from_time = time2[0] + ".000Z";

      var fetch_url = url + "api/iottimeseries/v3/timeseries/" + this.state.assetId + "/" + this.state.aspectName + "?from=" + from_time + "&to=" + to_time + "";

      axios({
        method: "get",
        url: fetch_url,
        headers: headers
      })
        .then(res => {
          //this.populateAspect(res.data);

          let motordata = res.data

          let data = null

          // console.log(motordata)

          if (motordata.length < 1) {
            this.populateAspect(data, null)
            this.setState({
              load_data: 1
            })
          } else {

            var aspects = [motordata[motordata.length - 1]]

            this.populateAspect(aspects, motordata)
          }

        })
        .catch(err => {
          console.log(err);
        });

    }

  }


  populateAspect = (aspects, motordata) => {
    const { variables } = this.state;

    let finalArr = [];
    variables.map((v, index) => {


      let obj = {};

      obj.name = `${v.name}`;

      if (aspects == null) {

        obj.value = `${"0"} ${v.unit}`

        let motor_variable_array = []

        motor_variable_array.push(['Time', v.name])
        
        for (var i = 0; i < 3; i++) {

          var date_format = moment(new Date().getTime()).toObject()

          var req_time = date_format.hours + ":" + date_format.minutes + ":" + date_format.seconds

          let temp_points = [req_time, 0]

          motor_variable_array.push(temp_points)


        }

        obj.points = motor_variable_array

        this.props.asset.status = "Stopped"

        this.props.asset.time = moment().format('YYYY-DD-MM h:mm:ss a')

        this.props.handlerFromParant(this.props.asset);


      } else {

        let motor_variable_array = []

        motor_variable_array.push(['Time', v.name])

        obj.value = `${aspects[0][v.name]} ${v.unit}`


        for (var i = motordata.length - 4; i < motordata.length; i++) {

          var date_format = moment(motordata[i]._time).toObject()

          var req_time = date_format.hours + ":" + date_format.minutes + ":" + date_format.seconds

          let temp_points = [req_time, motordata[i][v.name]]

          motor_variable_array.push(temp_points)

          this.props.asset.status = "Running"

          this.props.asset.time = moment().format('YYYY-DD-MM h:mm:ss a')

        }

        this.props.handlerFromParant(this.props.asset);

        obj.points = motor_variable_array
      }
      finalArr.push(obj)
    })


    this.setState({ aspects: finalArr });

    console.log("Running...")


  }

  render() {
    const { aspects } = this.state;

    var data = {
      aspects: aspects,
      assetId: this.state.assetId,
      aspectName: this.state.aspectName
    }

    return (
      <div className="row inner-block">
        {
          aspects.length < 1 ? "No Data" :
            <div className="col-md-12">
              <div className="col-md-4 child-block-1">
                <MechineSVG data={data}/>
              </div>
              <div className="col-md-8 child-block-2">
                <Graph data={data} />
              </div>
            </div>
        }
      </div>
    );
  }
}
