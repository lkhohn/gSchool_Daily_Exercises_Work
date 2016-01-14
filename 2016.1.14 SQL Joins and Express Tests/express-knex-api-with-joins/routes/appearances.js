var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
knex.select("movies.title", 'movies.release_year', 'actors.name', 'actors.dob', 'character').from('appearances')
  .leftOuterJoin('movies', 'appearances.movie_id', 'movies.id')
  .leftOuterJoin('actors', 'appearances.actor_id', 'actors.id')
  .then(function(appearances){
    res.json(appearances);
    }).catch(function (err) {
      next(new Error(err));
    });
});

module.exports = router;

// SELECT title, release_year, name, dob, character FROM appearances LEFT OUTER JOIN movies ON movies.id = appearances.movie_id LEFT OUTER JOIN actors ON appearances.actor_id=actors.id;
