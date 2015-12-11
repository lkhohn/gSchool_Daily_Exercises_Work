'use strict';

var fs = require('fs');
var http = require('http');
var Monk = require('monk');
var db = Monk('localhost/students');

var individuals = db.get('individuals');

var parse = require('./parse');

// TO BE ADDED FOR THE PARSE.JS MODULE EXPORT
// function handleRequest(req, res) {
//   //use our home made module url parser constructor to create a url object
//   var myUrl = UrlParser(req.url);
//
//   //set the mime type header to plain text
//   res.setHeader("Content-Type", "text/plain");
//   //set the statuscode to 200 to indicate success
//   res.statusCode = 200;
//   //write the pathname and a new line
//   res.write(myUrl.pathname + '\n');
//   //write the query object
//   res.write(JSON.stringify(myUrl.query));
//   res.end();
// }


// create a server using http
// var server = http.createServer(handleRequest);
var server = http.createServer(getStudentInfo);

// start the server on port 8000
server.listen(8000, function() {
  console.log("Server is running on 8000");
});


function handleRequest(req, res) {

  if (req.url === '/' || req.url === '/index.html') {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write('i work');
    res.end();

  } else if (req.url === '/students') {
    individuals.find({}, function(err, data) {
      var doc = JSON.stringify(data);
      res.write(doc);
      res.end();
    });
  } else if (req.url === '/students/create') {
    var firstName = 'Luke';
    var lastName = 'Vance';
    var favLang = 'JS';
    individuals.insert({
      firstName: firstName,
      lastName: lastName,
      favLang: favLang
    }, function(err, data) {
      var doc = JSON.stringify(data);
      res.write(doc);
      res.end();
    });

  } else if (req.url === '/students/update') {
    var firstName = 'Lindsay';
    var newFirstName;
    var lastName = 'Hohn';
    var newlastName = 'Kuhnhein-Hohn';
    var favLang = 'JS';
    var newFavLang;
    individuals.update({
      // firstName: firstName,
      lastName: lastName
    }, {
      $set: {
        lastName: newlastName
      }
      // favLang: favLang
    }, function(err, data) {
      var doc = JSON.stringify(data);
      res.write(doc);
      res.end();
    });
    // update({ item : 'itemValue' },
    // { $set: { item : 'newItemValue' } } )

  } else if (req.url === '/students/delete') {
    var firstName = 'Lindsay';
    var lastName = 'Hohn';
    var favLang = 'JS';
    individuals.remove({
      firstName: firstName,
      // lastName: lastName,
      favLang: favLang
    }, function(err, data) {
      var doc = JSON.stringify(data);
      res.write(doc);
      res.end();
    });

  } else {
    respondError(req, res);
  }
}


function respondError(req, res) {
  res.statusCode = 404;
  res.write('<h1>404: The item you requested does not exist.');
  res.end();
}

function getStudentInfo(req, res) {
  var urlObj = {
    pathName: getPathFromUrl(req.url),
    query: getQueryFromUrl(req.url)
  };

  res.setHeader("Content-Type", "text/plain");
  res.write(urlObj.pathName + '\n');
  res.write(JSON.stringify(urlObj.query));
  res.end();
}
