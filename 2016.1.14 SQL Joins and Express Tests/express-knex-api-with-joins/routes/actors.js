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

module.exports = router;
// SELECT actors.id, name, dob FROM actors FULL OUTER JOIN appearances ON actors.id = appearances.actor_id WHERE actors.id IS null OR appearances.actor_id IS null
