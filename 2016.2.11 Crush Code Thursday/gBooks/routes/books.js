var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client:'pg',
  connection: process.env.DATABASE_URL
});

router.get('/', function(req, res, next){
  knex('books').select().then(function(postDetails){
    res.render('books', {
      postDetails: postDetails
    });
  });
});

router.get('/newBook', function(req, res, next) {
  res.render('newBook');
});

router.post('/newBook', function(req, res, next) {
  knex('books').insert({
    title: req.body.title,
    description: req.body.description,
    coverimgurl: req.body.coverimgurl,
    genre: req.body.genre
  }).then(function(){
    res.redirect('/books');
  });
});


router.get('/:book_id', function (req, res, next) {
  knex('books').where('book_id', req.params.book_id).first().then(function(result){
    res.render('individualBook', { book: result });
  });
});

router.get('/:book_id/editBook', function (req, res, next) {
  knex('books').where('book_id', req.params.book_id).first().then(function(result){
    res.render('editBook', { book: result });
  });
});

router.post('/:book_id/editBook', function (req, res) {
  knex('books').where('book_id', req.params.book_id).update({
    title: req.body.title,
    description: req.body.description,
    coverimgurl: req.body.coverimgurl,
    genre: req.body.genre
    }).then(function(result){
    res.redirect('/books');
  });
});


router.post('/:book_id/delete', function (req, res) {
  knex('books').where('book_id', req.params.book_id).del()
  .then(function (result) {
    res.redirect('/books');
  });
});

module.exports = router;
