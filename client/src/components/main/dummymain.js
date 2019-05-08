import React, { Component } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import machines from '../assets/iconfinder_technology-machine-electronic-device-24_4026436.svg'; // Tell Webpack this JS file uses this image
import settings from '../assets/settings-gears.svg'; // Tell Webpack this JS file uses this image
import degrees from '../assets/360-degrees.svg';
import visibility from '../assets/visibility.svg';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './main.css';
import MechineDetails from "../mechinedetails/mechinedetails"
import { access_token, url_prod, url_dev } from "../../config/config"
import LampTower from '../assets/LampTower.svg'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class Main extends Component {
    constructor() {
        super();
        this.settings = this.settings.bind(this);
        this.summary = this.summary.bind(this);
        this.alerts = this.alerts.bind(this);
        this.state = {
            assets: [1, 2, 3],
            show: false,
            tabData: {},
            activeDiv: null,
            collapse: false,
            settings: false,
            summary: false,
            alerts: false,
            settingclicks: 0,
            summaryclicks: 0,
            alertclicks: 0,
            showdivid: null
        };
    }

    componentWillMount() {
        //this.fetchDetails()
    }

    toggle(val, showdivid) {

        this.setState({
            collapse: true,
            showdivid: showdivid
        })

        /*

        alert(val)

        this.setState({
            clicks: this.state.clicks + 1
        })


        if (this.state.clicks > 0) {

            console.log(val)

            if (val == "settings") {

                this.setState({
                    collapse: false,
                    clicks: 0
                })

            } else {

                this.setState({
                    collapse: true,
                    showdivid: showdivid
                })

            }

        } else {

            this.setState({
                collapse: true,
                showdivid: showdivid
            })

        }

        */

    }

    fetchDetails = () => {

        axios({
            method: "get",
            url: "https://gateway.eu1.mindsphere.io/api/assetmanagement/v3/assets",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + access_token
            }
        })
            .then(response => {
                var data = response.data._embedded.assets

                const asset = []

                for (let i = 0; i < data.length; i++) {
                    asset.push(data[i])
                }

                this.setState({
                    assets: asset
                })



            })
            .catch(err => {
                console.log(err);
            });

    }

    settings = (val, showdivid) => {
        alert(showdivid)
        if (this.state.settingclicks < 2 && this.state.showdivid == showdivid) {
            this.setState({
                collapse: false,
                showdivid: null,
                settingclicks: 0,
                summaryclicks: 0,
                alertclicks: 0
            })

        } else {
            this.setState({
                collapse: true,
                showdivid: showdivid,
                settingclicks: this.state.settingclicks + 1,
                summaryclicks: 0,
                alertclicks: 0                
            })
        }
    }

    summary = (val, showdivid) => {
        if (this.state.summaryclicks < 2 && this.state.showdivid == showdivid) {
            this.setState({
                collapse: false,
                showdivid: null,
                summaryclicks: 0,
                alertclicks: 0,
                settingclicks: 0

            })

        } else {
            this.setState({
                collapse: true,
                showdivid: null,
                summaryclicks: this.state.summaryclicks + 1,
                alertclicks: 0,
                settingclicks: 0
            })
        }
    }

    alerts = (val, showdivid) => {
        if (this.state.alertclicks < 2 && this.state.showdivid == showdivid) {
            this.setState({
                collapse: false,
                showdivid: showdivid,
                alertclicks: 0,
                summaryclicks: 0,
                settingclicks: 0
            })

        } else {
            this.setState({
                collapse: true,
                showdivid: showdivid,
                alertclicks: this.state.alertclicks + 1,
                summaryclicks: 0,
                settingclicks: 0
            })
        }
    }


    render() {

        let motors = this.state.assets

        console.log(this.state)

        return (
            <div className="body-container">
                <div className="header">
                    <div className="col-md-10">
                        <div className="header-left">
                            <span style={{ "fontFamily": "inherit", "fontSize": "25px", "fontWeight": "bold", "color": "#343d4d" }}>EDGEX</span>
                        </div>
                    </div>
                    <div className="col-md-2 header-right">

                    </div>
                </div>
                <div className="main-body">
                    <div className="col-md-12 body-right">
                        <div className="body-header">
                            <img style={{ width: "45px" }} src={machines} alt="Logo" />
                            <div className="body-header-title">Machines</div>
                            <div className="body-header-subtitle">Lorem ipustem doler ee sumit</div>
                        </div>
                        <div className="col-md-12 body-content">
                            <div className="contnet-title">
                                Status
                                </div>
                            <div className="content-body">

                                <div class="panel-group" id="accordion">

                                    {

                                        motors.map((motor_details, i) => {

                                            let tabData = {
                                                tabActive: "settings",
                                                assetId: 1
                                            }

                                            let collapse = false

                                            if (i == this.state.showdivid && this.state.collapse) {
                                                collapse = true
                                            } else {
                                                collapse = false
                                            }

                                            return (

                                                <div class="panel panel-default">

                                                    <div className="col-md-12 content-child">
                                                        <div className="col-md-1 inner-element-next">
                                                            <img style={{ width: "10px" }} src={LampTower} alt="Logo" />
                                                        </div>
                                                        <div className="col-md-2 inner-element">
                                                            <span className="inner-sub-text">
                                                                ODM-3415
                                                            </span>
                                                            <br />
                                                            <span className="inner-sub-text">
                                                                Oil Bending Mechine
                                                            </span>
                                                        </div>
                                                        <div className="col-md-2 inner-element">
                                                            <span className="inner-text">
                                                                SEC-3415
                                                            </span>
                                                        </div>
                                                        <div className="col-md-1 inner-element-next">
                                                            <span className="inner-text">
                                                                Running
                                                            </span>
                                                        </div>
                                                        <div className="col-md-2 inner-element" style={{ "textAlign": "center" }}>
                                                            <span className="inner-text">
                                                                EDGEX
                                                            </span>
                                                            <br />
                                                            <span className="inner-sub-text">
                                                                2018-19-08 00:00 AM
                                                            </span>
                                                        </div>
                                                        <div className="col-md-2 inner-element" style={{ "textAlign": "center" }}>
                                                            <span className="inner-text">
                                                                Mindsphere
                                                            </span>
                                                            <br />
                                                            <span className="inner-sub-text">
                                                                2018-19-08 00:00 AM
                                                            </span>
                                                        </div>
                                                        <div className="col-md-2 inner-element-next" style={{ "textAlign": "center" }}>
                                                            <span className="iconView">
                                                                <img onClick={() => this.settings("settings", i)} style={{ width: "25px" }} src={settings} alt="Logo" />
                                                            </span>
                                                            <span className="iconView">
                                                                <img onClick={() => this.summary("summary", i)} style={{ width: "25px" }} src={visibility} alt="Logo" />
                                                            </span>
                                                            <span className="iconView">
                                                                <img onClick={() => this.alerts("alerts", i)} style={{ width: "25px" }} src={degrees} alt="Logo" />
                                                            </span>
                                                        </div>

                                                    </div>


                                                    <Collapse isOpen={collapse} className="col-md-12">

                                                       erwwerwrew

                                                    </Collapse>

                                                </div>
                                            )

                                        }
                                        )

                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
