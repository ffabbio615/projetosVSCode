const knex = require('./connection');

const novosDados = {
    first_name: 'Erick',
    last_name: 'Silva Cruz',
    email: 'erickcruz@gmail.com',
    password_hash: 'eruz123',
    salary: 2200
};

knex('users')
  .where({ id: 29 }) // Condição para selecionar o registro a ser atualizado (por exemplo, onde o id é igual a 1)
  .update(novosDados) // Dados a serem atualizados
  .then(() => {
    console.log('Dados atualizados com sucesso!');
  })
  .catch(() => {
    console.log('Erro ao atualizar dados');
  })
  .finally(() => {
    knex.destroy();
  });