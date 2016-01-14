
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actors', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.date('dob').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actors');
};
