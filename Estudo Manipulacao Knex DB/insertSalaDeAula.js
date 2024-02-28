const knex = require('./connection');

//Vamos supor que o aluno 1 tente entrar na aula de biologia, onde já está inserido

const aluno =2;
const professor = 2;
const disciplina = 'biologia';

knex('sala_de_aula as sda').select('sda.aluno_id', 'sda.professor_id')
.where('sda.aluno_id', '=', aluno)
.andWhere('sda.professor_id', '=', professor)
.then(resultado =>{
    if(resultado.length === 0){
        return knex('sala_de_aula').insert({aluno_id: aluno, professor_id: professor, disciplina: disciplina})
        .then(()=>{
                console.log('Aluno inserido com sucesso!');
        })// .catch(()=>{console.log('Houve algum erro na inserção do aluno.');})
    }else{
        console.log('Aluno já matriculado!')
    }
}).catch(() =>{
    console.log('Houve algum erro na inserção do aluno.');
}
)
.finally(()=>{
    knex.destroy();
})