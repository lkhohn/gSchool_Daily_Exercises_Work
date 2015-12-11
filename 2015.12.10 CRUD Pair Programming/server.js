'use strict';

var fs = require('fs');
var http = require('http');
var Monk = require('monk');
var db = Monk('localhost/students');

var individuals = db.get('individuals');



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

function getStudentInfo (req, res){
  var urlObj = {
    pathName: getPathFromUrl(req.url),
    query: getQueryFromUrl(req.url)
  };

  res.setHeader("Content-Type", "text/plain");
  res.write(urlObj.pathName + '\n');
  res.write(JSON.stringify(urlObj.query));
  res.end();
}

function getPathFromUrl(url) {

  // split the query part of the url from the path part
  var splitUrlArray = url.split('?');

  return decodeString(splitUrlArray[0]);
}

function getQueryFromUrl(url) {
  var returnObj = {};

  // split the query part of the url from the path part
  var splitUrlArray = url.split('?');

  // set query Url to the query part of the url
  var queryUrlString = splitUrlArray[1];

  // split the queryUrl string to separate key value pairs from each other
  var keyValuePairsArray = queryUrlString.split('&');

  // go through every key value pair
  keyValuePairsArray.forEach(function(item) {
    // split the key value pair
    var keyValueArray = item.split('=');

    // assign key to the decoded key from keyValueArray
    var key = decodeString(keyValueArray[0]);
    var value = decodeString(keyValueArray[1]);

    // add it to the object
    returnObj[key] = value;
  });

  return returnObj;
}

function decodeString(str) {
  // look for % characters in the url and get their index
  // as long as a % exists in the string, keep looping
  while (str.indexOf('%') !== 1) {
    // get the index of %
    var currIndex = str.indexOf('%');

    // get the % character from the string and 2 characters after it
    var encodedValue = str.substr(currIndex, 3);

    // get the value of the encoded character from the encodingMap
    var decodedValue = encodingMap[encodedValue];

    // get all the parts of the string that happened before the %
    var beforeStr = str.substr(0, currIndex);

    // get all the part of the string that happened after the % and its two following characters
    var afterStr = str.substr(currIndex + 3);

    // recreate the string with the before, the decodedValue and the after
    str = beforeStr + decodedValue + afterStr;
  }
  return str;
}

var encodingMap = {
  '%21': '!',
  '%23': '#',
  '%24': '$',
  '%26': '&',
  '%20': ' '
};
