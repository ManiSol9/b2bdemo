(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(e,a,t){e.exports=t(473)},253:function(e,a,t){},272:function(e,a,t){},467:function(e,a,t){},468:function(e,a,t){},473:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(8),c=t.n(i),s=(t(253),t(73)),m=t(74),o=t(78),r=t(75),h=t(77),d=t(63),u=t(158),v=t(79),E=t(64),p=t.n(E),N=t(478),I=t(479),b=t(476),y=t(477),f=t(480),T=(t(272),t(171),I.a.Search),k={Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYcFlrem5DRTZ2Um9wMmRJekxLTFdlcy00elV4OXZTTGgwYW1HQzNLX3RaV1hLNHVRUXkwMWxLd1F4WndtcEh2ck9lckQ0WGFXSGw5bmJQV0szV1gtTnlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIiwia2lkIjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZDk5ZmVmOC0xY2QzLTRhMmEtOWJkZi0xNTUzMTE4MWQ2NWUvIiwiaWF0IjoxNTU3Mjk3Nzg4LCJuYmYiOjE1NTcyOTc3ODgsImV4cCI6MTU1NzMwMTY4OCwiYWlvIjoiNDJaZ1lKZ2U5MjZEbi9hZDlYeFg3cy9hTzJPRkZ3QT0iLCJhcHBfZGlzcGxheW5hbWUiOiJESExJT1RDb21tb25BcHAiLCJhcHBpZCI6ImRlMjE1ODhmLTBkYzAtNDEzMy04NTMwLTIyNDQzY2E1ZWFkZCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2NkOTlmZWY4LTFjZDMtNGEyYS05YmRmLTE1NTMxMTgxZDY1ZS8iLCJvaWQiOiJkOWQwMzcxYy1lN2NlLTRhM2EtYjQ3YS1iN2VjNmNmNmY2OGEiLCJyb2xlcyI6WyJVc2VyLlJlYWRXcml0ZS5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuSW52aXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiXSwic3ViIjoiZDlkMDM3MWMtZTdjZS00YTNhLWI0N2EtYjdlYzZjZjZmNjhhIiwidGlkIjoiY2Q5OWZlZjgtMWNkMy00YTJhLTliZGYtMTU1MzExODFkNjVlIiwidXRpIjoiOWZlb09VMkE3ay11cXVETklCSVVBQSIsInZlciI6IjEuMCIsInhtc190Y2R0IjoxNDA5OTA4MTc0fQ.yMl3PLIQCrYvbkvZ6VCyGl960aP2A9o497yVgxVrNxNFoRlfW6viPKYV2lNUlZDU0MSVZfwvv1IBLlQCkY1BLGSZXUR6YmDGjfB5V-_DBdBtACkiOg7TmyFn3h2X9cx5Hx8cPBGqq-tPQ4U_BWsoM0_fwYK5xxc1egl9tj4ppTDqZnqzbDxMRLPgYKS8JYKlbFkepgEa8EgRLw-wyIAYtTfd7xbf3Z4mCi0btXmc4U0yVR2YjfGyzR_dyVqo6R0s5ZEEyouLJ1DBPro-A3p9lRwL28h3zecHqcyvIuTHiGta_6ZmaPsqOMaJ-ETh87zWsuZQNpverarcCtJUy-ACFQ","Content-Type":"application/json"},M=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(r.a)(a).call(this))).showModal=function(a,t){"update"==t?e.setState({inviteModel:0,visible:!0,name:a.displayName,mail:a.mail,phone:a.mobilePhone,lastname:a.surname,id:a.id}):e.setState({inviteModel:1,visible:!0})},e.handleOk=function(a){console.log(a),e.setState({visible:!1})},e.handleCancel=function(a){console.log(a),e.setState({visible:!1})},e.fetchDetails=function(){p()({method:"get",url:"https://graph.microsoft.com/v1.0/users",headers:k}).then(function(a){console.log(a);var t=a.data.value;e.setState({users:t})}).catch(function(e){console.log(e)})},e.open=function(){alert("hi")},e.handleChange=function(a){var t=a.target,n=t.name,l=t.value;"search"===n&&e.setState({search:l}),"name"===n&&e.setState({name:l}),"mail"===n&&e.setState({mail:l}),"phone"===n&&e.setState({phone:l}),"lastname"===n&&e.setState({lastname:l}),"invitename"===n&&e.setState({inviteDisplayName:l}),"invitemail"===n&&e.setState({inviteUserEmail:l})},e.handleSubmit=function(a){var t="?$filter=startswith(mail, '"+a+"')";p()({method:"get",url:"https://graph.microsoft.com/v1.0/users"+t,headers:k}).then(function(a){console.log(a);var t=a.data.value;[].push(t),e.setState({users:t})}).catch(function(e){console.log(e)})},e.handleUpdate=function(a){p()({method:"PATCH",url:"https://graph.microsoft.com/v1.0/users/"+e.state.id,headers:k,data:{accountEnabled:!0,givenName:e.state.lastname,mobilePhone:e.state.phone,displayName:e.state.firstname}}).then(function(e){console.log(e),alert("Updated Suucessfully")}).catch(function(e){alert("Something went Problom!"),console.log(e)}),e.handleCancel(),a.preventDefault()},e.handleInvite=function(a){if(""==e.state.inviteDisplayName||""==e.state.inviteUserEmail)alert("Please fill the fields");else{e.state.inviteUserEmail;p()({method:"POST",url:"https://graph.microsoft.com/v1.0/invitations",headers:k,data:{invitedUserDisplayName:e.state.inviteDisplayName,invitedUserEmailAddress:e.state.inviteUserEmail,sendInvitationMessage:!0,inviteRedirectUrl:"https://iot.dhl.com/",inviteRedeemUrl:"https://iot.dhl.com/"}}).then(function(e){console.log(e),201===e.status&&alert("Invitation sent Successfully")}).catch(function(e){alert("Something went Problom!"),console.log(e)}),e.handleCancel(),a.preventDefault()}},e.state={users:[],visible:!1,value:"",name:"",lastname:"",mail:"",phone:"",search:"",inviteModel:0,inviteDisplayName:"",inviteUserEmail:""},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e.handleUpdate=e.handleUpdate.bind(Object(v.a)(e)),e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this,a=this.state.users,t=[{title:"Dispay Name",dataIndex:"displayName",key:"name",render:function(e){return l.a.createElement("a",{href:"javascript:;"},e)}},{title:"User Principal Name",dataIndex:"userPrincipalName",key:"userPrincipalName"},{title:"Business Phone",dataIndex:"mobilePhone",key:"businessPhones"},{title:"Job Title",dataIndex:"jobTitle",key:"Job Title"},{title:"Action",key:"action",render:function(a,t){return l.a.createElement("span",null,l.a.createElement(N.a,{onClick:function(){return e.showModal(t,"update")}}," Update "),l.a.createElement(b.a,{type:"vertical"}),l.a.createElement("a",{href:"javascript:;"},"Delete"))}}];return l.a.createElement("div",{className:"body-container"},l.a.createElement("div",{className:"header-container"},l.a.createElement("h1",null,"DHL B2B DEMO")),l.a.createElement("div",{className:"body1 col-md-12"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"serachuser"},l.a.createElement(T,{placeholder:"Search users by name",enterButton:"Search",size:"large",onSearch:function(a){return e.handleSubmit(a)}}))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"invitebutton"},l.a.createElement(N.a,{type:"primary",onClick:function(a){return e.showModal("","invite")}},"Invite User")))),l.a.createElement("div",{className:"col-md-12 datatable"},l.a.createElement(y.a,{dataSource:a,columns:t,class:"col-md-12",style:{width:"100%"}}))),0==this.state.inviteModel?l.a.createElement(f.a,{title:"Update user details",visible:this.state.visible,onOk:function(a){return e.handleUpdate(a)},onCancel:this.handleCancel},l.a.createElement("form",{onSubmit:this.handleUpdate},l.a.createElement(I.a,{type:"text",value:this.state.name,name:"name",onChange:this.handleChange,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement(I.a,{type:"text",value:this.state.lastname,name:"lastname",onChange:this.handleChange,placeholder:"Last Name"}),l.a.createElement("br",null),l.a.createElement(I.a,{type:"text",disabled:!0,value:this.state.mail,name:"mail",onChange:this.handleChange,placeholder:"Mail"}),l.a.createElement("br",null),l.a.createElement(I.a,{type:"text",value:this.state.phone,name:"phone",onChange:this.handleChange,placeholder:"Mobile Phone"}))):l.a.createElement(f.a,{title:"Invite user to DHL",visible:this.state.visible,onOk:function(a){return e.handleInvite(a)},onCancel:this.handleCancel},l.a.createElement("form",null,l.a.createElement(I.a,{type:"text",value:this.state.inviteDisplayName,name:"invitename",onChange:this.handleChange,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement(I.a,{type:"email",value:this.state.inviteUserEmail,name:"invitemail",onChange:this.handleChange,placeholder:"Mail"}))))}}]),a}(n.Component),j=t(32),C=(t(467),I.a.Search,{Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYdHYzdUl2bk9xVFIwaTRPZWtvN2pTa2F5MFNxbzJYcF9qVE16dEhZUTZiVk91VXFPN2ZMNnR0NTVrWUt3WHZVV2pfQ0FMVFFVZnpVejAwVmg4c0pob1NBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIiwia2lkIjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZDk5ZmVmOC0xY2QzLTRhMmEtOWJkZi0xNTUzMTE4MWQ2NWUvIiwiaWF0IjoxNTU3MjEyNDA2LCJuYmYiOjE1NTcyMTI0MDYsImV4cCI6MTU1NzIxNjMwNiwiYWlvIjoiNDJaZ1lIajRSazcwN0N1VmVYZkNYRDBmUEhEaUJnQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJESExJT1RDb21tb25BcHAiLCJhcHBpZCI6ImRlMjE1ODhmLTBkYzAtNDEzMy04NTMwLTIyNDQzY2E1ZWFkZCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2NkOTlmZWY4LTFjZDMtNGEyYS05YmRmLTE1NTMxMTgxZDY1ZS8iLCJvaWQiOiJkOWQwMzcxYy1lN2NlLTRhM2EtYjQ3YS1iN2VjNmNmNmY2OGEiLCJyb2xlcyI6WyJVc2VyLlJlYWRXcml0ZS5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuSW52aXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiXSwic3ViIjoiZDlkMDM3MWMtZTdjZS00YTNhLWI0N2EtYjdlYzZjZjZmNjhhIiwidGlkIjoiY2Q5OWZlZjgtMWNkMy00YTJhLTliZGYtMTU1MzExODFkNjVlIiwidXRpIjoiejdnRFVScE42VWl3Tm83NldCd1BBQSIsInZlciI6IjEuMCIsInhtc190Y2R0IjoxNDA5OTA4MTc0fQ.Q5FkGZAQN6RvBmSL-M9zKMuSUwpoMjNRVoqdg-mf7SHvON55YqGSljLQzYGxHO6tIP79udp0TsrztEULTfp9swn7A_Pwh5gbRPV4o3I_qLDjor6W26k5W694oHC9K1zx2OWiaN4GzCdj4udaQkLwt2prnOcW3dq70mOmRLByzcFtmTrqnG3Rv9LZy_9tsISELo4gR49IajkzwkiZb6Gtgs_zMj-0tMmHrGXQmT8I7UlKSnZ5NvgXpMTnqu8FLl24qcWceaGBRnMcpMZGRh017p5SSLahV43psMPaSSw2aP4b2jss5XN2b3xZstkuMd8GHwjhkgLOQ93AUf-0XLLd1g","Content-Type":"application/json"}),Z=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(r.a)(a).call(this))).handleChange=function(a){var t=a.target,n=t.name,l=t.value;"nickname"===n&&e.setState({nickname:l}),"firstname"===n&&e.setState({firstname:l}),"email"===n&&e.setState({email:l}),"phone"===n&&e.setState({phone:l}),"lastname"===n&&e.setState({lastname:l})},e.handleSubmit=function(a){console.log(e.state),""==e.state.firstname||""==e.state.lastname||""==e.state.email||""==e.state.phone||""==e.state.nickname?alert("Please fill all the fields"):p()({method:"POST",url:"http://dhlcp-b2b-externaluserappservice.azurewebsites.net/api/inviteguest",headers:C,data:{firstname:e.state.firstname,lastname:e.state.lastname,email:e.state.email,phone:e.state.phone,nickname:e.state.nickname}}).then(function(e){console.log(e),201===e.status&&alert("Invitation sent Successfully")}).catch(function(e){alert("Something went Problom!"),console.log(e)}),a.preventDefault()},e.state={nickname:"",lastname:"",firstname:"",phone:"",email:""},e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"body-container"},l.a.createElement("div",{className:"header-container"},l.a.createElement("h1",null,"DHL B2B GUEST USER INVITATION REQUEST")),l.a.createElement("div",{className:"body1 col-md-12"},l.a.createElement("div",{className:"col-md-12 datatable"},l.a.createElement("div",{className:"col-md-6 userdiv"},l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"First Name")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(I.a,{name:"firstname",value:this.state.firstname,onChange:this.handleChange,placeholder:"Enter firstname"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"Last Name")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(I.a,{name:"lastname",value:this.state.lastname,onChange:this.handleChange,placeholder:"Enter lastname"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"Nick Name")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(I.a,{name:"nickname",value:this.state.nickname,onChange:this.handleChange,placeholder:"Enter nickname"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"Email")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(I.a,{name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter Email",type:"email"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"Phone")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(I.a,{name:"phone",value:this.state.phone,onChange:this.handleChange,placeholder:"Enter phone",type:"number"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement(j.a,{type:"primary",style:{width:"40%"},onClick:this.handleSubmit},"Check"))))))}}]),a}(n.Component),S=(t(468),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/admin",component:M})),l.a.createElement(d.a,{exact:!0,path:"/",component:Z})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[248,1,2]]]);
//# sourceMappingURL=main.23d0948a.chunk.js.map