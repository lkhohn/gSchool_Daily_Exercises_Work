
exports.up = function(knex, Promise) {
  return knex.schema.createTable('appearances', function (table) {
    table.increments();
    table.integer('movie_id').notNullable().references('id').inTable('movies').onDelete('CASCADE');
    table.integer('actor_id').notNullable().references('id').inTable('actors').onDelete('CASCADE');
    table.string('character').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('appearances');
};
