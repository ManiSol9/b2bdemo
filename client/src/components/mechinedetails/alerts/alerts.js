import React, { Component } from "react";
import { Table } from 'antd';
import './alerts.css';

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Value', dataIndex: 'value', key: 'value' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
];

var data = [];

export default class Alerts extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentWillMount() {
        data.push({
            name: this.props.name, value: this.props.value, time: Math.floor(Date.now() / 1000)
        });

    }


    render() {
        return (
            <div className="col-md-12 inner-block">
                <div className="col-md-6 child-block-1">
                    <div>
                        {

                        }
                    </div>
                </div>
                <div className="col-md-6 child-block-2">
                </div>
            </div >
        );
    }
}
