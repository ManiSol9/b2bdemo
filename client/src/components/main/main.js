import React, { Component } from "react";
import axios from "axios";
import { Icon, Label, Menu, Button, } from 'semantic-ui-react'
import { Modal, Input, Table, Divider, Tag } from 'antd';

import './main.css';
import "antd/dist/antd.css";

const Search = Input.Search;

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            visible: false,
            value: '',
            name: '',
            lastname: '',
            mail: '',
            phone: '',
            search: '',
            inviteModel: 0,
            inviteDisplayName: '',
            inviteUserEmail: '',
            access_token: "eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYcXdIM3ZpYWFUMDRBWjY1bFVRSGlLT19IRmpSRG83cEozTlpobTZ6eEx1bHR3SkxsdlUwbklUOTBPQUFmTkNIWTQ2dkhNejR3azNHMjV1aThQNWU0WXlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIiwia2lkIjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZDk5ZmVmOC0xY2QzLTRhMmEtOWJkZi0xNTUzMTE4MWQ2NWUvIiwiaWF0IjoxNTU3NDkwMTYzLCJuYmYiOjE1NTc0OTAxNjMsImV4cCI6MTU1NzQ5NDA2MywiYWlvIjoiNDJaZ1lLaXR1SkRlY1dDMTFzS2JncmY1TXFiN0FnQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJESExJT1RDb21tb25BcHAiLCJhcHBpZCI6ImRlMjE1ODhmLTBkYzAtNDEzMy04NTMwLTIyNDQzY2E1ZWFkZCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2NkOTlmZWY4LTFjZDMtNGEyYS05YmRmLTE1NTMxMTgxZDY1ZS8iLCJvaWQiOiJkOWQwMzcxYy1lN2NlLTRhM2EtYjQ3YS1iN2VjNmNmNmY2OGEiLCJyb2xlcyI6WyJVc2VyLlJlYWRXcml0ZS5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuSW52aXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiXSwic3ViIjoiZDlkMDM3MWMtZTdjZS00YTNhLWI0N2EtYjdlYzZjZjZmNjhhIiwidGlkIjoiY2Q5OWZlZjgtMWNkMy00YTJhLTliZGYtMTU1MzExODFkNjVlIiwidXRpIjoiSXpNNGxpTjBmRXF0MmZVWnAzY2ZBQSIsInZlciI6IjEuMCIsInhtc190Y2R0IjoxNDA5OTA4MTc0fQ.cZJslbAcMH4Khx4TmFdlFxW4SmR56fc93EiA7l2zScZzdx0iXMvlquCm0TApwuHZEAT2EDRy06xedrtYC_RoJNBg5LgTvaXm_6Tvlj4pzSdhbMrgveEy_CpRhmg4Qwz1oSg2abKfHYYX55AXnarQ7QM6p_Ba8vVBRPuhOtq3xYgk63Q2qCWWlqiaIY_29bsx0xsdhpOjNMMZlNMZlRLivTap5NkRbWUcAeaygVHyFGPM1kTLhsUfT5ihLT2wTIMhTFEHSRS8simRn67LRLaOzoHWv32pW-1sfcQcgilyjoVb_lRt-vMxUoK0DLbRGYMX2BHEzpfN9tLEk86XgOl2jQ",
            inviteOk: true,
            nexLink: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentWillMount() {
        this.fetchAccessToken()
        //this.fetchDetails()
    }


    fetchAccessToken = () => {
        axios({
            method: "get",
            url: "https://dhlcp-b2b-externaluserappservice.azurewebsites.net/api/getToken",
            headers:{
                'content-type': 'application/x-www-form-urlencoded',
                "accept": 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                console.log(response)
                this.setState({
                    access_token: response.data.output.access_token
                }, () => {
                    this.fetchDetails()
                })
            })
            .catch(err => {

            });
    }


    showModal = (user, val) => {

        if(val == "update"){
            this.setState({
                inviteModel: 0,
                visible: true,
                name: user.displayName,
                mail: user.mail,
                phone: user.mobilePhone,
                lastname: user.surname,
                id: user.id,
            });
        } else {
            this.setState({
                inviteModel: 1,
                visible: true
            })
        }
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    // funciton to fetch the motors assosiated with mindsphere
    fetchDetails = () => {

        let nextLinkText  = "@odata.nextLink"

        axios({
            method: "get",
            url: "https://graph.microsoft.com/v1.0/users",
            headers:{
                "Authorization": "Bearer "+ this.state.access_token,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response.data.odata.nextLink)

                if(nextLinkText in response.data){
                    this.setState({
                        nexLink: response.data.nextLink
                    })
                }

                var data = response.data.value

                this.setState({
                    users: data,
                    search: ''
                })

            })
            .catch(err => {
                console.log(err);
                if(err.response.status == 401){
                } else {
                    alert("Something went Problem!, Please try again later")
                }
            });
    };

    open = () => {
        alert("hi")
    }

    handleChange = (event) => {

        const { name, value } = event.target;
        if (name === "search") {
            this.setState({ search: value });
        }
        if (name === "name") {
            this.setState({ name: value });
        }
        if (name === "mail") {
            this.setState({ mail: value });
        }
        if (name === "phone") {
            this.setState({ phone: value });
        }
        if (name === "lastname") {
            this.setState({ lastname: value });
        }
        if (name === "invitename") {
            this.setState({ inviteDisplayName: value });
        }
        if (name === "invitemail") {
            this.setState({ inviteUserEmail: value });
        }

    }

    handleSubmit = (value) => {

        this.setState({
            search: value
        })

        var queryParam = "?$filter=startswith(mail, '" + value + "')"

        axios({
            method: "get",
            url: "https://graph.microsoft.com/v1.0/users" + queryParam,
            headers: {
                "Authorization": "Bearer "+ this.state.access_token,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response)

                let arra = []

                var data = response.data.value

                arra.push(data)

                this.setState({
                    users: data
                })

            })
            .catch(err => {
                console.log(err);
            });

        //event.preventDefault();

    }


    handleUpdate = (event) => {

        axios({
            method: "PATCH",
            url: "https://graph.microsoft.com/v1.0/users/"+ this.state.id,
            headers: {
                "Authorization": "Bearer "+ this.state.access_token,
                "Content-Type": "application/json"
            },
            data: {
                "accountEnabled": true,
                "givenName": this.state.lastname,
                "mobilePhone": this.state.phone,
                "displayName": this.state.firstname
              }
        })
            .then(response => {
                console.log(response)
                alert("Updated Suucessfully")
            })
            .catch(err => {
                alert("Something went Problom!")
                console.log(err);
            });

            this.handleCancel()

        event.preventDefault();

    }

    handleInvite = (event) => {
        if(this.state.inviteDisplayName == '' || this.state.inviteUserEmail == ''){
            alert("Please fill the fields")
        } else {
            let email = this.state.inviteUserEmail

            axios({
                method: "POST",
                url: "https://graph.microsoft.com/v1.0/invitations",
                headers: {
                    "Authorization": "Bearer "+ this.state.access_token,
                    "Content-Type": "application/json"
                },
                data: {
                    "invitedUserDisplayName": this.state.inviteDisplayName,
                    "invitedUserEmailAddress": this.state.inviteUserEmail,
                    "sendInvitationMessage": true,
                    "inviteRedirectUrl": "https://iot.dhl.com/",
                    "inviteRedeemUrl": "https://iot.dhl.com/"
                  }
            })
                .then(response => {
                    console.log(response)

                    if(response.status === 201){

                        alert("Invitation sent Successfully")

                    }

                })
                .catch(err => {
                    console.log(err);
                });
    
            this.handleCancel()
    
            event.preventDefault();


        }
    }


    checkEmail = () => {

        let email = this.state.inviteUserEmail

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {

            var queryParam = "?$filter=startswith(mail, '" + email + "')"

            axios({
                method: "get",
                url: "https://graph.microsoft.com/v1.0/users" + queryParam,
                headers: {
                    "Authorization": "Bearer "+ this.state.access_token,
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    console.log(response)

                    let userData = response.data.value

                    if(userData.length == 1){

                        alert("Already registered Please try again with another email")

                        this.setState({
                            inviteOk: true,
                            inviteUserEmail: ''
                        })


                    } else {

                        this.setState({
                            inviteOk: false
                        })

                    }

                })
                .catch(err => {
                    console.log(err);

                    alert("Something Went wrong, Please try again later")

                });
            


        } else {

            alert("Not a Valid Email Address")

            this.setState({
                inviteOk: true
            })

        }

    }

    checkName = () => {

        let name = this.state.inviteDisplayName

        var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if (format.test(name) == true)
        {
            alert("Not a valid name")

            this.setState({
                inviteDisplayName: null
            })

        } else {

            console.log("Ok!")

        }

    }




    render() {

        let users = this.state.users

        const columns = [
            {
                title: 'Display Name',
                dataIndex: 'displayName',
                key: 'name',
                render: text => <a href="javascript:;">{text}</a>,
            }, 
            {
                title: 'User Principal Name',
                dataIndex: 'userPrincipalName',
                key: 'userPrincipalName',
            }, 
            {
                title: 'Business Phone',
                dataIndex: 'mobilePhone',
                key: 'businessPhones',
            }, 
            {
                title: 'Job Title',
                dataIndex: 'jobTitle',
                key: 'Job Title',
            }, 
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                <span>
                    <Button onClick={() => this.showModal(record, "update")}> Update </Button>
                </span>
                ),
            }
        ];
        
        return (
            <div className="body-container">
                <div className="header-container">
                    <img style={{paddingLeft: "4%"}} alt="logo" src="https://iot.dhl.com/assets/images/dhl_logo.png" />
                    <div style={{textAlign: "center", width: "73%"}}><h1>B2B DEMO APP</h1></div>
                </div>
                <div className="body1 col-md-12">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="serachuser col-md-8">
                                <Search
                                    placeholder="Search users by mail or name"
                                    enterButton="Search"
                                    size="large"
                                    value={this.state.search}
                                    onChange={this.handleChange}
                                    name="search"
                                    onSearch={value => this.handleSubmit(value)}
                                />
                            </div>
                            <button onClick={this.fetchDetails} onAnimationEnd class="ui button design">Clear Search</button>
                        </div>
                        <div className="col-md-4">
                            <div className="invitebutton">
                                <Button type="primary" onClick={val => this.showModal("", "invite") }>Invite User</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 datatable">


                        <Table dataSource={users}  columns={columns} class="col-md-12" style={{width: "100%"}} />

                        {

                            /*
    
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Display Name</Table.HeaderCell>
                                        <Table.HeaderCell>Mail</Table.HeaderCell>
                                        <Table.HeaderCell>Business Phones</Table.HeaderCell>
                                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                                        <Table.HeaderCell>Action</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {
                                        users.map((user, i) => {
                                            return (
                                                <Table.Row>
                                                    <Table.Cell>{user.displayName}</Table.Cell>
                                                    <Table.Cell>{user.userPrincipalName}</Table.Cell>
                                                    <Table.Cell>{user.businessPhones[0]}</Table.Cell>
                                                    <Table.Cell>{user.jobTitle}</Table.Cell>
                                                    <Table.Cell>
                                                        <Button onClick={() => this.showModal(user)}> Update </Button>
                                                    </Table.Cell>
                                                </Table.Row>
                                            );
                                        })
                                    }
                                </Table.Body>
                                <Table.Footer>
                                </Table.Footer>
                            </Table>
    
                            */

                        }

                    </div>
                </div>


                {
                    this.state.inviteModel == 0 ?

                    <Modal
                    title="Update user details"
                    visible={this.state.visible}
                    onOk={value => this.handleUpdate(value)}
                    onCancel={this.handleCancel}
                    >
                        <form onSubmit={this.handleUpdate}>
                            <Input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Name" />
                            <br />
                            <Input type="text" value={this.state.lastname} name="lastname" onChange={this.handleChange} placeholder="Last Name" />
                            <br />
                            <Input type="text" disabled value={this.state.mail} name="mail" onChange={this.handleChange} placeholder="Mail" />
                            <br />
                            <Input type="text" value={this.state.phone} name="phone" onChange={this.handleChange} placeholder="Mobile Phone" />
                        </form>
                    </Modal>

                    :

                    <Modal
                        title="Invite External User"
                        visible={this.state.visible}
                        onOk={value => this.handleInvite(value)}
                        onCancel={this.handleCancel}
                        okButtonProps={{ disabled: this.state.inviteOk }}
                        okText="INVITE"
                    >
                    <form>
                        <Input type="text" value={this.state.inviteDisplayName} required name="invitename" onBlur={this.checkName} onChange={this.handleChange} placeholder="Name" />
                        <br />
                        <Input type="email" value={this.state.inviteUserEmail} required onBlur={this.checkEmail} name="invitemail" onChange={this.handleChange} placeholder="Mail" />
                    </form>
                    </Modal>
                }

            </div>
        );
    }
}
