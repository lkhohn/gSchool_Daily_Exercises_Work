var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
function Books() {
  return knex('books');
}



router.get('/books', function(req, res, next) {
  Books().select().then(function(results){
    res.render('books/index', {books: results});
  });
});

router.get('/books/new', function(req, res, next) {
  res.render('books/new');
});

router.post('/books', function(req, res, next) {
  Books().insert(req.body).then(function(result){
    res.redirect('/books');
  });
});

router.get('/books/:id', function (req, res, next) {
  Books().where('id', req.params.id).first().then(function(result){
    res.render('books/show', { book: result });
  });
})

router.get('/books/:id/edit', function (req, res) {
  Books().where('id', req.params.id).first().then(function(result){
    res.render('books/edit', { book: result });
  });
})

router.post('/books/:id', function (req, res) {
  Books().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/books');
  });
});

router.post('/books/:id/delete', function (req, res) {
  Books().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/books');
  })
})

module.exports = router;
