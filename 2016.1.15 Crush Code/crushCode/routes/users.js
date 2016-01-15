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
  console.log('heyyy')
  res.render('signup');
});

module.exports = router;
