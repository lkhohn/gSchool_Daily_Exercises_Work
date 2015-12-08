'use strict';
// get the core module and assign to http
var http = require('http');
var routes = require('./routes');
// create an hhtp server, and every time it receives a request,
// it envokes the callback function
var server = http.createServer(function(req, res) {
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello Internet');

  // changed file type to a json file
  // res.setHeader('Content-Type', 'text/json');
  // res.end('{"message": "hello internet"}');

  // more commonly used method
  //set the response header
  // here we are saying we are sending back a json file
  // res.setHeader('Content-Type', 'application/json');
  //write out a response
  // res.write('{"message": "hello internet"}');
  // end response
  // res.end();

// adding routes.js module to this file
  console.log(req.url);
  res.setHeader('Content-Type', 'application/json');
  // get function from routes object with key req.url
  routes[req.url](req, res);

});

// start the server on port 9001 with a host name of localhost
// when the server starts, envoke the callback function
server.listen(9001, 'localhost', function() {
  console.log('up n running');
});
