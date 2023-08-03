class Controlador
{
    #a;
    set this.#a(objeto){this.#a = objeto;}
    get #a(){return this.#a;}
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.evento();
    }

    evento(){
        this.formulario.addEventListener('submit', e =>{
            e.preventDefault();
            this.validarCampos();
        });
    }

    validarCampos()
        {
            const campos = this.formulario.querySelectorAll('.campoTexto');
            for(let campo of campos){
                if(!campo.value){alert('Não tem valor no campo' + campo.previousElementSibling.innerText)}
                else{this.inserirDadosNaClasse(campos);}
            }
        }

        inserirDadosNaClasse(campos)
        {
            this.#a('oi'); // = new Pessoa(campos[0].value,campos[1].value,campos[2].value,campos[3].value,campos[4].value, campos[5].value);
        }

}

controle = new Controlador();
// console.log(controle.a);