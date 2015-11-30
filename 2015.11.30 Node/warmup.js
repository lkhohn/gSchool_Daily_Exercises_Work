// Write a function called parseQueryString which takes a URL string as an argument and returns a Javascript object containing the key-value pairs from the query string. For example:

// parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")

//=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}

// parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")

//=> {q: "dogs", sort: "top", t: "week"}



var linkObject = {};

function parseQueryString(link) {
  // remove everything before the ?
  var newLink = link.split("?")[1];
  var valuePairs = newLink.split('&');
  for (var i = 0; i < valuePairs.length; i++) {
    var string = valuePairs[i]
      // take the first index and split at the =
    function splitString(string) {
      var newString = string.split('=');
      linkObject[newString[0]] = (newString[1]);
    }
    splitString(string);
  }
  console.log(linkObject);
}
parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA");
