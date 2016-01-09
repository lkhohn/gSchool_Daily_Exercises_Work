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


router.put('/edit', function(req, res, next) {
  knex('edit').update({
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

// **From the ping pong app to update a user
// PUT ‘/:id’ - updates individual resource TODO
//curl -X PUT -d 'username=thing' https://galvanize-ping-pong-league.herokuapp.com/users/jaredM123
// router.put('/:username', function(req, res) { // curl -X PUT -d <queryString> https://galvanize-ping-pong-league.herokuapp.com/users/<userID>
//   var user = {};
//   user.first_name = req.body.firstName;
//   user.last_name = req.body.lastName;
//   user.email = req.body.email;
//   user.username = req.body.username;
//   user.password = req.body.password;
//
//   Users().where({ // 'id', '=', Number(req.params.id)
//       username: req.params.username
//     })
//     .update(user).then(function() {
//       res.send('https://galvanize-ping-pong-league.herokuapp.com/users/');
//       // res.redirect('/users/:username');
//     });
// });







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






module.exports = router;
