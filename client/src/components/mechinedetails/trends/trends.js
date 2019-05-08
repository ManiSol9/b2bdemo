import React, { Component } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { DatePicker } from 'antd';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import 'antd/dist/antd.css';
import './trends.css';
import { access_token, url_prod, url_dev, url, headers } from "../../../config/config"

am4core.useTheme(am4themes_animated);
var moment = require('moment');
const { RangePicker } = DatePicker;

export default class Trends extends Component {
    constructor() {
        super();
        this.updateChart = this.updateChart.bind(this);
        this.state = {
            access_token: null,
            xsrfToken: Cookies.get('XSRF-TOKEN'),
            moment: moment(),
            startDate: null,
            endDate: null,
            aggregate: null,
            params: null,
            chartData: [],
            parameter: "current",
            loading: true,
            variables: []
        };
        this.handleChange = this.handleChange.bind(this);

    }

    onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);

        this.setState({
            startDate: dateString[0] + "T00:00:00Z",
            endDate: dateString[1] + "T00:00:00Z"
        }, () => {
            this.caluculateTime();
        })
    }

    componentWillMount() {
        this.getAspects(this.props.asset._links.aspects.href)
    }


    componentDidMount() {
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }


    getAspects = (url) => {
        axios({
            method: "get",
            url: url,
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

                //this.getData(holderAssetId, name, undefined, undefined, 2)
            })
            .catch(err => {
                console.log(err);
            });
    };

    //fetching motor parameters data based on seleted time range 

    updateChart = () => {

        if (this.state.assetId != null) {


            var fetch_url = url_dev + "api/iottsaggregates/v3/aggregates/" + this.state.assetId + "/" + this.state.aspectName + "?from=" + this.state.startDate + "&to=" + this.state.endDate + "&intervalUnit=" + this.state.params[0].unit + "&intervalValue=" + this.state.params[0].number

            axios({
                method: "get",
                url: fetch_url,
                headers: headers
            })
                .then(res => {

                    var data = res.data

                    console.log(data, "Trends data", url)

                    var state = this

                    let trend_data = [];
                    for (let i = 0; i < data.length; i++) {

                        let data_object = data[i]

                        if (data_object.hasOwnProperty("rpm")) {

                            var rpm_value = data_object.rpm.average

                        } else {

                            var rpm_value = 0
                        }

                        if (data_object.hasOwnProperty("temperature")) {

                            var temp_value = data_object.temperature.average

                        } else {

                            var temp_value = 0

                        }

                        if (data_object.hasOwnProperty("current")) {

                            var current_value = data_object.current.average

                        } else {

                            var current_value = 0

                        }

                        if (data_object.hasOwnProperty("vibration")) {

                            var vib_value = data_object.vibration.average

                        } else {

                            var vib_value = 0

                        }

                        trend_data.push({
                            date: new Date(moment(data_object.starttime).utc().format()),
                            name: "name" + i,
                            rpm_value: rpm_value,
                            temp_value: temp_value,
                            current_value: current_value,
                            vib_value: vib_value
                        });

                    }

                    state.setState({
                        chartData: trend_data,
                        loading: false
                    }, () => {
                        state.generateChart()
                    })

                })
                .catch(err => {
                    console.log(err);
                    alert("Somthing went wrong, Please try again later")
                });

        } else {

            this.setState({
                loading: true
            })

        }

    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    // generate graph based on data

    generateChart = () => {

        let chart = am4core.create("chartdiv", am4charts.XYChart);

        chart.paddingRight = 20;

        chart.data = this.state.chartData;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

        dateAxis.baseInterval = {
            "timeUnit": "hours",
            "count": 1
        }

        dateAxis.renderer.grid.template.location = 50;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 1;

        let range = valueAxis.axisRanges.create();
        range.value = 20;
        range.endValue = 40;
        range.axisFill.fill = am4core.color("#396478");
        range.axisFill.fillOpacity = 0.2;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";


        if (this.state.parameter === "temperature") {

            series.dataFields.valueY = "temp_value";
            series.tooltipText = "Temperature: {valueY}";

        } else if (this.state.parameter == "current") {

            series.dataFields.valueY = "current_value";
            series.tooltipText = "Current: {valueY}";

        } else if (this.state.parameter == "vibration") {
            
            series.dataFields.valueY = "vib_value";
            series.tooltipText = "Vibration: {valueY}";

        } else {

            series.dataFields.valueY = "rpm_value";
            series.tooltipText = "RPM: {valueY}";

        }
        chart.cursor = new am4charts.XYCursor();
        this.chart = chart;

    }


    // caiculating interval unit and interval value from based on seleted date range
    caluculateTime = () => {

        var date1 = moment(this.state.startDate).unix();
        var date2 = moment(this.state.endDate).unix()

        var seconds = date2 - date1

        var minutes = seconds / 60

        let array_min = []

        /* for min */

        for (var i = 0; i <= 60; i++) {
            if (minutes % i == 0 && minutes / i < 200) {
                array_min.push({
                    "number": i,
                    "value": minutes / i,
                    "unit": "minute"
                })
                break;
            }
        }

        /* for hours */

        if (array_min.length == 0) {

            var hours = minutes / 60

            console.log(hours)

            for (var j = 0; j < 24; j++) {

                if (hours % j == 0 && hours / j < 200) {
                    array_min.push({
                        "number": j,
                        "value": hours / j,
                        "unit": "hour"
                    })
                    break;
                }

            }
        }

        /* FOR DAYS */

        if (array_min.length == 0) {

            var days = hours / 24

            console.log(days, "days")

            if (days <= 200) {
                array_min.push({
                    "number": days,
                    "value": 1,
                    "unit": "day"
                })
            }

        }

        if (array_min.length == 0) {

            alert("Maximum limit excedded")

        } else {

            this.setState({
                params: array_min
            }, () => {
                this.updateChart()
            })

        }

    }

    handleInput = e => {
        const { name, value } = e.target;

        if (name === "parameter" && this.state.loading == false) {
            this.setState({
                parameter: value
            }, () => {
                this.generateChart()
            })
            this.forceUpdate()
        }
    };

    render() {

        console.log(this.state.chartData)

        const shortcuts = {
            'Today': moment(),
            'Yesterday': moment().subtract(1, 'days'),
            'Clear': ''
        };

        return (
            <div className="col-md-12">


                <div className="form">

                    <div className="col-md-12 body1">
                        <div className="col-md-5 selecttime">
                            <RangePicker
                                //showTime={{ format: 'HH' }}
                                format="YYYY-MM-DD"
                                placeholder={['Start Time', 'End Time']}
                                onChange={this.onChange}
                                onOk={this.caluculateTime}
                            />
                        </div>

                        <div class="form-group col-md-5">
                            <select class="form-control" name="parameter" id="sel1" onChange={this.handleInput}>
                                {this.state.variables.map((asset, index) => (
                                    <option value={asset.name}>{asset.name}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    {this.state.loading == true ? "" :

                        <div className="col-md-12 graph-box">
                            <div
                                style={{
                                    width: "100%",
                                    height: "275px"
                                }}
                            >
                                <div id="chartdiv" style={{ width: "100%", height: "275px" }}></div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

