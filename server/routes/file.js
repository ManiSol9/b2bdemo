const path = require("path");
const router = require("express").Router();
const fs = require('fs');
var request = require('request');
var azure = require('azure-storage');
var tableService = azure.createTableService('462sensordata', 'EHFyzv0GPoQjOsSQYx68X6nyw96TM4F6yU7k6ijy6aPhJfn2zIHGmAhdPIGeKHdFPlvCesswCb1MQKbYr6YtaQ==');


router.get("/getData", (req, res) => {

    var d = new Date();
    console.log(d);
    var n = d.valueOf();

    let lasttime = n - 5000

    var query = new azure.TableQuery()
    .top(1)
    .where('Timestamp ge ?', new Date(lasttime));

    tableService.queryEntities('livedata', query, null, function(error, result, response) {
      if (!error) {
        console.log(result.entries, n)

        let entries = result.entries; 

        if(entries.length == 0){
          res.status(200).send({
            "status": 200,
            "temparature": 0,
            "humidity": 0
          })
        } else {
          res.status(200).send({
            "status": 200,
            "temparature": entries[0].temperature._,
            "humidity": entries[0].humidity._
          })
        }
    

      } else {
        console.log(error)

        res.status(500).send({
          "status": 500,
          "error": error.toString()
        })
    
      }
    });

});

module.exports = router;
