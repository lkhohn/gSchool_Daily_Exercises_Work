var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    text: "This is the sound that doesn't end",
    img: "http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg",
    link: '/verse-2'
  });
});


router.get('/verse-2', function(req, res) {
  res.render('index', {
    text: "It goes on and on my friends",
    img: "http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg",
    link: "/verse-3"
  });
});

router.get('/verse-3', function(req, res) {
  res.render('index', {
    text: "And they'll continue singing it forever just because..",
    img: "http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg",
    link: "/verse-4"
  });
});

router.get('/verse-4', function(req, res) {
  res.render('index', {
    text: "Some people started singing it not know what it was",
    img: "http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg",
    link: "/"
  });
});







module.exports = router;
