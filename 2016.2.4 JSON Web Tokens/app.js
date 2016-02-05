var http =require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('bodyParser');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var app = express();

app.secret = 'this is my secret';
app.config = {
  secret : secret
};


// if you want to access our API, then you need a JWT token
app.use('/api', expressJwt(config));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/auth', function(req, res){
// app.post('/auth', function(req, res){
  var user = {
    username: req.body.username,
    id: 1
  };
  var expires = {
    expiresInMinutes : 60
  };
  var token = jwt.sign(user, secret, expires);
  res.json({token: token});
});

app.get('/api/resource', function(req, res){

});


// ** To send the request, the token needs to be in the header
// the header is called the "authorization header"
// Authorization: Bearer <token>



// in Angular app:
// in the controller:  --- this all happens when you click the "login button"
var vm = this;
vm.login=login;
vm.logout = logout;
vm.checkApi = checkApi;

function login(){
  $http.post('/auth', vm.user)
  .then(function(response){
    // you can set sessionStorage to a the window
    $window.sessionStorage.token = response.data.token;
    console.log(response.data.token);
  })
  .catch(function(){
    // if you fail, then just delete the token
    console.error('something went wrong');
    delete $window.sessionStorage.token;
  });
}

function logout(){
  delete $window.sessionStorage.token;
}

function checkApi(){
  $http.get('/api/resource', vm.user)
    .then(function(){
      console.log();
    });
}


// In your factory --- everyone uses a factory for the interceptor.
angular.module('demoApp'). factory('DemoFactory', ['$q', '$window', DemoFactory]);
function DemoFactory($q, $window){
  return {
    request: reqestHandler,
    response: responseHandler
  };
  function requestHandler(config){
    if(!config.headers){
      config.headers={};
    }
    if($window.sessionStorage.token){
      // checking if we have a token, if we do, then we set the header here
      config.headers.Authorization = 'Bearer' + $window.sessionStorage.token;
    }
    return config;
  }
}


// set up a config
angular.module('DemoApp').config(function($httpProvider){
  $httpProvider.interceptors.push('DemoFactory');
});




// with the app we created on Monday, or any other app, do the following:
// ## Express:
// - have an express server with a POST route to /auth respond with JWT token
// - the express route should have /api restricted to only authorized users

// ## Angular:
// - receive the token and store it in either Localstorage or sessionStorage
// - whenever you make an http request, automatically set the authorization header to the token
