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


router.get('/:id', function (req, res, next) {
  knex('books').where('id', req.params.id).first().then(function(result){
    res.render('individualBook', { book: result });
  });
})

router.get('/:id/editBook', function (req, res, next) {
  knex('books').where('id', req.params.id).first().then(function(result){
    res.render('editBook', { book: result });
  });
})

router.post('/:id/editBook', function (req, res) {
  knex('books').where('id', req.params.id).update({
    title: req.body.title,
    description: req.body.description,
    coverimgurl: req.body.coverimgurl,
    genre: req.body.genre
    }).then(function(result){
    res.redirect('/books');
  });
});


router.post('/:id/delete', function (req, res) {
  knex('books').where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/books');
  });
});

module.exports = router;
