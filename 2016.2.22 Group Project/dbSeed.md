exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('users').insert(
        {

        }
    ),
    knex('users').insert(
        {

        }
    ),
    knex('users').insert(
        {

        }
    ),
    knex('users').insert(
        {

        }
    )
  );
};

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('filters').del(),
    knex('filters').insert(
        {

        }
    ),
    knex('filters').insert(
        {

        }
    ),
    knex('filters').insert(
        {

        }
    ),
    knex('filters').insert(
        {

        }
    )
  );
};

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('dreams').del(),
    knex('dreams').insert(
        {

        }
    ),
    knex('dreams').insert(
        {

        }
    ),
    knex('dreams').insert(
        {

        }
    ),
    knex('dreams').insert(
        {

        }
    )
  );
};
