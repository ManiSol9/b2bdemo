import React, { Component } from "react";
import axios from "axios";
import { Icon, Label, Menu, Button, } from 'semantic-ui-react'
import { Modal, Input, Table, Divider, Tag } from 'antd';

import './main.css';
import "antd/dist/antd.css";

const Search = Input.Search;

const headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYcFlrem5DRTZ2Um9wMmRJekxLTFdlcy00elV4OXZTTGgwYW1HQzNLX3RaV1hLNHVRUXkwMWxLd1F4WndtcEh2ck9lckQ0WGFXSGw5bmJQV0szV1gtTnlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIiwia2lkIjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZDk5ZmVmOC0xY2QzLTRhMmEtOWJkZi0xNTUzMTE4MWQ2NWUvIiwiaWF0IjoxNTU3Mjk3Nzg4LCJuYmYiOjE1NTcyOTc3ODgsImV4cCI6MTU1NzMwMTY4OCwiYWlvIjoiNDJaZ1lKZ2U5MjZEbi9hZDlYeFg3cy9hTzJPRkZ3QT0iLCJhcHBfZGlzcGxheW5hbWUiOiJESExJT1RDb21tb25BcHAiLCJhcHBpZCI6ImRlMjE1ODhmLTBkYzAtNDEzMy04NTMwLTIyNDQzY2E1ZWFkZCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2NkOTlmZWY4LTFjZDMtNGEyYS05YmRmLTE1NTMxMTgxZDY1ZS8iLCJvaWQiOiJkOWQwMzcxYy1lN2NlLTRhM2EtYjQ3YS1iN2VjNmNmNmY2OGEiLCJyb2xlcyI6WyJVc2VyLlJlYWRXcml0ZS5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuSW52aXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiXSwic3ViIjoiZDlkMDM3MWMtZTdjZS00YTNhLWI0N2EtYjdlYzZjZjZmNjhhIiwidGlkIjoiY2Q5OWZlZjgtMWNkMy00YTJhLTliZGYtMTU1MzExODFkNjVlIiwidXRpIjoiOWZlb09VMkE3ay11cXVETklCSVVBQSIsInZlciI6IjEuMCIsInhtc190Y2R0IjoxNDA5OTA4MTc0fQ.yMl3PLIQCrYvbkvZ6VCyGl960aP2A9o497yVgxVrNxNFoRlfW6viPKYV2lNUlZDU0MSVZfwvv1IBLlQCkY1BLGSZXUR6YmDGjfB5V-_DBdBtACkiOg7TmyFn3h2X9cx5Hx8cPBGqq-tPQ4U_BWsoM0_fwYK5xxc1egl9tj4ppTDqZnqzbDxMRLPgYKS8JYKlbFkepgEa8EgRLw-wyIAYtTfd7xbf3Z4mCi0btXmc4U0yVR2YjfGyzR_dyVqo6R0s5ZEEyouLJ1DBPro-A3p9lRwL28h3zecHqcyvIuTHiGta_6ZmaPsqOMaJ-ETh87zWsuZQNpverarcCtJUy-ACFQ",
    "Content-Type": "application/json"
}



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
            inviteUserEmail: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentWillMount() {
        this.fetchDetails()
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
        axios({
            method: "get",
            url: "https://graph.microsoft.com/v1.0/users",
            headers: headers
        })
            .then(response => {
                console.log(response)

                var data = response.data.value

                this.setState({
                    users: data
                })

            })
            .catch(err => {
                console.log(err);
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

        var queryParam = "?$filter=startswith(mail, '" + value + "')"

        axios({
            method: "get",
            url: "https://graph.microsoft.com/v1.0/users" + queryParam,
            headers: headers
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
            headers: headers,
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
                headers: headers,
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
                    alert("Something went Problom!")
                    console.log(err);
                });
    
            this.handleCancel()
    
            event.preventDefault();


        }
    }


    render() {

        let users = this.state.users

        const columns = [
            {
                title: 'Dispay Name',
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
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
                </span>
                ),
            }
        ];
        
        return (
            <div className="body-container">
                <div className="header-container">
                    <h1>DHL B2B DEMO</h1>
                </div>
                <div className="body1 col-md-12">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="serachuser">
                                <Search
                                    placeholder="Search users by name"
                                    enterButton="Search"
                                    size="large"
                                    onSearch={value => this.handleSubmit(value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="invitebutton">
                                <Button type="primary" onClick={val => this.showModal("", "invite") }>Invite User</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 datatable">


                        <Table dataSource={users} columns={columns} class="col-md-12" style={{width: "100%"}} />

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
                        title="Invite user to DHL"
                        visible={this.state.visible}
                        onOk={value => this.handleInvite(value)}
                        onCancel={this.handleCancel}
                    >
                    <form>
                        <Input type="text" value={this.state.inviteDisplayName} name="invitename" onChange={this.handleChange} placeholder="Name" />
                        <br />
                        <Input type="email" value={this.state.inviteUserEmail} name="invitemail" onChange={this.handleChange} placeholder="Mail" />
                    </form>
                    </Modal>
                }

            </div>
        );
    }
}