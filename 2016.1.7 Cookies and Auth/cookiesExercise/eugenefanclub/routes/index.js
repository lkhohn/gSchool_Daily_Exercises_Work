var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Eugene's Fan Club" });
});


/*
	ejs partials
	start partial with underscore - naming convention
	

*/
module.exports = router;
