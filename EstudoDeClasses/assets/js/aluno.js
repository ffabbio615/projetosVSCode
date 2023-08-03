class Aluno extends Pessoa
{
    constructor(nome, sobrenome, endereco, matricula, turma, serie){
        super(nome, sobrenome, endereco, matricula, turma);
        this.serie = serie;
    }

    
}