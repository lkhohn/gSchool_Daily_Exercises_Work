var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client:'pg',
  connection: process.env.DATABASE_URL
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET signup page */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});


// take input from signup page
// check that username does not exist
// if username exists, reroute with message "pick a new username"
// else hashPassword
// then insert into database
router.post('/signup', function(req, res, next){
  var newUser = req.body;
  hashPassword(newUser, registerUser);

  function registerUser(){
    knex('users').insert({
      username: req.body.username,
      password: req.body.password
    }).then(function(data){
      res.redirect('/users/userHome');
    });
  }

  function hashPassword(user, callback){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
          user.password = hash;
          callback(user);
      });
    });
  }
});



/* GET signin page */
router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.post('/signin', function(req, res, next){
  knex('users').where({
    username: req.body.username
  }).then(function(){
    if(user[0]){
    comparePassword(req.body.password, user[0], next);
  }
});
function next(){
  res.redirect('/userHome');
}

function compareHashPassword(user, callback){
  // Load hash from your password DB.
  bcrypt.compare(password, user.password, function(err, res) {
      // res == true
      callback(user, res);
  });
}
});







/* GET user home page */
router.get('/userHome', function(req, res, next){
  knex('posts').select().then(function(postDetails){
    res.render('index', {
      title: 'BlueIt',
      postDetails: postDetails,
      addPost: '/addPost'
        });
    });
});


module.exports = router;
