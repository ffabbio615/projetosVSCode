// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    client: 'mysql2',
    connection: {
      database: 'login_teste_knex',
      user:     'root',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './assets/migrations'
    }
  };
