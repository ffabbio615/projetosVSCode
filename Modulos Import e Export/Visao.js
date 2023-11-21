export class PessoaVisao{
    constructor(){
        this.inputNome = document.querySelector('#input-nome');
        this.inputSobrenome = document.querySelector('#input-sobrenome');
        this.inputIdade = document.querySelector('#input-idade');
        this.botaoEnviarDados = document.querySelector('#botao-enviar-dados');
        this.botaoReceberDados = document.querySelector('#botao-receber-dados');
    }

    getCampos(){
        return{
            nome: this.inputNome.value,
            sobrenome: this.inputSobrenome.value,
            idade: this.inputIdade.value,
        };
    }

    limparCampos()
    {
        this.inputNome.value = '';
        this.inputSobrenome.value = '';
        this.inputIdade.value = '';
    }

}