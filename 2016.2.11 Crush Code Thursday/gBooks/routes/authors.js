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

router.get('/:id', function(req, res, next){
  knex('authors').where('id', req.params.id).first().then(function(result){
    res.render('individualAuthor', { author: result });
  });
});

router.get('/:id/editAuthor', function(req, res, next){
  knex('authors').where('id', req.params.id).first().then(function(result){
    res.render('editAuthor', { author: result});
  });
});

router.post('/:id/editAuthor', function(req, res, next){
  knex('authors').where('id', req.params.id).update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    portraiturl: req.body.portraiturl,
    biography: req.body.biography
  }).then(function(result){
    res.redirect('/authors');
  });
});


router.post('/:id/delete', function (req, res) {
  knex('authors').where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/authors');
  });
});






module.exports = router;
