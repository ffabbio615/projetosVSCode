const knex = require('./connection');

knex('users').delete().where('id', '=', 18).then().catch().finally(() =>{knex.destroy();});