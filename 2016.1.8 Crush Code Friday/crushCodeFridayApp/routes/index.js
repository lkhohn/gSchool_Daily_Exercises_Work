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

/* GET individuall restaurant pages */








module.exports = router;
