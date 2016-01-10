var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('restaurants').select().then(function(restaurantDetails) {
    res.render('index', {
      title: 'Restaurant Details',
      restaurantDetails: restaurantDetails
    });
  });
});

/* add new restaurant */
router.get('/addRest', function(req, res, next) {
  res.render('addRest', {
    title: 'Add a new restaurant'
  });
});

router.post('/addRest', function(req, res, next) {
  knex('restaurants').insert({
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    cuisine: req.body.cuisine,
    rating: req.body.rating,
    bio: req.body.bio
  }).then(function(restaurantDetails) {
    res.redirect('/');
  });
});


/* edit restaurant information */
router.get('/edit', function(req, res, next) {
  knex('restaurants').select().where({
    name: 'Los Tacos'
  }).then(function(data) {
    res.render('edit', {
      name: data[0].name,
      city: data[0].city,
      state: data[0].state,
      cuisine: data[0].cuisine,
      rating: data[0].rating,
      bio: data[0].bio
    });
  });
});

// router.put('/edit', function(req, res, next) {
//   knex('restaurants').where(name='Los Tacos').update({
//     // name: req.body.name,
//     city: req.body.city,
//     state: req.body.state,
//     cuisine: req.body.cuisine,
//     rating: req.body.rating,
//     bio: req.body.bio
//   }).then(function() {
//     res.redirect('/');
//   });
// });


/* Delete a restaurant */
router.post('/', function(req, res, next) {
  // console.log(req.body.name);
  knex('restaurants').select().delete().then(function(data) {
    res.redirect('/');
  });
});


/* GET individual restaurant pages */
router.get('/losTacos', function(req, res, next) {
  knex('restaurants').select().where({
    name: 'Los Tacos'
  }).then(function(data) {
    res.render('losTacos', {
      name: data[0].name,
      city: data[0].city,
      state: data[0].state,
      cuisine: data[0].cuisine,
      rating: data[0].rating,
      bio: data[0].bio
    });
  });
});

router.get('/burgerBar', function(req, res, next) {
  knex('restaurants').select().where({
    name: 'Burger Bar'
  }).then(function(data) {
    res.render('burgerBar', {
      name: data[0].name,
      city: data[0].city,
      state: data[0].state,
      cuisine: data[0].cuisine,
      rating: data[0].rating,
      bio: data[0].bio
    });
  });
});

router.get('/fiestaritos', function(req, res, next) {
  knex('restaurants').select().where({
    name: 'Fiestaritos'
  }).then(function(data) {
    res.render('fiestaritos', {
      name: data[0].name,
      city: data[0].city,
      state: data[0].state,
      cuisine: data[0].cuisine,
      rating: data[0].rating,
      bio: data[0].bio
    });
  });
});

router.get('/pastaFreddy', function(req, res, next) {
  knex('restaurants').select().where({
    name: 'Pasta Freddy'
  }).then(function(data) {
    res.render('pastaFreddy', {
      name: data[0].name,
      city: data[0].city,
      state: data[0].state,
      cuisine: data[0].cuisine,
      rating: data[0].rating,
      bio: data[0].bio
    });
  });
});



/* sign up page */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

// Create User /register/signup
router.post('/signup', function(req, res) {
  // save body in user variable
  var newUser = req.body;

  // test newUser data for validation
  var fail = true;
  var messageData = {};

  if (!newUser.username) {
    messageData.username = 'Enter a username';
  } else if (!newUser.password) {
    messageData.password = "Enter a password.";
  } else if (newUser.password !== newUser.confPassword) {
    messageData.password = "Passwords don't match.";
  } else if (newUser.password.length < 8) {
    messageData.password = "Password must be at least 8 characters long.";
  } else {
    fail = false;
  }

  // if errors exist rerender else store user
  if (fail === true) {
    res.render('signup', {
      error: messageData,
      data: newUser
    });
  } else {
    hashPassword(newUser, registerUser);
  }

  // set up functions for encryption
  // hash with bcryp and send to knex
  function hashPassword(user, callback) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        // send hash to database
        user.password = hash;
        callback(user);
      });
    });
  }

  // send user data to datbase
  function registerUser(user) {
    knex('users').insert({
      username: user.username,
      password: user.password
    }).then(function(data) {
      res.redirect('/');
    }, function(failure) {
      console.log(failure);
    });
  }

}, function(failure) {
  res.write('this is the new page and you failed');
  res.end();
});







/* sign in page */
router.get('/signin', function(req, res, next) {
  res.render('signin');
});

// post signin info and confirm correct
router.post('/signin', function(req, res, next) {

  knex('users').where({
    username: req.body.username
  }).then(function(user) {

    function next(user, status) {
      // console.log(status);
      // console.log(user);
      if (status === true) {
        // set cookie here
        res.redirect('/');
      } else {
        res.render('signin', {
          message: "Incorrect username or password"
        });
      }
    }
    if (user[0]) {
      // console.log(user);
      // username/password is correct
      comparePassword(req.body.password, user[0], next);
    } else {
      res.send('incorrect username or password');
    }
  }).catch(function(err) {
    // if whole thing doesn't work
    res.render('signin', {
    message: "Incorrect username or password"
    });
  });
});

function comparePassword(password, user, callback) {
  bcrypt.compare(password, user.password, function(err, res) {
    // console.log(err);
    callback(user, res);
  });
}




module.exports = router;
