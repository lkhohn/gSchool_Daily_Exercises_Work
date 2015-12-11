'use strict';

//map of encodings to their decoded value
var _encodingMap = {
    '%21': '!',
    '%23': '#',
    '%24': '$',
    '%26': '&',
    '%27': '\'',
    '%28': '(',
    '%29': ')',
    '%2A': '*',
    '%2B': '+',
    '%2C': ',',
    '%2F': '/',
    '%3A': ':',
    '%3B': ';',
    '%3D': '=',
    '%3F': '?',
    '%40': '@',
    '%5B': '[',
    '%5D': ']'
  };
//Constructor
function UrlParser(urlStr) {
  return {
    pathname: getPathFromUrl(urlStr),
    query: getQueryFromUrl(urlStr)
  };
}
//get the query out of a url and build an object to hold all the key value paris.
//  /foo?name=batman&otherkey=othervalue
// will be parsed to an object like this
// {
//   name:'batman',
//   otherkey:'othervalue'
// }
function getQueryFromUrl(url) {
  var returnObj = {};
  //split the query part of the url from the path part
  var splitUrlArray = url.split('?');
  //set queryUrl to the query part of the url
  var queryUrlString = splitUrlArray[1];
  //split the queryUrl string to separate keyvalue pairs from each other
  var keyValuePairsArray = queryUrlString.split('&');
  //go through every keyvaluepair
  keyValuePairsArray.forEach(function(item) {
    //split the key value pair
    var keyValueArray = item.split('=');
    // assign key to the decoded key from keyValueArray
    var key = decodeString(keyValueArray[0]);
    //assign value to the decoded value from keyValueArray
    var value = decodeString(keyValueArray[1]);
    //add it to the object
    returnObj[key] = value;
  });
  return returnObj;
}

//pull out the url part of the path
function getPathFromUrl(url) {
  //split the query part of the url from the path part
  var splitUrlArray = url.split('?');
  //return the decoded path part of the url
  return decodeString(splitUrlArray[0]);
}

//decode all url encoded characters from a given string
function decodeString(str) {
  //look for % characters in the url and get their index
  //as long as a % exists in the string keep looping
  while (str.indexOf('%') !== -1) {

    //get the index of %
    var currIndex = str.indexOf('%');
    //get the % character from the string and two characters after it
    var encodedValue = str.substr(currIndex, 3);
    //get the value of the encoded character from our encoding map
    var decodedValue = _encodingMap[encodedValue];

    //get all the parts of the string that happened before the %
    var beforeStr = str.substr(0, currIndex);
    //get all the parts of the string that happened after the %
    // and its two following characters
    var afterStr = str.substr(currIndex + 3);

    //recreate the string with the before the decoded value and the after
    str = beforeStr + decodedValue + afterStr;
  }

  return str;
}

//anything we add to exports is what the outside world can see and use
module.exports = UrlParser;
module.exports.decodeString = decodeString;
module.exports.getPathFromUrl = getPathFromUrl;
module.exports.getQueryFromUrl = getQueryFromUrl;
