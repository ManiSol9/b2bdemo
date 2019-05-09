const path = require("path");
const router = require("express").Router();
const fs = require('fs');
var request = require('request');

router.post("/api/inviteguest", (req, res) => {

  let access_token = null

  var options = {
    method: 'POST',
    url: 'https://login.microsoftonline.com/cd99fef8-1cd3-4a2a-9bdf-15531181d65e/oauth2/token',
    headers:
      {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json'
      },
    form:
      {
        grant_type: 'client_credentials',
        client_id: 'de21588f-0dc0-4133-8530-22443ca5eadd',
        client_secret: 'x/S9opfi9zLKMKsey0ZHEAUqdm9H9REVAUTJOYwZMwA=',
        resource: 'https://graph.microsoft.com'
      }
  };

  request(options, function (error, response, body) { // this call will fetch the access token
    if (error) {

      res.status(401).json({
        message: error
      })

    } else {

      data = JSON.parse(body)

      var options1 = {
        method: 'POST',
        url: 'https://graph.microsoft.com/v1.0/invitations',
        headers:
          {
            'content-type': 'application/json',
            authorization: 'Bearer ' + data.access_token
          },
        body:
          {
            invitedUserDisplayName: req.body.firstname,
            invitedUserLastName: req.body.lastname,
            invitedUserNickName: req.body.nickname,
            invitedUserMobile: req.body.phone,
            invitedUserEmailAddress: req.body.email,
            sendInvitationMessage: true,
            inviteRedirectUrl: 'https://iot.dhl.com/',
            inviteRedeemUrl: 'https://iot.dhl.com/'
          },
        json: true
      };
  
      request(options1, function (error, response, body) { // this call will send invitation 
        if (error) {
          res.status(401).json({
            message: error
          })
        } else {
          res.status(200).json({
            message: "invitation sent suucessfully"
          })
        }
      });

    }

  });

});



router.get("/api/gettoken", (req, res) => {

  let access_token = null

  var options = {
    method: 'POST',
    url: 'https://login.microsoftonline.com/cd99fef8-1cd3-4a2a-9bdf-15531181d65e/oauth2/token',
    headers:
      {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json'
      },
    form:
      {
        grant_type: 'client_credentials',
        client_id: 'de21588f-0dc0-4133-8530-22443ca5eadd',
        client_secret: 'x/S9opfi9zLKMKsey0ZHEAUqdm9H9REVAUTJOYwZMwA=',
        resource: 'https://graph.microsoft.com'
      }
  };

  request(options, function (error, response, body) { // this call will fetch the access token
    if (error) {

      res.status(401).json({
        message: error
      })

    } else {

      data = JSON.parse(body)

      res.status(200).json({
        output: data
      })

    }

  });

});

module.exports = router;
