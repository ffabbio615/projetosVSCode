const knex = require('./connection');

knex('users').select('first_name', 'salary')
.whereNotNull('salary')
.where('salary', '>', 5000)
.andWhereBetween('id', [1,20]).limit(5)
.then(result =>{ 
    console.log(result); 
})
.catch(()=>{ 
    console.log('Nenhuma coluna com esse nome foi encontrada'); 
})
.finally(() =>{ 
    knex.destroy(); 
});