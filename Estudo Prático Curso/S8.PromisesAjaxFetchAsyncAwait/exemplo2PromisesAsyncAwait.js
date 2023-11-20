class Pessoa
{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    verificarDadosComPromise(){
        return new Promise((resolve, reject) =>{
            if(typeof this.nome !== 'string' || typeof this.sobrenome !== 'string' || typeof this.idade !== 'number')
            reject('Dados inválidos!');

            resolve('Dados Corretos. Prosseguindo com o cadastro.')
        });
    }

    async executarVerificacao()
    {
        try{
            console.log(await this.verificarDadosComPromise());
        } catch(error){console.log(error);}
    }
}

const pessoa = new Pessoa('Fábio', 'Marques', 32);
// pessoa.verificarDadosComPromise().then(mensagem =>{console.log(mensagem);}).catch(mensagem=>{console.log(mensagem);});
pessoa.executarVerificacao();