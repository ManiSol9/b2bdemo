import React, { Component } from "react";
import $ from "jquery";
import GraphIcon from "../../../assets/graph.png";
import "./graph.css";

import axios from "axios";
import Cookies from 'js-cookie';
import Loader from 'react-loader-spinner'

import { access_token, url_prod, url_dev } from "../../../../config/config"
import ChartData from './chart'


var moment = require('moment');
var qs = require('qs')
var temp_points = [['Time', 'Current Temperature', 'Maximum Temperature', 'Minimum Temperature']];   //dataPoints.
var rpm_points = [['Time', 'Current RPM', 'Maximum RPM', 'Minimum RPM']];
var xVal = temp_points.length + 1;
var yVal = 15;
var updateInterval = 5000;
var loadingInterval = 5000;


export class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
        temp_points: temp_points,
        access_token: null,
        xsrfToken: Cookies.get('XSRF-TOKEN'),
        loader_status: false,
        max_rpm: null,
        min_rpm: null,
        max_temp: null,
        min_temp: null,
        rpm_points: rpm_points,
        parameter: 1,
        showGraph: false,
        chartTitle:''
    };
  }

  componentDidMount() {
  }

  showGraph=(name)=>{
    const { aspects } = this.props.data;
    let chartData = aspects.filter((asp)=>asp.name===name)[0].points
    this.setState({showGraph:true, chartTitle:name, chartData:chartData})
  }

  render() {
    const { aspects } = this.props.data;
    var { showGraph, chartData, chartTitle } = this.state;
    chartData = aspects.length&&chartTitle!=''&&aspects.filter((asp)=>asp.name===this.state.chartTitle)[0].points

    return (
      <div className="asp-container">
        <ul className="asp-ul">
          {aspects.length &&
            aspects.map((aspect, index) => (
              <li key={index}>
                <p style={{ color: "darkgray" }}>{aspect.name}</p>
                <p style={{ "fontWeight": "bold" }}>{aspect.value}</p>
                <img
                  src={GraphIcon}
                  width="35"
                  height="25"
                  alt="Graph icon"
                  onClick={()=>this.showGraph(aspect.name)}
                />
              </li>
            ))}
        </ul>
        <div className="chart-container" style={showGraph?{display:'block'}:{display:'none'}}>
          <ChartData title={chartTitle} data={chartData} closeChart={(state)=>this.setState({showGraph:state})}/>
        </div>
      </div>
    );
  }
}
