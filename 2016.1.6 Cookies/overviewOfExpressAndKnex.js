//What is the difference between sql and postgres?


var express = require('express');
var router = express.Router();
// knex needs to be required on every document that we use it with!
var knex = require('knex')({
  client: 'pg',
  connection: {
    username: 'lindsayhohn',
    password: 'password',
    host: 'localhost',
    port: " ",
    database: 'databaseName'
  }
});


// if using Heroku, so you'll need to require .env file, then you would set up var knex like this:
// Note that if you do this, then you need to npm install a .env file
// In the .env file, you store the information for the DATABASE_URL key-value
// DATABASE_URL Example:  logan:password@localhost/adv_crud
// Sources of example:  user:password@hostName/pathAKAdatabaseName
// var knex = require('knex')({
//   client: 'pg',
//   connection: process.env.DATABASE_URL
// });




router.get('/', function(req, res, next) {
  // you can connect to the database each time you do a router.get by adding the following:
  // knex('Name of Database you want to connect to')
  // .select('whatever you wan to select from the database')
  // .then('knex returns a PROMISE')
  // inside the anynomous function, the params are whatever is from the promise response
  knex('databaseName').select().then(function(cookies) {
    res.send('this text will show up in the browser');
  });
});

// if you want to select all the fields for the cookie ginger snaps
// *note that if you do .select()...this is the same as SELECT *
knex('databaseName').select().where({name:'gingersnaps'}).then(function(cookies){
    res.send('this text will show up in the browser');
});

// for multiple selections, you can write them in like an object
knex('databaseName').select().where({name:'gingersnaps', cookieType:'crunchy'}).then(function(cookies){

// mulitiple searches using orWhere
knex('databaseName').select().where({name:'gingersnaps'}).orWhere({cookieType:'crunchy'}).then(function(cookies){

// using whereIn to search for all names with these values
knex('databaseName').select().whereIN('id', [1,2]).then(function(cookies){





// PROMISES
// .then() means that when the function before that is complete, THEN move onto the next function/action after the then()


// make sure to have a .catch() at the end, to catch any errors.
// .catch(function(err){})
