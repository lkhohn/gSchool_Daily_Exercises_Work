var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client:'pg',
  connection: process.env.DATABASE_URL
});



router.get('/', function(req, res, next){
    knex('books').select()
      .innerJoin('author_book', 'books.book_id', 'author_book.book_id')
      .innerJoin('authors', 'authors.author_id', 'author_book.author_id')
      .then(function(postDetails){
    res.render('books', {
      postDetails: postDetails
    });
  });
});

router.get('/newBook', function(req, res, next) {
  res.render('newBook');
});

// router.post('/newBook', function(req, res, next) {
//   knex('books').insert({
//     title: req.body.title,
//     description: req.body.description,
//     coverimgurl: req.body.coverimgurl,
//     genre: req.body.genre
//   }).then(function(){
//     res.redirect('/books');
//   });
// });

router.post('/newBook', function(req, res, next) {
  knex('books').returning('book_id').insert({
    title: req.body.title,
    description: req.body.description,
    coverimgurl: req.body.coverimgurl,
    genre: req.body.genre
}).then(function(newID){
  var book_id = newID;
  knex('authors').returning('author_id').insert({
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }).then(function(newID){
    var author_id = newID;
    // console.log(parseInt(book_id))
    // console.log(author_id)
    knex('author_book').insert({
      book_id: parseInt(book_id),
      author_id: parseInt(author_id)
    }).then(function(result){
      res.redirect('/books');
    });
  });
});
});


router.get('/:book_id', function(req, res, next){
  knex('books').select()
  .innerJoin('author_book', 'books.book_id', 'author_book.book_id')
  .innerJoin('authors', 'authors.author_id', 'author_book.author_id')
  .where('books.book_id', req.params.book_id).first().then(function(result){
    // console.log(result);
        res.render('individualBook', { book: result });
  });
});



router.get('/:book_id/editBook', function (req, res, next) {
  knex('books').select()
  .innerJoin('author_book', 'books.book_id', 'author_book.book_id')
  .innerJoin('authors', 'authors.author_id','author_book.author_id')
  .where('books.book_id', req.params.book_id).first().then(function (result) {
      // console.log(result);
      res.render('editBook', { book: result });
    });
});


router.post('/:book_id/editBook', function (req, res) {
  knex('author_book').where('book_id', req.params.book_id)
  .then(function(joinData){
    console.log(joinData);
    knex('books').where('book_id', joinData[0].book_id).update({
      title: req.body.title,
      description: req.body.description,
      coverimgurl: req.body.coverimgurl,
      genre: req.body.genre
    })
    .then(function(result){
          res.redirect('/books');
    });
  });
});



router.post('/:book_id/delete', function (req, res, next) {
  knex('author_book').where('book_id', req.params.book_id).del()
  .then(function(result){
    res.redirect('/books');
  });
});


module.exports = router;
