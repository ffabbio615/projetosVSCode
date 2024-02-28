const knex = require('./connection');

knex('users').update({
    salary: knex.raw('round(rand() * ?, ?)', [10000, 2])
})
.whereBetween('id', [50,60])
.then(() =>{
    console.log("Registros atualizados!");
})
.catch()
.finally(()=>{
    knex.destroy();
})