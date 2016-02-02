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

router.get('/signup', function(req, res, next){
  if(req.session.user){
    res.redirect('userHome');
  } else{
    res.render('signup');
  }
});


router.post('/signup', function(req, res, next){
    var newUser = req.body;
    hashPassword(newUser, registerUser);
    function registerUser(){
    knex('users').insert({
      username: req.body.username,
      password: req.body.password
    }).then(function(data){
      // good idea to redirect user to signin page and give them a session cookie then.
      res.redirect('/users/signin');
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

router.get('/signin', function(req, res, next){
  if(req.session.user){
    res.redirect('/users/userHome');
  } else {
    res.render('signin');
  }
});

router.post('/signin', function(req, res, next){
  if(req.session.user){
    res.redirect('/users/userHome');
  } else {
      knex('users').first().where({
        username: req.body.username
      }).then(function(user){
        bcrypt.compare(req.body.password, user.password, function(err, match) {
          if(match){
            // req.session.user equal to everything you got back from db (its an object) from the previous user query
            req.session.user = user;
            // delete key value pair for password
            delete req.session.user.password;
            res.redirect('/users/userHome');
          } else {
            res.send('incorrect');
          }
        });
    });
  }
});



router.get('/userHome', function(req, res, next){
  if(req.session.user){
    var userHold = 'account';
    userHold = req.session.user.username;
    res.render('userHome', {
      username: userHold
    });
  } else {
    res.redirect('/users/signin');
  }
});


router.get('/logout', function(req, res, next){
  if(req.session.user){
    req.session = null;
    res.redirect('/');
  }
});
module.exports = router;
