/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users_roles', (coluna) =>{
    coluna.integer('user_id').unsigned();
    coluna.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE');

    coluna.integer('role_id').unsigned();
    coluna.foreign('role_id').references('roles.id').onDelete('CASCADE').onUpdate('CASCADE');

    coluna.primary(['user_id','role_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users_roles');
};
