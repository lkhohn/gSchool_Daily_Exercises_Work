'use strict';

// implement the jQuery ajax call here and console log the data

//See https://api.jquery.com/jquery.get/ for an example of the get function

//Alternatively

//See http://api.jquery.com/jquery.ajax/ for an exmaple of the ajax function


//
// $.ajax({
//   url: 'http://localhost:8000/api',
//   method: 'GET',
//   json: 'callback',
//   dataType: 'JSON',
//   success: function(data){
//     // var stringData = JSON.stringify(data);
//     // var parseData = JSON.parse(stringData);
//     console.log(data);
//   },
//   error: function(errorObject, textStatus) {
//     console.log(errorObject);
//     console.log(textStatus);
//   }
// });
$.ajax({
  url: 'http://localhost:8000/api',
  json: 'callback',
  dataType: 'JSON'
}).done(function main(data){
    console.log(data);
  });
