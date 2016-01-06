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

// when working with Express, first think about how you would do that query in sql.
// The language is almost the same, so figuring it out how you would do it in sql, will help
// determine how to write it using knex.


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


knex('databaseName').select().where({name:'gingersnaps'}).then(function(cookies){



// PROMISES
// .then() means that when the function before that is complete, THEN move onto the next function/action after the then()


// make sure to have a .catch() at the end, to catch any errors. You can call catch after then() because then() returns a promise.
// .catch(function(err){})


// you can chain knex statements using promises instead of callback hell
// we are selecting something then we are RETURNING a promise
router.get('/', function(req, res, next) {
var knexPromise = knex('databaseName').select().where({name:'gingersnaps'}).then(function(cookies){
  console.log('query done');
  return knex('databaseName').insert({name:'Peanut Butter', ingredients:'peanut butter, sugar, egg'});
}).then(function(countInserted){
  res.send(countInserted);
});




// example using a form to get & post information
// in your html form, make sure the form action = "<file route to where your router.post is written>" method="POST"
router.get('/', function(req, res, next) {
 knex('cookies').select().then(function(){
   res.render('/views/cookies');
 });

router.post('/', function(req, res, next){
  // first, you can do a res.send(req.body) will do a check if what was sent through the form was sent through without a set path.
  // res.send(req.body);
  // do validation to check that the input is in the correct form
// then insert into the database
// after the .insert({}), inside will an object. The key is the key in the database, then the value is req.body.<the name tag on the form>
  knex('cookies').insert({name: req.body.name, ingredients: req.body.ingredientName}).then(function(){
    // res.send(data) will direct the user to a page showing that the data has been inserted into the database
    // res.send(data);
    // upon success, then you can redirect the user to a success/home/or specific page for your app
    res.redirect('/cookies');
// if there is an error, than you can res.render
  });
});
