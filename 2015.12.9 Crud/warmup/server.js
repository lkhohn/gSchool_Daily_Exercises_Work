'use strict';

var fs = require('fs');
var http = require('http');


// create a server using http
// start the server on port 8000
var server = http.createServer(handleFileLoad);

server.listen(8000, function() {
  console.log("I'm listening on port 8000...")
});

function fetchFile(req, res, filename) {
  //read a file asynchronously using fs. Once the file has been read fs will
  //invoke the callback function passing in an error or data.
  fs.readFile(filename, function(err, data) {
    handleFileLoad(req, res, err, data);
  });
}

function handleFileLoad(req, res, err, data) {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
    // write the file data to the response. We use toString to make it human readable.
    if (req.url === '/' || req.url === '/index.html') {
      pageIndex(req, res);
    } else if (req.url === '/app.js') {
      pageApp(req, res);
    } else if (req.url === '/api') {
      pageJson(req, res);
    }

  else {
    res.end('404, no such route');
  }
  // send the response back to the client.
}


function pageIndex(req, res) {
  fs.readFile('./index.html', function(err, data) {
    handleFileLoad(req, res, err, data);
    res.write(data.toString());
    res.end();
  });
}

function pageApp(req, res) {
  fs.readFile('./app.js', function(err, data) {
    handleFileLoad(req, res, err, data);
    res.write(data.toString());
    res.end();
  });
}

function pageJson(req, res) {
  fs.readFile('./data.json', function(err, data) {
    handleFileLoad(req, res, err, data);
    res.write(data.toString());
    res.end();
  });
}
