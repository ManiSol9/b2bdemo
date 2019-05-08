import React, { Component } from "react";
import axios from "axios";
import { Icon, Label, Menu } from 'semantic-ui-react'
import { Modal, Input, Table, Divider, Tag, Button } from 'antd';

import './guest.css';
import "antd/dist/antd.css";

const Search = Input.Search;

const headers = {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYdHYzdUl2bk9xVFIwaTRPZWtvN2pTa2F5MFNxbzJYcF9qVE16dEhZUTZiVk91VXFPN2ZMNnR0NTVrWUt3WHZVV2pfQ0FMVFFVZnpVejAwVmg4c0pob1NBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIiwia2lkIjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZDk5ZmVmOC0xY2QzLTRhMmEtOWJkZi0xNTUzMTE4MWQ2NWUvIiwiaWF0IjoxNTU3MjEyNDA2LCJuYmYiOjE1NTcyMTI0MDYsImV4cCI6MTU1NzIxNjMwNiwiYWlvIjoiNDJaZ1lIajRSazcwN0N1VmVYZkNYRDBmUEhEaUJnQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJESExJT1RDb21tb25BcHAiLCJhcHBpZCI6ImRlMjE1ODhmLTBkYzAtNDEzMy04NTMwLTIyNDQzY2E1ZWFkZCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2NkOTlmZWY4LTFjZDMtNGEyYS05YmRmLTE1NTMxMTgxZDY1ZS8iLCJvaWQiOiJkOWQwMzcxYy1lN2NlLTRhM2EtYjQ3YS1iN2VjNmNmNmY2OGEiLCJyb2xlcyI6WyJVc2VyLlJlYWRXcml0ZS5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuSW52aXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiXSwic3ViIjoiZDlkMDM3MWMtZTdjZS00YTNhLWI0N2EtYjdlYzZjZjZmNjhhIiwidGlkIjoiY2Q5OWZlZjgtMWNkMy00YTJhLTliZGYtMTU1MzExODFkNjVlIiwidXRpIjoiejdnRFVScE42VWl3Tm83NldCd1BBQSIsInZlciI6IjEuMCIsInhtc190Y2R0IjoxNDA5OTA4MTc0fQ.Q5FkGZAQN6RvBmSL-M9zKMuSUwpoMjNRVoqdg-mf7SHvON55YqGSljLQzYGxHO6tIP79udp0TsrztEULTfp9swn7A_Pwh5gbRPV4o3I_qLDjor6W26k5W694oHC9K1zx2OWiaN4GzCdj4udaQkLwt2prnOcW3dq70mOmRLByzcFtmTrqnG3Rv9LZy_9tsISELo4gR49IajkzwkiZb6Gtgs_zMj-0tMmHrGXQmT8I7UlKSnZ5NvgXpMTnqu8FLl24qcWceaGBRnMcpMZGRh017p5SSLahV43psMPaSSw2aP4b2jss5XN2b3xZstkuMd8GHwjhkgLOQ93AUf-0XLLd1g",
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
                url: "http://dhlcp-b2b-externaluserappservice.azurewebsites.net/api/inviteguest",
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
