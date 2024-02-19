/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('aluno', function(table) {
      table.increments('id').primary();
      table.string('nome').notNullable();
    })
    .createTable('professor', function(table) {
      table.increments('id').primary();
      table.string('nome').notNullable();
    })
    .createTable('sala_de_aula', function(table) {
      table.integer('aluno_id').unsigned().notNullable();
      table.integer('professor_id').unsigned().notNullable();
      table.foreign('aluno_id').references('aluno.id');
      table.foreign('professor_id').references('professor.id');
      table.string('perfil').notNullable();
      table.primary(['aluno_id', 'professor_id']);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('sala_de_aula')
      .dropTableIfExists('aluno')
      .dropTableIfExists('professor');
  };