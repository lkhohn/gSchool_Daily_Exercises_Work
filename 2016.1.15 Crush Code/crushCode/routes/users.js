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
  if(req.session.user){
    // could do a flash message that would say, 'you are already logged in. If you want to sign up, please log out'
    res.redirect('/users/userHome');
  } else {
  res.render('signup');
  }
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



/* GET signin page */
router.get('/signin', function(req, res, next) {
  if(req.session.user){
    // you don't want the user to sign in again and get another cookie if they are already signedin and have a cookie
    res.redirect('/users/userHome');
  } else {
  res.render('signin');
}
});

router.post('/signin', function(req, res, next){
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
});






/* GET user home page */
router.get('/userHome', function(req, res, next){
  knex('posts').select().innerJoin('users', 'posts.user_id', 'users.id').then(function(postDetails){
    var userHold = 'account';
    userHold = req.session.user.username;
    console.log(postDetails);
    for(var i=0; i<postDetails.length; i++){
      if(postDetails[i].user_id === req.session.user.id){
        postDetails[i].sessionOwner = true;
      }
      else {
        postDetails[i].sessionOwner = false;
      }
    }
    res.render('userHome', {
      title: 'BlueIt',
      postDetails: postDetails,
      addPost: '/addPost',
      username: userHold
        });
    });
});


/* Sign Out */
router.get('/signout', function(req, res, next){
  req.session = null;
  res.redirect('/');
});



// in db, need to have a column for role--admin vs user. THen when checking if can view the page, check req.session.user.role ...role will determine
// if they can view the page

module.exports = router;
