/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'mysql2',
    connection: {
      database: 'db_top_arts',
      user:     'root',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './Projetos Pessoais/SistemaTopArts/migrations'
    }
  };