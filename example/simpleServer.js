// simple API for labox
//
//  /listKey   		      list keys and numeric mapping values
//  /sendKey/<Num>     	send value <Num> (409 Power)
//  /status             get status of the STB

var labox = require('labox-tv')('192.168.0.3', true, 5);
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/sendKey/:irkey', function (req, res) {
  console.log(new Date().toISOString() + "|recieved sendKey request for Key: " + req.params.irkey);
  res.end( JSON.stringify(req.params.irkey));
  labox.sendButtonEvent(parseInt(req.params.irkey,10));
})

app.get('/listKeys', function (req, res) {
 console.log(new Date().toISOString() + "|recieved listKeys request");
 fs.readFile( __dirname + "/" + "node_modules/labox-tv/lib/Constants.js", 'utf8', function (err, data) {
      res.end(data );
 });
})

app.get('/status', function (req, res) {
 console.log(new Date().toISOString() + "|recieved status request");
 var laboxStatus = labox.getInfo();
 console.log(laboxStatus.power);
 res.end(JSON.stringify(laboxStatus));
//
//{ power: true,
//  volume: 15,
//  mute: false,
//  channel: {
//     	name: "M6 HD",
//     	number: 6,
//     	category: "Generalistes"
//  },
//  program: {
//     	name: "NCIS : Nouvelle-Orleans S01E04",
//     	category: "Serie policiere"
//} }
//
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log(new Date().toISOString() + "|Example app listening at http://%s:%s", host, port)

})
