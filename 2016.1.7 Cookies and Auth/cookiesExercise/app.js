var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

// tell express to use the cookie-parser package. inside of the cookieParser('')... this is where you pass in the secret.
// the secret lets us know that this is our cookie
// **Store the SECRET in your .env file
app.use(cookieParser());
// tell express to use cookie-session and secret. Cookie-session takes in an options object
var cookieOptions = {
  secret: 'sugar'
};

app.use(cookieSession(cookieOptions));

// this is used for non-session related cookies
// app.get('/', function(req, res) {
// use res.send('message') to check that we are connected
// res.send('connected');
// to set a cookie:  res.cookie(cookieName, cookieValue, options) // pass signed:true in options if need signed\
// in the options, if you are using the secret, then you put {signed:true}
//   res.cookie('mrs_cookie', 'two million', {signed:true});
//   res.cookie('mr_cookie', 'two dolla', {signed:true});
//   console.log(req.signedCookies);
//   res.send('connected');
// });


//session related cookies
// function isLoggedIn(req) {
//   //if user is logged in
//   if(req.session && req.session.users){
//     return true;
//   } else {
//     return false;
//   }
// }

app.get('/', function(req, res) {
  if(req.session && req.session.user) {
    res.send('Welcome ' + req.session.user.username);
  } else {
    res.send('you are not logged in');
  }
});


app.get('/login', function(req, res){
  req.session.user = {
    userID: 1,
    email: 'blah@blah.net',
    username: 'blah'
  };
  res.redirect('/');
});

app.get('/logout', function(req, res){
  req.session = null;
  res.redirect('/');
});



app.listen(3000, function() {
  console.log('we are listening on port 3000');
});
