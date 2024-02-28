// const knexfile = require('../knexfile');
// const knex = require('knex')(knexfile);

const knex = require('./connection');

const data = {
    first_name: 'José',
    last_name: 'Santos Melo',
    email: 'josesantos2502@gmail.com',
    password_hash: 'melo@1958',
    salary: 1415.00
};

knex('users')
.insert(data).then(() =>{ 
    console.log('Dados inseridos com sucesso!'); 
})
.catch(()=>{ 
    console.log('Os dados não foram inseridos'); 
})
.finally(() =>{ 
    knex.destroy(); 
});