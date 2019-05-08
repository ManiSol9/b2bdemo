import React, { Component } from "react";
import CheckboxContainer from "../../common/CheckboxContainer.js";
import './settings.css';

import axios from "axios";

import { access_token, url_prod, url_dev } from "../../../config/config";

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className="col-md-12 inner-block">
                <div className="col-md-12 child-block-1">
                    <div className="col-md-12">
                        {
                            <CheckboxContainer assetData={this.props.asset} />
                        }
                    </div>
                </div>
            </div >
        );
    }
}
