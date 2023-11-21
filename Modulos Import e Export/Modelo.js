export class Pessoa{
    constructor(){
        this.nome = '';
        this.sobrenome = '';
        this.idade = '';
    }

    exibirDados(){
        return `O nome da pessoa é: ${this.nome} ${this.sobrenome}. A idade é: ${this.idade}`;
    }
}