var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// router.get('/', function(req, res, next) {
//   knex('movies').then(function (movies) {
//     res.json(movies)
//   }).catch(function (err) {
//     next(new Error(err));
//   })
// });

router.get('/', function(req, res, next){
  knex.select('movies.id', 'movies.title', 'movies.release_year').from('movies')
  .leftOuterJoin('appearances', 'movies.id', 'appearances.movie_id')
  .whereNull('appearances.movie_id')
  .then(function(movies){
    res.json(movies);
    }).catch(function (err) {
      next(new Error(err));
    });
});

router.post('/', function(req, res, next){
  knex('movies')
  .returning('id')
  .returning('title')
  .returning('release_year')
  .insert({
    "id": 54,
    "title": "Some new movie name",
    "release_year": 1999
  })
  .then(function(movies){
    res.json(movies);
    }).catch(function (err) {
      next(new Error(err));
    });
});


// router.post('/', function(req, res, next){
//   knex('movies')
//   .where('id', '=', '54')
//   .update({
//     "title": "Some new movie name 2"
//   })
//   .then(function(movies){
//     res.json(movies);
//     }).catch(function (err) {
//       next(new Error(err));
//     });
// });


// router.post('/', function(req, res, next){
//   knex('movies')
//   .where('id', '=', '54')
//   .del();
// })  .then(function(movies){
//     res.json(movies);
//     }).catch(function (err) {
//       next(new Error(err));
//     });
// });







module.exports = router;
// SELECT appearances.id, title, release_year FROM movies FULL OUTER JOIN appearances ON movies.id = appearances.movie_id WHERE movies.id IS null OR appearances.movie_id IS null;
