exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('email', 255);
    table.text('password', 255);
    table.text('firstName', 255);
    table.text('lastName', 255);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

exports.up = function(knex, Promise) {
return knex.schema.createTable('filters', function(table){
  table.increments();
  table.integer('user_id');
  table.text('phrase', 255);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('filters');
};

exports.up = function(knex, Promise) {
return knex.schema.createTable('dreams', function(table){
  table.increments();
  table.integer('user_id');
  table.timestamps('dateTime');
  table.text('content', 2000);
  table.integer('mood');
  table.integer('rating');
  table.integer('duration');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dreams');
};
