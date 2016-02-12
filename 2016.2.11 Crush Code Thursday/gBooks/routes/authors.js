var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client:'pg',
  connection: process.env.DATABASE_URL
});


router.get('/', function(req, res, next){
  knex('authors').select().then(function(postDetails){
    res.render('authors', {
      postDetails: postDetails
        });
    });
});

router.get('/newAuthor', function(req, res, next){
  res.render('newAuthor');
});

router.post('/newAuthor', function(req, res, next){
  knex('authors').insert({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    portraiturl: req.body.portraiturl,
    biography: req.body.biography
  }).then(function(){
    res.redirect('/authors');
  });
});

router.get('/:author_id', function(req, res, next){
  knex('authors').where('author_id', req.params.author_id).first().then(function(result){
    res.render('individualAuthor', { author: result });
  });
});

router.get('/:author_id/editAuthor', function(req, res, next){
  knex('authors').where('author_id', req.params.author_id).first().then(function(result){
    res.render('editAuthor', { author: result});
  });
});

router.post('/:author_id/editAuthor', function(req, res, next){
  knex('authors').where('author_id', req.params.author_id).update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    portraiturl: req.body.portraiturl,
    biography: req.body.biography
  }).then(function(result){
    res.redirect('/authors');
  });
});


router.post('/:author_id/delete', function (req, res) {
  knex('authors').where('author_id', req.params.author_id).del()
  .then(function (result) {
    res.redirect('/authors');
  });
});






module.exports = router;
