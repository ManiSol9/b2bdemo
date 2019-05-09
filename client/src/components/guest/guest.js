import React, { Component } from "react";
import axios from "axios";
import { Icon, Label, Menu } from 'semantic-ui-react'
import { Modal, Input, Table, Divider, Tag, Button } from 'antd';

import './guest.css';
import "antd/dist/antd.css";

const Search = Input.Search;

const headers = {
    "Content-Type": "application/json",
}



export default class Guest extends Component {
    constructor() {
        super();
        this.state = {
            nickname: '',
            lastname: '',
            firstname: '',
            phone: '',
            email: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "nickname") {
            this.setState({ nickname: value });
        }
        if (name === "firstname") {
            this.setState({ firstname: value });
        }
        if (name === "email") {
            this.setState({ email: value });
        }
        if (name === "phone") {
            this.setState({ phone: value });
        }
        if (name === "lastname") {
            this.setState({ lastname: value });
        }
    }


    handleSubmit = (e) => {

        console.log(this.state)


        if(this.state.firstname == '' || this.state.lastname == '' || this.state.email == '' || this.state.phone == '' || this.state.nickname == ''){

            alert("Please fill all the fields")

        } else {

            axios({
                method: "POST",
                url: "https://dhlcp-b2b-externaluserappservice.azurewebsites.net/api/inviteguest",
                headers: headers,
                data: {
                    "firstname": this.state.firstname,
                    "lastname": this.state.lastname,
                    "email": this.state.email,
                    "phone": this.state.phone,
                    "nickname": this.state.nickname
                  }
            })
                .then(response => {
                    console.log(response)

                    if(response.status === 201){

                        alert("Invitation sent Successfully")

                        this.setState({
                            firstname: '',
                            lastname: '',
                            email: '',
                            phone: '',
                            nickname: ''
                        })

                    }

                })
                .catch(err => {
                    alert("Something went Problom!")
                    console.log(err);
            });
    

        }

        e.preventDefault();

    }

    render() {
        return (
            <div className="body-container">
                <div className="header-container">
                    <h1>DHL B2B GUEST USER INVITATION REQUEST</h1>
                </div>
                <div className="body1 col-md-12">
                    <div className="col-md-12 datatable">
                        <div className="col-md-6 userdiv">
                            <div className="col-md-12 inputdiv">
                                <div className="col-md-4 leftdiv">
                                    <label>First Name</label>
                                </div>
                                <div className="col-md-8 rightdiv">
                                    <Input
                                        name="firstname"
                                        value={this.state.firstname}
                                        onChange={this.handleChange}
                                        placeholder="Enter firstname"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12 inputdiv">
                                <div className="col-md-4 leftdiv">
                                    <label>Last Name</label>
                                </div>
                                <div className="col-md-8 rightdiv">
                                    <Input 
                                        name="lastname"
                                        value={this.state.lastname}
                                        onChange={this.handleChange}
                                        placeholder="Enter lastname"
                                    />
                                </div>
                            </div>


                            <div className="col-md-12 inputdiv">
                                <div className="col-md-4 leftdiv">
                                    <label>Nick Name</label>
                                </div>
                                <div className="col-md-8 rightdiv">
                                    <Input 
                                        name="nickname"
                                        value={this.state.nickname}
                                        onChange={this.handleChange}
                                        placeholder="Enter nickname"
                                     />
                                </div>
                            </div>

                            <div className="col-md-12 inputdiv">
                                <div className="col-md-4 leftdiv">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-8 rightdiv">
                                    <Input 
                                        name="email" 
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder="Enter Email"
                                        type="email"
                                    />
                                </div>
                            </div>


                            <div className="col-md-12 inputdiv">
                                <div className="col-md-4 leftdiv">
                                    <label>Phone</label>
                                </div>
                                <div className="col-md-8 rightdiv">
                                    <Input 
                                        name="phone" 
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        placeholder="Enter phone"
                                        type="number"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12 inputdiv">
                                <Button type="primary" style={{ width: '40%' }} onClick={this.handleSubmit}>
                                    Check
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
