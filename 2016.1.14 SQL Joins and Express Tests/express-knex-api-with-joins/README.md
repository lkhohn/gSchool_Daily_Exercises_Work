# Express w/ Knex

## Setup

```
npm install
npm install -g knex
createdb movie-actors
knex migrate:latest
knex seed:run movies
```

## Query Challenges

**Make a data model**

Run `psql movie-actors` and inspect the tables with `\dt`, then inspect each table with `\d tablename`.

Draw a model that shows all three tables and their relationships.

_(check here in the solutions branch for the correct answer)_

**Appearances with Actor and Movie Data**

Update the appearances endpoint `/api/v1/appearances` to return the following by joining `appearances` to `movies` and `actors`:

```json
[
  {
    "title": "Bourne Identity",
    "release_year": 2002,
    "name": "Matt Damon",
    "dob": "1970-10-08T06:00:00.000Z",
    "character": "Jason Bourne"
  },
  {
    "title": "Good Will Hunting",
    "release_year": 1997,
    "name": "Matt Damon",
    "dob": "1970-10-08T06:00:00.000Z",
    "character": "Will Hunting"
  },
  {
    "title": "Shawshank Redemption",
    "release_year": 1994,
    "name": "Morgan Freeman",
    "dob": "1937-06-01T06:00:00.000Z",
    "character": "Red"
  },
  {
    "title": "Shawshank Redemption",
    "release_year": 1994,
    "name": "Tim Robbins",
    "dob": "1958-10-16T06:00:00.000Z",
    "character": "Andy Dufrane"
  }
]
```

Note, you will have to use the `select` clause to limit the columns returned.

**Actors Without Movies**

Create an endpoint `/api/v1/actors/without-movies` that returns the following:

```json
[
  {
    "id": 8,
    "name": "Jonah Hill",
    "dob": "1983-12-20T07:00:00.000Z"
  }
]
```

**Movies Without Actors**

Create an endpoint `/api/v1/movies/without-actors` that returns the following:

```json
[
  {
    "id": 7,
    "title": "Back to the Future",
    "release_year": 1985
  }
]
```

### Modification Challenges

**Add Create to Movies**

URL: `POST /api/v1/movies`

When a movie is created, return a response like this:

```json
[
  {
    "id": 54,
    "title": "Some new movie name",
    "release_year": 1999
  }
]
```

NOTE: in order to do this, you'll need to either:

- use `returning('id')` (which returns an array of ids that were inserted, so you'll have to just grab the first one)
- use `returning('*')` to return the entire record

**Add Update to Movies**

URL: `PATCH /api/v1/movies/1`

When a movie is updated, return a response like this:

```json
[
  {
    "id": 54,
    "title": "Some new movie name",
    "release_year": 1999
  }
]
```

**Add Delete to Movies**

URL: `DELETE /api/v1/movies/1`

When a movie is deleted, just return a HEAD response with a status code of 200.


### Promise Challenges

**Show Movies / Characters under each Actor**

URL: `GET /api/v1/actors/:id`

Create a response like this:

```json
{
  "id": 1,
  "name": "Matt Damon",
  "dob": "1970-10-08T06:00:00.000Z",
  "appearances": [
    {
      "movie_id": 2,
      "title": "Bourne Identity",
      "release_year": 2002,
      "character": "Jason Bourne"
    },
    {
      "movie_id": 4,
      "title": "Good Will Hunting",
      "release_year": 1997,
      "character": "Will Hunting"
    }
  ]
}
```

Note: you'll have to make a nested call to `appearances` that _joins_ on movies.

---------

Here are the steps taken to get knex installed and running in this app:

## Installing Knex

Taken largely from the docs at http://knexjs.org/

```
createdb movie-actors
npm install --save pg knex
npm install knex -g
knex init
```

Updated `knexfile.js` with the following:

```js
module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/movie-actors'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
```

## Create Migrations

```
knex migrate:make create_movies
```

In the `migrations` directory there is now a single file.  Change it to:

```js
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function (table) {
    table.increments();
    table.string('title').notNullable().unique();
    table.integer('release_year').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
```

## Run Migrations

```
knex migrate:latest
```

## Using in Node / Express

Create a file such as `db/knex.js` with the following:

```js
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
```

Then to use it, write this:

```js
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('movies').select().then(function (movies) {
    res.json(movies)
  })
})
```

The rest of the knex methods from the docs should make sense now that you have this basic setup.

## Create Seeds

Create a seed file with `knex seed:make movies`.

## Run Seeds

```
knex seed:run movies
```
