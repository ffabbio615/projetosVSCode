const knex = require('./connection');

// function fazerConsulta() {
//     return knex('user_login')
//       .select('user', 'password')
//       .where('user', '=', 'ffabbio');
//   }

//   function fechaConexao()
//   {
//     knex.destroy(); 
//   }
  
//   module.exports = { fazerConsulta };


knex('user_login').select('user', 'password')
.where('user', '=', 'ffabbio')
.then(result =>{ 
console.log(result); 
})
.catch(()=>{ 
console.log('Nenhuma coluna com esse nome foi encontrada'); 
})
.finally(() =>{ 
knex.destroy(); 
});