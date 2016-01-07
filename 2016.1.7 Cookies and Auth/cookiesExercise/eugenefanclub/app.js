//require('dotenv').load(); //need to npm dotenv
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pg = require('pg');
var bcrypt = require('bcrypt');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port     : 5432,
    user     : 'jroel',
    database : 'eugenefanclub'
  }
});



var routes = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/auth', auth)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
// }

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



// function hashPassword(user, callback) {
//     curPassword = user.password
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(user.password, salt, function(err, hash) {          
          
//             // Store hash in your password DB.
//             user.password = hash;
//             comparePassword(curPassword, user);
//         });
//     });
// };


// function comparePassword(password, user, callback){
//     bcrypt.compare(password, user.password, function(err, res) {
//         // res == true
//         console.log('true');
//     });
// };


module.exports = app;
