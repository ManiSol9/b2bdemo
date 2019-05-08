import React, { Component } from "react";
// Importing sub components
import Summary from "./summary/summary";
import Settings from "./settings/settings";
import Alerts from "./alerts/alerts";
import Trends from "./trends/trends";
// Importing CSS
import "./mechinedetails.css";

export default class MechineDetails extends Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }

  componentWillMount() {
  }

  handleData(data) {
    this.setState({
      fromChild: data
    });
    console.log(data)

    this.props.handlerFromSuperParant(data)
  }

  render() {
    const { asset, tab } = this.props;
    return (
      <div className="mech-detail-container">
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-md-2 mech-menu-container">
            <ul className="mech-menu-ul">
              <li
                style={tab === 1 ? { color: "goldenrod" } : {}}
                onClick={() => this.props.changeTab(1)}
              >
                Summary
              </li>
              <li
                style={tab === 2 ? { color: "goldenrod" } : {}}
                onClick={() => this.props.changeTab(2)}
              >
                Settings
              </li>
              <li
                style={tab === 3 ? { color: "goldenrod" } : {}}
                onClick={() => this.props.changeTab(3)}
              >
                Alerts
              </li>
              <li
                style={tab === 4 ? { color: "goldenrod" } : {}}
                onClick={() => this.props.changeTab(4)}
              >
                Trends
              </li>
            </ul>
          </div>
          <div className="col-md-10">
            <div className="mech-content">
              <div
                style={tab === 1 ? { display: "block" } : { display: "none" }}
              >
                { 
                  <Summary asset={asset} handlerFromParant={this.handleData} /> 
                }
              </div>
              <div
                style={tab === 2 ? { display: "block" } : { display: "none" }}
              >
                {tab === 2 ? <Settings asset={asset} /> : "" }
              </div>
              <div
                style={tab === 3 ? { display: "block" } : { display: "none" }}
              >
                <Alerts asset={asset} />
              </div>
              <div
                style={tab === 4 ? { display: "block" } : { display: "none" }}
              >
                <Trends asset={asset} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
