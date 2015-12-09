'use strict';

var http = require('http');

var server = null;

var encodingMap = {
  '%21': '!',
  '%23': '#',
  '%24': '$',
  '%26': '&',
  '%20': ' '
}

function handleRequest(req, res) {
  var urlObj = {
    pathName: getPathFromUrl(req.url),
    query: getQueryFromUrl(req.url)
  };

  res.setHeader("Content-Type", "text/plain");
  res.write(urlObj.pathName + '\n');
  res.write(JSON.stringify(urlObj.query));
  res.end();
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

function getPathFromUrl(url) {

  // split the query part of the url from the path part
  var splitUrlArray = url.split('?');

  return decodeString(splitUrlArray[0]);
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

server = http.createServer(handleRequest);

server.listen(8000, function() {
  console.log("Listening on PORT 8000...");
});
