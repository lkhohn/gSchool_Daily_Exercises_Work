var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client:'pg',
  connection: process.env.DATABASE_URL
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});




module.exports = router;
