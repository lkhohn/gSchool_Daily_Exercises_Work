'use strict';

var fs = require('fs');
var http = require('http');


//TODO create a server using http
//TODO start the server on port 8000


function fetchFile(req, res, filename){
  //read a file asynchronously using fs. Once the file has been read fs will
  //invoke the callback function passing in an error or data.
  fs.readFile(filename, function(err, data){
    handleFileLoad(req, res, err, data);
  });
}

function handleFileLoad(req, res, err, data){
  if(err){ //if an error exists
   throw err;
  } else { // else we successfully loaded the file

    //TODO set the status code to 200 to show that we succeeded.

    //TODO write the file data to the response. We use toString to make it human readable.

    //TODO send the response back to the client.
  }
}
