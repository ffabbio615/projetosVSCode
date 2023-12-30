import { Pessoa } from "./Modelo.js";
import { PessoaVisao } from "./Visao.js";

class Controle{
    constructor(){
        this.pessoaVisao = new PessoaVisao();
        this.pessoa = []; // = new Pessoa();
        this.contadorDePessoas = 0;
        this.enviarDados();
        this.receberDados();
        this.buscarNome();
    }

    enviarDados(){
        this.pessoaVisao.botaoEnviarDados.addEventListener('click', e =>{
            e.preventDefault();
            this.pessoa [this.contadorDePessoas] = new Pessoa();
            Object.assign(this.pessoa[this.contadorDePessoas], this.pessoaVisao.getCampos());
            this.contadorDePessoas ++;
            this.pessoaVisao.limparCampos();
        });
    }

    receberDados(){
        this.pessoaVisao.botaoReceberDados.addEventListener('click', e =>{
            e.preventDefault();
            const divDeDados = document.querySelector('.exibirPessoa');
            for (let i =0; i<this.contadorDePessoas; i++){
                const p = document.createElement('p');
                p.className = 'dadosDaPessoa';
                p.innerText = this.pessoa[i].exibirDados().toUpperCase();
                divDeDados.appendChild(p);
            }
        });
    }

    buscarNome() {
        this.pessoaVisao.inputBuscarDados.addEventListener('input', e => {
            const divDeDados = document.querySelector('.exibirPessoa');
            if (this.pessoaVisao.inputBuscarDados.value.length > 2) {
                divDeDados.innerHTML = '';
                for (let i = 0; i < this.contadorDePessoas; i++) {
                    if (this.pessoa[i].nome.includes(this.pessoaVisao.inputBuscarDados.value)) {
                        this.exibirNomeBuscado(i);
                    }}}
                    else divDeDados.innerHTML = '';
        });}

    exibirNomeBuscado(i){
        const divDeDados = document.querySelector('.exibirPessoa');
        const p = document.createElement('p');
        p.className = 'dadosDaPessoa';
        p.innerText = this.pessoa[i].exibirDados().toUpperCase();
        divDeDados.appendChild(p);
    }
}

const controlePessoa = new Controle();