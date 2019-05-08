import React, { Component } from "react";
import GChart from 'react-google-charts';
var dps = []; // dataPoints
let chart = {};
let xVal = 0;
let yVal = 100;
const updateInterval = 1000;
const dataLength = 100;
export default class Chart extends Component {
  

  render() {
    return [
      <span className="close-icon" onClick={() => this.props.closeChart(false)}>
        X
      </span>,
      <GChart
        width={'100%'}
        height={'200px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={this.props.data}
        options={{
          hAxis: {
            title: 'Time',
          },
          vAxis: {
            title: this.props.title,
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    ];
  }
}
