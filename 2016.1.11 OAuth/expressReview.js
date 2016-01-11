pg : node module that directly interacts with postgres. It implemnents some of the base-level bindings to interact with postgres
  -no query abstraction
  -you can load pg by itself and use it without knex. You basically would be writing in node straight postgres commands, which could open up
  your application to hacked SQL injections


knex : abstraction on pg. Protects from common issues. Has advanced methods to ease query creations
  .... Knex uses PG which is used to connect to database


Bookshelf : ORM (object relational mapper). Furthure abstraction off of Knex. More detail of postgres database relations.
  -Handles enforcement of resource schedma and relationships


Parts of the knex query
knex('databaseName').select().where().then(function(data){
  <handle response with returned data>
})
-after the knex request, the ".then()" is used because it returns data in the form of a promise (promise-object API)

Database Definition Language -- like when you are in the terminal
C -- CREATE TABLE name (id DATATYPE(size), name DATATYPE(size)) VALUES (id, name);
R -- \dt (how you read about a table or how the data was defined)
U -- Alter table
D -- Drop


Database Markup Language -- example like when you are in your routes using knex
C -- Insert
R -- Select
U -- Update
D -- Delete


Setting up Knex
-anywhere you have a knex query, you need to require knex at the top of the file.
var express = require('express');


Edit/Delete
In postgres, to update/change an entry:
UPDATE users SET lastName = 'hohn' WHERE lastName = 'kuhnhein';
  *note: set is the value you want it to be & where is the value is currently is
  *note: if you do not do the WHERE, it will update all the lastName to equal the new value 'hohn'
  *note: name probably is not the best to use. Try using a more unique identifier like id

To delete an entry:
DELETE FROM users WHERE name = 'hohn';
  *note: if you end after users, this will delete all the entries in the table
  *note: name probably is not the best to use. Try using a more unique identifier like id
