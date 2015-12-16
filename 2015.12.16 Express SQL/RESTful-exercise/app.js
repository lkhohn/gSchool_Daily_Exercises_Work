var express = require('express');
var app = express();
var path = require('path')
var low = require('lowdb');
var db = low('db.json');

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index', { title: "Puppies"})
});

app.listen(3000);
