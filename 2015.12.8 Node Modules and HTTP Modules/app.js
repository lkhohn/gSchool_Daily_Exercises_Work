// Requirements: Must utilize your autoResponse.js module, 1 core module, and 1 module from NPM.


//This is where you should incorporate your modules and execute your app
var fs = require('fs');
var autoResponse = require('./autoResponse.js');
var moment = require('moment');

// console.log(message);
// message.dayOfWeek('Monday');


var result = autoResponse.getResponse(moment().format('dddd'));
fs.writeFile('response.txt', result, function(err) {
  if (err) throw err;
  console.log('It saved');
});
