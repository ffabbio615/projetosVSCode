const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
module.exports = knex;

// const nome= [];

// knex('users')
// .then(data =>{
//     for(let i=0; i<data.length; i++){
//     nome.push(data[i]);
// }
//     console.log(nome[0]);
// });

// knex('users').then(data =>{
//  console.log("Banco de Dados Conectado Com Sucesso!");
// }).catch(() =>{
//     console.log("Erro de Comunicação com o Bando de Dados");
// })
// .finally(() =>{
//     knex.destroy();
// });