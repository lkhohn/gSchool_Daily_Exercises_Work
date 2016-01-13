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
