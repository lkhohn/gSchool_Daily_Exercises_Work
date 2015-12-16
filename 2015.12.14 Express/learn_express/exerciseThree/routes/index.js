var express = require('express');
var router = express.Router();
var snippets = require('./lib/snippets.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hipstify',
    subTitle: 'how to be hipsta-licious',
    body: "write a sentence or two, and we'll hipstafy it for you!"
  });
});

router.post('/', function(req, res, next) {
  // console.log(req.body.textarea);
  var input = req.body.textarea;
  var words = input.split(" ");
  // console.log(words);
  for (var i = 0; i < words.length; i++) {
    var hipstafyWord = snippets[Math.floor(Math.random() * words.length)];
    // console.log(hipstafyWord);
    var hipstafySentence = words[i] + ' ' + hipstafyWord;
    console.log(hipstafySentence);
  }
});


module.exports = router;
