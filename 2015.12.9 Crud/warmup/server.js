// 'use strict';
//
// var fs = require('fs');
// var http = require('http');
//
//
// // create a server using http
// // start the server on port 8000
// var server = http.createServer(handleFileLoad);
//
// server.listen(8000, function() {
//   console.log("I'm listening on port 8000...")
// });
//
// function fetchFile(req, res, filename) {
//   //read a file asynchronously using fs. Once the file has been read fs will
//   //invoke the callback function passing in an error or data.
//   fs.readFile(filename, function(err, data) {
//     handleFileLoad(req, res, err, data);
//   });
// }
//
// function handleFileLoad(req, res, err, data) {
//   res.setHeader("Content-Type", "text/html");
//   res.statusCode = 200;
//     // write the file data to the response. We use toString to make it human readable.
//     if (req.url === '/' || req.url === '/index.html') {
//       pageIndex(req, res);
//     } else if (req.url === '/app.js') {
//       pageApp(req, res);
//     } else if (req.url === '/api') {
//       pageJson(req, res);
//     }
//
//   else {
//     res.end('404, no such route');
//   }
//   // send the response back to the client.
// }
//
//
// function pageIndex(req, res) {
//   fs.readFile('./index.html', function(err, data) {
//     handleFileLoad(req, res, err, data);
//     res.write(data.toString());
//     res.end();
//   });
// }
//
// function pageApp(req, res) {
//   fs.readFile('./app.js', function(err, data) {
//     handleFileLoad(req, res, err, data);
//     res.write(data.toString());
//     res.end();
//   });
// }
//
// function pageJson(req, res) {
//   fs.readFile('./data.json', function(err, data) {
//     handleFileLoad(req, res, err, data);
//     res.write(data.toString());
//     res.end();
//   });
// }

// part II
'use strict';

var fs = require('fs');
var http = require('http');

var db = require('monk');
var locations = db.get('locations');


//TODO include monk
//TODO get db instance (or you could do both in one line)
//NOTE: ensure the mongod daemon is running
//TODO get collection, might have to use mongo shell to create collection


// create a server using http
var server = http.createServer(handleRequest);
// start the server on port 8000
server.listen(8000, function() {
	console.log("Server is running on 8000");
});


function handleRequest(req, res) {

	//TODO add route for `api/get`
	//TODO add route for `api/create`
  if (req.url === '/' || req.url === '/index.html') {

    res.setHeader("Content-Type", "text/html");
    fetchFile(req, res, './index.html');

  } else if (req.url === '/app.js') {

    res.setHeader("Content-Type", "text/javascript");
    fetchFile(req, res, './app.js');

  } else if(req.url === '/api/get'){
    res.setHeader("Content-Type", "text/json");
    fetchFile(req, res, locations);

  }

  else {
    respondError(req, res);
  }
}














function fetchFile(req, res, filename){
  //read a file asynchronously using fs. Once the file has been read fs will
  //invoke the callback function passing in an error or data.
  fs.readFile(filename, function(err, data){
    handleFileLoad(req, res, err, data);
  });
}

function handleFileLoad(req, res, err, data){
  if (err) { //if an error exists
    respondError(req, res);
  } else { // else we successfully loaded the file

    // set the status code to 200 to show that we succeeded.
    res.statusCode = 200;
    // write the file data to the response. We use toString to make it human readable.
    res.write(data.toString());
    // send the response back to the client.
    res.end();
  }
}

function respondError(req, res) {
  res.statusCode = 404;
  res.write('<h1>404: The item you requested does not exist.');
  res.end();
}
