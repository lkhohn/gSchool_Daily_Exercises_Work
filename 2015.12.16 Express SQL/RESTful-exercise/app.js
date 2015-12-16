var express = require('express');
var router = express.Router();
// var app = express();
var path = require('path');
var low = require('lowdb');
var db = low('db.json');

router.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res){
  res.render('index', { title: "Puppies"});
});

router.listen(3000);
module.exports = router;
