import { Pessoa } from "./Modelo.js";
import { PessoaVisao } from "./Visao.js";

class Controle{
    constructor(){
        this.pessoaVisao = new PessoaVisao();
        this.pessoa = new Pessoa();
        this.enviarDados();
        this.receberDados();
    }

    enviarDados(){
        this.pessoaVisao.botaoEnviarDados.addEventListener('click', e =>{
            e.preventDefault();
            Object.assign(this.pessoa, this.pessoaVisao.getCampos());
            this.pessoaVisao.limparCampos();
        });
    }

    receberDados(){
        this.pessoaVisao.botaoReceberDados.addEventListener('click', e =>{
            e.preventDefault();
            const divDeDados = document.querySelector('.exibirPessoa');
            const p = document.createElement('p');
            p.className = 'dadosDaPessoa';
            p.innerText = this.pessoa.exibirDados();
            divDeDados.appendChild(p);
        });
    }
}

const controlePessoa = new Controle();