var express = require('express');
var app = express();
var path = require('path')
var low = require('lowdb');
var db = low('db.json');
var pgp = require('pg-promise');
var db = pgp("postgres://username:password@host:port/database");




app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index', { title: "Puppies"})
});

app.listen(3000);
