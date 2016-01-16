var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// router.get('/', function(req, res, next) {
//   knex('actors').then(function (actors) {
//     res.json(actors)
//   }).catch(function (err) {
//     next(new Error(err));
//   })
// });


router.get('/', function(req, res, next){
  knex.select('actors.id', 'name', 'dob').from('actors')
  .leftOuterJoin('appearances', 'actors.id', 'appearances.actor_id')
  .whereNull('appearances.actor_id')
  .then(function(actors){
    res.json(actors);
    }).catch(function (err) {
      next(new Error(err));
    });
});

router.get('/', function(req, res, next){

})

SELECT actors.id, name, dob, appearances FROM (SELECT appearances.movie_id, movies.title, movies.release_year, appearances.character FROM appearances LEFT OUTER JOIN movies ON movies.id = appearances.movie_id)
) AS actors LEFT OUTER JOIN appearances ON actors.id = appearances.actor_id;
SELECT appearances.movie_id, movies.title, movies.release_year, appearances.character FROM appearances LEFT OUTER JOIN movies ON movies.id = appearances.movie_id;

SELECT actors.id, name, dob, appearances FROM
(SELECT appearances.movie_id, movies.title, movies.release_year, appearances.character FROM appearances LEFT OUTER JOIN movies ON movies.id = appearances.movie_id)
actors JOIN movies ON a.id = movies.movie_id;

// SELECT actors.id, name, dob, appearances FROM
// (SELECT appearances.movie_id, appearances.character, movies.title, movies.release_year FROM appearances)
//
// actors
// LEFT OUTER JOIN movies ON movies.id = appearances.movie_id
//
// LEFT OUTER JOIN appearances ON actors.id = appearances.actor_id;
module.exports = router;
// SELECT actors.id, name, dob FROM actors FULL OUTER JOIN appearances ON actors.id = appearances.actor_id WHERE actors.id IS null OR appearances.actor_id IS null
