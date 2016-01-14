
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.integer('release_year').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
