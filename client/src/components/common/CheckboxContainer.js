import React from 'react';
import axios from "axios";
import Checkbox from './Checkbox';
import './Checkbox.css'
import { access_token, url_prod, url_dev, url, headers } from "../../config/config";
import { Skeleton } from 'antd';
var min = [];
var max = [];
const list = [
  {
    name: 'Temperature',
    key: 'Temperature',
    label: 'Temperature'
  },
  {
    name: 'Vibration',
    key: 'Vibration',
    label: 'Vibration'
  },
  {
    name: 'Current',
    key: 'Current',
    label: 'Current',
  },
  {
    name: 'RPM',
    key: 'RPM',
    label: 'RPM'
  },
];


class CheckboxContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(), min: [], max: [], checkboxes: [],
      min_rpm: 0, max_rpm: 0, min_temp: 0, max_temp: 0, min_current: 0, max_current: 0, max_vibration: 0,
      min_vibration: 0, loading: true, localdata: []
    }

    this.handleChange = this.handleChange.bind(this);
    //this.save = this.save.bind(this);
  }




  fetchDetails = () => {

    axios({
      method: "get",
      url: url + "api/delledgexdemo-wiproiot/v1/config",
      headers: headers
    })
      .then(response => {
        var config_response = response.data.message
        console.log(config_response, "responseee", this.props.assetData)
        let config_data = []
        for (var j = 0; j < config_response.length; j++) {
          if (config_response[j].AssetName == this.props.assetData.name) {
            config_data = config_response[j].ThresholdValues
          }
        }

        this.setState({
          localdata: config_data
        }, () => {
          this.getAspects(this.props.assetData._links.aspects.href, config_data)
        }
        )



        this.setState({
          loading: false
        })

      })
      .catch(err => {
        console.log(err);
      });

  }

  getAspects = (url, config_data) => {

    axios({
      method: "get",
      url: url,
      headers: headers
    })
      .then(response => {
        const { variables, name, holderAssetId } = response.data._embedded.aspects[0];
        console.log("GET ASPECTS: ", response, config_data, this.props.assetData.name)

        let checkBoxes = []

        for (var i = 0; i < variables.length; i++) {

          let min_value = 0
          let max_value = 0

          var toSearch = variables[i].name
          
          for (var j = 0; j < config_data.length; j++) {
            for (let key in config_data[j]) {
              if (config_data[j].name == toSearch) {
                console.log(config_data[j]);
                min_value = config_data[j].min
                max_value = config_data[j].max
              }
            }
          }

          let data = {
            "name": variables[i].name,
            "min": min_value,
            "max": max_value,
            "unit": variables[i].unit
          }

          checkBoxes.push(data)

        }

        this.setState({ checkboxes: checkBoxes })

      })
      .catch(err => {
        console.log(err);
      });
  };


  componentWillMount() {


    //this.getAspects(this.props.assetData._links.aspects.href)


    this.fetchDetails()


    /*
    this.state.checkboxes.map((item, index) => {
      min.push(item.min);
      max.push(item.max);
    });
    this.setState({ min: min, max: max });

    /*let chks=checkboxes.map(item => {
                return (<label key={item.key}>
                  {item.name}
                  <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                </label>)
      });
      this.setState({chks:chks});*/
  }


  handleChange(e, index, key) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  handleChangedMin(e, index, key) {
    let checkBoxes = this.state.checkboxes;
    if (!isNaN(e.target.value)) {
      checkBoxes[index]['min'] = e.target.value;
      this.setState({ checkboxes: checkBoxes });
    }

  }

  handleBlurMin(e, index, key) {
    let checkBoxes = this.state.checkboxes;
    if (e.target.value == '') {
      checkBoxes[index]['min'] = this.state.min[index];
      this.setState({ checkboxes: checkBoxes });
    }
  }


  handleChangedMax(e, index, key) {
    let checkBoxes = this.state.checkboxes;
    if (!isNaN(e.target.value)) {
      checkBoxes[index]['max'] = e.target.value;
      this.setState({ checkboxes: checkBoxes });
    }
  }

  handleBlurMax(e, index, key) {
    let checkBoxes = this.state.checkboxes;
    if (e.target.value == '') {
      checkBoxes[index]['max'] = this.state.max[index];
      this.setState({ checkboxes: checkBoxes });
    }
  }


  updateConfig = e => {

    let data = {
      "AssetName": this.props.assetData.name,
      "ThresholdValues": this.state.checkboxes
    }

    console.log(data, "after update")

    axios({
      method: "post",
      url: url + "api/delledgexdemo-wiproiot/v1/saveconfig",
      headers: headers,
      data: data
    })
      .then(response => {
        console.log(response);
        alert("Details updated successfully")
      })
      .catch(err => {
        console.log(err);
        alert("Error in details update")
      });
  };


  render() {
    console.log(this.state.checkboxes);
    return (
      <React.Fragment>
        <div className="col-md-12">
          <div className="col-md-12 settings_header">
            <span className="inner-text1">Machine Paramaters</span>
          </div>
          <div className="col-md-12">
            <div className="col-md-3">
            </div>
            <div className="col-md-9">
              <div className="col-md-4">
              </div>
              <div className="col-md-4">
                <span className="inner-text">Min</span>
              </div>
              <div className="col-md-4">
                <span className="inner-text">Max</span>
              </div>
            </div>
            <div className="col-md-3">
            </div>
          </div>

          {
            this.state.loading == true ?
              <Skeleton active />
              :
              <div className="col-md-12">
                {
                  this.state.checkboxes.map((item, index) => (

                    <div className="col-md-12 settings-parametetrs" key={item.key}>
                      <div className="col-md-3">
                      </div>
                      <div className="col-md-9">
                        <div className="col-md-4">
                          <span className="inner-text">{item.name}</span>
                        </div>
                        <div className="col-md-4">
                          <span className="inner-text">
                            <input type="text" value={item.min} onBlur={(evt) => this.handleBlurMin(evt, index, item.key)} onChange={(evt) => this.handleChangedMin(evt, index, item.key)} />

                            &nbsp;&nbsp; {item.unit}

                          </span>
                        </div>
                        <div className="col-md-4">
                          <span className="inner-text">
                            <input type="text" value={item.max} onBlur={(evt) => this.handleBlurMax(evt, index, item.key)} onChange={(evt) => this.handleChangedMax(evt, index, item.key)} />
                          
                            &nbsp;&nbsp; {item.unit}
                          
                          </span>
                        </div>
                      </div>
                      <div className="col-md-3">
                      </div>
                    </div>
                  ))
                }
                {
                  this.state.loading == true ? "" :
                    <div className="col-md-12" style={{ "justify-content": "center", "margin-top": "25px", "display": "flex" }}>
                      <button type="button" className="settings_button" onClick={this.updateConfig}>Save</button>
                    </div>
                }
              </div>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;
