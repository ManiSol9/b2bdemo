(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(e,t,a){e.exports=a(473)},253:function(e,t,a){},272:function(e,t,a){},467:function(e,t,a){},468:function(e,t,a){},473:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(8),s=a.n(i),c=(a(253),a(73)),o=a(74),m=a(78),r=a(75),h=a(77),d=a(64),u=a(158),p=a(79),v=a(57),E=a.n(v),N=a(478),b=a(479),f=a(476),g=a(477),k=a(480),y=(a(272),a(171),b.a.Search),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(r.a)(t).call(this))).fetchAccessToken=function(){E()({method:"get",url:"http://dhlcp-b2b-externaluserappservice.azurewebsites.net/api/getToken",headers:{"content-type":"application/x-www-form-urlencoded",accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET","Access-Control-Allow-Credentials":!0}}).then(function(t){console.log(t),e.setState({access_token:t.data.data.access_token},function(){e.fetchDetails()})}).catch(function(e){})},e.showModal=function(t,a){"update"==a?e.setState({inviteModel:0,visible:!0,name:t.displayName,mail:t.mail,phone:t.mobilePhone,lastname:t.surname,id:t.id}):e.setState({inviteModel:1,visible:!0})},e.handleOk=function(t){console.log(t),e.setState({visible:!1})},e.handleCancel=function(t){console.log(t),e.setState({visible:!1})},e.fetchDetails=function(){E()({method:"get",url:"https://graph.microsoft.com/v1.0/users",headers:{Authorization:"Bearer "+e.state.access_token,"Content-Type":"application/json"}}).then(function(t){console.log(t);var a=t.data.value;e.setState({users:a})}).catch(function(e){console.log(e),401==e.response.status||alert("Something went Problem!, Please try again later")})},e.open=function(){alert("hi")},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;"search"===n&&e.setState({search:l}),"name"===n&&e.setState({name:l}),"mail"===n&&e.setState({mail:l}),"phone"===n&&e.setState({phone:l}),"lastname"===n&&e.setState({lastname:l}),"invitename"===n&&e.setState({inviteDisplayName:l}),"invitemail"===n&&e.setState({inviteUserEmail:l})},e.handleSubmit=function(t){var a="?$filter=startswith(mail, '"+t+"')";E()({method:"get",url:"https://graph.microsoft.com/v1.0/users"+a,headers:{Authorization:"Bearer "+e.state.access_token,"Content-Type":"application/json"}}).then(function(t){console.log(t);var a=t.data.value;[].push(a),e.setState({users:a})}).catch(function(e){console.log(e)})},e.handleUpdate=function(t){E()({method:"PATCH",url:"https://graph.microsoft.com/v1.0/users/"+e.state.id,headers:{Authorization:"Bearer "+e.state.access_token,"Content-Type":"application/json"},data:{accountEnabled:!0,givenName:e.state.lastname,mobilePhone:e.state.phone,displayName:e.state.firstname}}).then(function(e){console.log(e),alert("Updated Suucessfully")}).catch(function(e){alert("Something went Problom!"),console.log(e)}),e.handleCancel(),t.preventDefault()},e.handleInvite=function(t){if(""==e.state.inviteDisplayName||""==e.state.inviteUserEmail)alert("Please fill the fields");else{e.state.inviteUserEmail;E()({method:"POST",url:"https://graph.microsoft.com/v1.0/invitations",headers:{Authorization:"Bearer "+e.state.access_token,"Content-Type":"application/json"},data:{invitedUserDisplayName:e.state.inviteDisplayName,invitedUserEmailAddress:e.state.inviteUserEmail,sendInvitationMessage:!0,inviteRedirectUrl:"https://iot.dhl.com/",inviteRedeemUrl:"https://iot.dhl.com/"}}).then(function(e){console.log(e),201===e.status&&alert("Invitation sent Successfully")}).catch(function(e){401==e.status?alert("Hii"):alert("Not Hi"),console.log(e)}),e.handleCancel(),t.preventDefault()}},e.state={users:[],visible:!1,value:"",name:"",lastname:"",mail:"",phone:"",search:"",inviteModel:0,inviteDisplayName:"",inviteUserEmail:"",access_token:null},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e.handleUpdate=e.handleUpdate.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.fetchAccessToken()}},{key:"render",value:function(){var e=this,t=this.state.users,a=[{title:"Dispay Name",dataIndex:"displayName",key:"name",render:function(e){return l.a.createElement("a",{href:"javascript:;"},e)}},{title:"User Principal Name",dataIndex:"userPrincipalName",key:"userPrincipalName"},{title:"Business Phone",dataIndex:"mobilePhone",key:"businessPhones"},{title:"Job Title",dataIndex:"jobTitle",key:"Job Title"},{title:"Action",key:"action",render:function(t,a){return l.a.createElement("span",null,l.a.createElement(N.a,{onClick:function(){return e.showModal(a,"update")}}," Update "),l.a.createElement(f.a,{type:"vertical"}),l.a.createElement("a",{href:"javascript:;"},"Delete"))}}];return l.a.createElement("div",{className:"body-container"},l.a.createElement("div",{className:"header-container"},l.a.createElement("h1",null,"DHL B2B DEMO")),l.a.createElement("div",{className:"body1 col-md-12"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"serachuser"},l.a.createElement(y,{placeholder:"Search users by name",enterButton:"Search",size:"large",onSearch:function(t){return e.handleSubmit(t)}}))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"invitebutton"},l.a.createElement(N.a,{type:"primary",onClick:function(t){return e.showModal("","invite")}},"Invite User")))),l.a.createElement("div",{className:"col-md-12 datatable"},l.a.createElement(g.a,{dataSource:t,columns:a,class:"col-md-12",style:{width:"100%"}}))),0==this.state.inviteModel?l.a.createElement(k.a,{title:"Update user details",visible:this.state.visible,onOk:function(t){return e.handleUpdate(t)},onCancel:this.handleCancel},l.a.createElement("form",{onSubmit:this.handleUpdate},l.a.createElement(b.a,{type:"text",value:this.state.name,name:"name",onChange:this.handleChange,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement(b.a,{type:"text",value:this.state.lastname,name:"lastname",onChange:this.handleChange,placeholder:"Last Name"}),l.a.createElement("br",null),l.a.createElement(b.a,{type:"text",disabled:!0,value:this.state.mail,name:"mail",onChange:this.handleChange,placeholder:"Mail"}),l.a.createElement("br",null),l.a.createElement(b.a,{type:"text",value:this.state.phone,name:"phone",onChange:this.handleChange,placeholder:"Mobile Phone"}))):l.a.createElement(k.a,{title:"Invite user to DHL",visible:this.state.visible,onOk:function(t){return e.handleInvite(t)},onCancel:this.handleCancel},l.a.createElement("form",null,l.a.createElement(b.a,{type:"text",value:this.state.inviteDisplayName,name:"invitename",onChange:this.handleChange,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement(b.a,{type:"email",value:this.state.inviteUserEmail,name:"invitemail",onChange:this.handleChange,placeholder:"Mail"}))))}}]),t}(n.Component),S=a(32),I=(a(467),b.a.Search,{Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFEQ29NcGpKWHJ4VHE5Vkc5dGUtN0ZYdHYzdUl2bk9xVFIwaTRPZWtvN2pTa2F5MFNxbzJYcF9qVE16dEhZUTZiVk91VXFPN2ZMNnR0NTVrWUt3WHZVV2pfQ0FMVFFVZnpVejAwVmg4c0pob1NBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIiwia2lkIjoiSEJ4bDltQWU2Z3hhdkNrY29PVTJUSHNETmEwIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZDk5ZmVmOC0xY2QzLTRhMmEtOWJkZi0xNTUzMTE4MWQ2NWUvIiwiaWF0IjoxNTU3MjEyNDA2LCJuYmYiOjE1NTcyMTI0MDYsImV4cCI6MTU1NzIxNjMwNiwiYWlvIjoiNDJaZ1lIajRSazcwN0N1VmVYZkNYRDBmUEhEaUJnQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJESExJT1RDb21tb25BcHAiLCJhcHBpZCI6ImRlMjE1ODhmLTBkYzAtNDEzMy04NTMwLTIyNDQzY2E1ZWFkZCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2NkOTlmZWY4LTFjZDMtNGEyYS05YmRmLTE1NTMxMTgxZDY1ZS8iLCJvaWQiOiJkOWQwMzcxYy1lN2NlLTRhM2EtYjQ3YS1iN2VjNmNmNmY2OGEiLCJyb2xlcyI6WyJVc2VyLlJlYWRXcml0ZS5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuSW52aXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiXSwic3ViIjoiZDlkMDM3MWMtZTdjZS00YTNhLWI0N2EtYjdlYzZjZjZmNjhhIiwidGlkIjoiY2Q5OWZlZjgtMWNkMy00YTJhLTliZGYtMTU1MzExODFkNjVlIiwidXRpIjoiejdnRFVScE42VWl3Tm83NldCd1BBQSIsInZlciI6IjEuMCIsInhtc190Y2R0IjoxNDA5OTA4MTc0fQ.Q5FkGZAQN6RvBmSL-M9zKMuSUwpoMjNRVoqdg-mf7SHvON55YqGSljLQzYGxHO6tIP79udp0TsrztEULTfp9swn7A_Pwh5gbRPV4o3I_qLDjor6W26k5W694oHC9K1zx2OWiaN4GzCdj4udaQkLwt2prnOcW3dq70mOmRLByzcFtmTrqnG3Rv9LZy_9tsISELo4gR49IajkzwkiZb6Gtgs_zMj-0tMmHrGXQmT8I7UlKSnZ5NvgXpMTnqu8FLl24qcWceaGBRnMcpMZGRh017p5SSLahV43psMPaSSw2aP4b2jss5XN2b3xZstkuMd8GHwjhkgLOQ93AUf-0XLLd1g","Content-Type":"application/json"}),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(r.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,l=a.value;"nickname"===n&&e.setState({nickname:l}),"firstname"===n&&e.setState({firstname:l}),"email"===n&&e.setState({email:l}),"phone"===n&&e.setState({phone:l}),"lastname"===n&&e.setState({lastname:l})},e.handleSubmit=function(t){console.log(e.state),""==e.state.firstname||""==e.state.lastname||""==e.state.email||""==e.state.phone||""==e.state.nickname?alert("Please fill all the fields"):E()({method:"POST",url:"http://dhlcp-b2b-externaluserappservice.azurewebsites.net/api/inviteguest",headers:I,data:{firstname:e.state.firstname,lastname:e.state.lastname,email:e.state.email,phone:e.state.phone,nickname:e.state.nickname}}).then(function(t){console.log(t),201===t.status&&(alert("Invitation sent Successfully"),e.setState({firstname:"",lastname:"",email:"",phone:"",nickname:""}))}).catch(function(e){alert("Something went Problom!"),console.log(e)}),t.preventDefault()},e.state={nickname:"",lastname:"",firstname:"",phone:"",email:""},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"body-container"},l.a.createElement("div",{className:"header-container"},l.a.createElement("h1",null,"DHL B2B GUEST USER INVITATION REQUEST")),l.a.createElement("div",{className:"body1 col-md-12"},l.a.createElement("div",{className:"col-md-12 datatable"},l.a.createElement("div",{className:"col-md-6 userdiv"},l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"First Name")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(b.a,{name:"firstname",value:this.state.firstname,onChange:this.handleChange,placeholder:"Enter firstname"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"Last Name")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(b.a,{name:"lastname",value:this.state.lastname,onChange:this.handleChange,placeholder:"Enter lastname"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"Nick Name")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(b.a,{name:"nickname",value:this.state.nickname,onChange:this.handleChange,placeholder:"Enter nickname"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"Email")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(b.a,{name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter Email",type:"email"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement("div",{className:"col-md-4 leftdiv"},l.a.createElement("label",null,"Phone")),l.a.createElement("div",{className:"col-md-8 rightdiv"},l.a.createElement(b.a,{name:"phone",value:this.state.phone,onChange:this.handleChange,placeholder:"Enter phone",type:"number"}))),l.a.createElement("div",{className:"col-md-12 inputdiv"},l.a.createElement(S.a,{type:"primary",style:{width:"40%"},onClick:this.handleSubmit},"Check"))))))}}]),t}(n.Component),T=(a(468),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/admin",component:C})),l.a.createElement(d.a,{exact:!0,path:"/",component:j})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[248,1,2]]]);
//# sourceMappingURL=main.b51f2df7.chunk.js.map