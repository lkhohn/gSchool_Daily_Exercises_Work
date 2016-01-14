
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('appearances').del(),
    knex('movies').del(),
    knex('actors').del()
  )
  .then(function () {
    return Promise.join(
      knex('movies').insert({title: 'Shawshank Redemption', release_year: 1994}).returning('id'),
      knex('movies').insert({title: 'Bourne Identity', release_year: 2002}).returning('id'),
      knex('movies').insert({title: 'Back to the Future', release_year: 1985}).returning('id'),
      knex('movies').insert({title: 'Good Will Hunting', release_year: 1997}).returning('id')
    )
  }).then(function (movies) {
    return Promise.join(
      knex('actors').insert({name: 'Matt Damon', dob: '1970-10-08'}).returning('id'),
      knex('actors').insert({name: 'Tim Robbins', dob: '1958-10-16'}).returning('id'),
      knex('actors').insert({name: 'Morgan Freeman', dob: '1937-06-01'}).returning('id'),
      knex('actors').insert({name: 'Jonah Hill', dob: '1983-12-20'}).returning('id')
    ).then(function (actors) {
      return {
        movies: {
          shawshankRedemption: movies[0][0],
          bourneIndentity: movies[1][0],
          backToTheFuture: movies[2][0],
          goodWillHunting: movies[3][0],
        },
        actors: {
          matt: actors[0][0],
          tim: actors[1][0],
          morgan: actors[2][0],
          jonah: actors[3][0],
        }
      }
    });
  }).then(function (data) {
    return Promise.join(
      knex('appearances').insert({
        actor_id: data.actors.matt,
        movie_id: data.movies.bourneIndentity,
        character: 'Jason Bourne'
      }),
      knex('appearances').insert({
        actor_id: data.actors.matt,
        movie_id: data.movies.goodWillHunting,
        character: 'Will Hunting'
      }),
      knex('appearances').insert({
        actor_id: data.actors.morgan,
        movie_id: data.movies.shawshankRedemption,
        character: 'Red'
      }),
      knex('appearances').insert({
        actor_id: data.actors.tim,
        movie_id: data.movies.shawshankRedemption,
        character: 'Andy Dufrane'
      })
    )
  })
};
