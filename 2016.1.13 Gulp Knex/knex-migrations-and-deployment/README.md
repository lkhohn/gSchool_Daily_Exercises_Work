## Objectives

* Be able to create tables using migrations
* Be able to create tables in your Heroku DB using migrations
* Be able to explain why migrations are important
* Be able to explain why migrations have unique identifying numbers

## Why you should care

Migrations are a convenient way to alter your database schema over time in a consistent and easy way. Migrations reduce the opportunity for human error and allow you to automate schema creation in both development and production.

You can think of each migration as being a new 'version' of the database. A schema starts off with nothing in it, and each migration modifies it to add or remove tables, columns, or entries.

These migrations also provide further documentation about your database schema for future you, your team, and _future you!_

## EXERCISE SUMMARY

__STEP 1:__
Included in this repo is a Library CRUD app. Your mission is to add `Books` and `Readers` to this application using `knex` and `migrations`.

__Books__

* id
* author
* title
* rating
* description

__Readers__

* id
* first_name
* last_name

__STEP 2:__
Deploy this CRUD app to Heroku and use your migrations to add your `Readers` and `Books` tables to your Heroku database.

## Installing and setting up knex

```sh
$ npm install --save pg knex  #install knex locally
$ npm install knex -g         #install knex cli globally if you haven't before
```

---

## knexfile.js

`touch knexfile.js` and add the following.

```js
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/library'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
```

---

## Migrations

Migrations are stored as files in the migrations directory, one for each migration. The name of the file is of the form CURRENTDATETIME_create_books.js, that is to say a UTC timestamp identifying the migration followed by an underscore followed by the name of the migration.  Knex uses this timestamp to determine which migration should be run and in what order.

Of course, calculating timestamps is no fun, so Knex provides a generator to handle making it for you:

__The migration cli is bundled with the knex global install.__

---

## Knex migration tool

Create a new migration with the name create_books

```sh
knex migrate:make create_books
```
__You probably got an error about not having a database? Your migration file was still created, but go ahead and use knex to create your `library` database__

```sh
$ createdb library
```


Update the new migration file `migrations/CURRENTDATETIME_create_books.js` accordingly:

```js
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
    table.increments();
    table.string('author');
    table.string('title');
    table.integer('rating');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
```

---

## Run the latest migrations using the development connection string

```sh
$ knex migrate:latest --env development
```

__confirm successful migration and proper schema__

```sh
psql library
select * from books;
```
---

## Establishing a connection

__Initializing knex only once__
* Initializing the library should normally only ever happen once in your application
* This creates a connection pool for the current database
* You should use the instance returned from the initialize call throughout your library.

---

* Create a folder called `db`

* Inside the db folder create a new file `knex.js` with the following contents:

```js
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
```

* This initializes knex with the connection information obtained from the configuration in `knexfile.js` for the current environment

__NOTE:__ What core module do you need to install to be able to use environment variables?

---

## Use the connection in your routes file

* In your `routes/books.js` file, require the `knex.js` file you created

* Create a function `Books` that returns a new knex query builder for the books table

```js
var knex = require('../db/knex');
function Books() {
  return knex('books');
}
```

__Using knex and migrations, get `Readers` wired up and confirm that your app is running as it should _locally_ __

---

## Get it working on Heroku

__STEP 1__

* In your `knexfile.js` you need to add two things. Can you spot them?

```js
require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/library'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
```
`add`, `commit` and `push`.

__STEP 2__

From the command line, run the following command:

```sh
knex migrate:latest --env production
```

__Broken?__

You are running your file locally and your app doesn't know what the value of your `DATABASE_URL` environment variable.

__add your DATABASE_URL environment variable to `.env`__

```sh
heroku config  // to get your variable and value
```

## Next Steps

__Once you've got this app up and running on Heroku, add your Heroku url for this app to the top of this `README` and submit a `pull request`.__

## Helpful Notes

__Connecting to a Heroku Hosted Postgres Database__

```sh
heroku addons:create heroku-postgresql
```

__Using the `dotenv` core module to config environment variables__

You'll need some help getting your app to talk to your environment variables, both locally as well as deployed.

Google `npm dotenv` and read the docs to help you get up and running with a `.env` file in your Node.js app.
