const knexfile = require("../../../../knexfile");
const knex = require('knex')(knexfile);
module.exports = knex;

// knex('users').then(data =>{
//  console.log("Banco de Dados Conectado Com Sucesso!");
// }).catch(() =>{
//     console.log("Erro de Comunicação com o Bando de Dados");
// })
// .finally(() =>{
//     knex.destroy();
// });