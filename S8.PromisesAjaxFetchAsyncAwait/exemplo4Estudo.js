class Exemplo4{

constructor(){
    this.botao = document.querySelector('.botaoLinks');
    this.contador = 1;
    this.eventoBotao();
}

eventoBotao(){
    this.botao.addEventListener('click', evento =>{
        evento.preventDefault();
        this.processarPagina();
        if(this.contador === 1){
            this.contador = 2;
        }else if (this.contador === 2){
            this.contador = 3;
        }else if (this.contador === 3){
            this.contador = 1;
        }
    });
}

async processarPagina(){
    try{
        const resposta = await fetch(`pagina${this.contador}.html`);
        if(resposta.status !== 200) throw new Error ('Página não pôde ser carregada!');
        const html = await resposta.text();
        this.botao.textContent =`Página ${this.contador}`;
        this.carregarPagina(html);
    } catch(error){alert(error);}
}

carregarPagina(html){
    document.querySelector('.conteudo').innerHTML = html;
}

}

const exemplo4 = new Exemplo4();