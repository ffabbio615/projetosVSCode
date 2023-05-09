// const something = document.getElementById('trApartamentos');
// something.onclick = function() {
//     let botaoMenu = document.querySelector("#botaoMenu");
//     botaoMenu.className = "botaoMenuVisivel botaoMenu";
// };

// const linkApartamento = document.location.href;
// if (linkApartamento == "http://25.10.190.140:5500/SunsetRioRental/index.html#modalApartamento" || linkApartamento == "http://127.0.0.1:5500/SunsetRioRental/index.html#modalApartamento")
// {
//     // alert("O JavaScript pega o link e checa apenas uma vez, daí se o link for esse especial, vai abrir uma modal com as informações");
//     borrar = document.querySelector("#secaoInicial")
//     borrar.className = "secaoInicial blurModal"
// }

// SELECIONA O IDIOMA PARA GERAR AS MODAIS DO SITE NA LINGUAGEM CORRETA
// const botaoPortugues = document.getElementById('botaoPortugues');
// const botaoIngles = document.getElementById('botaoIngles');
// let idioma =0;
// botaoPortugues.onclick = function(){idioma=0;};
// botaoIngles.onclick = function(){idioma=1;};

// FAZ O EFEITO DE ABRIR A JANELA MODAL DOS APARTAMENTOS
let borrar = document.querySelector("#trBotaoDetalhes1");
const fecharModal = document.querySelector("#btnFecharModalApartamento");
borrar.onclick = function(){
    borrar = document.querySelector("#secaoInicial")
    borrar.className = "secaoInicial blurModal";
};

fecharModal.onclick = function(){
    borrar = document.querySelector("#secaoApartamentos")
    borrar.className = "secaoApartamentos";
};


// CARREGA NA MODAL APARTAMENTO O NÚMERO DE IMAGENS QUE TEM NO APARTAMENTO E APLICA O EFEITO DE PASSAR PARA OS LADOS
let numeroImagensApartamento;
const botaoDetalhesApartamento = [];
for(let i=1; i<=12; i++){
    botaoDetalhesApartamento[i] = document.querySelector(`#trBotaoDetalhes${i}`);
    // COPA LOFT
    if(i==1){numeroImagensApartamento = 5;}
    // Estilo Sunset
    if(i==2){numeroImagensApartamento = 5;}
    // Atlântico Loft
    if(i==3){numeroImagensApartamento = 5;}
    // Sunset Garden
    if(i==4){numeroImagensApartamento = 5;}
    // Copa Sunset
    if(i==5){numeroImagensApartamento = 5;}
    // Atlântico Estúdio
    if(i==6){numeroImagensApartamento = 5;}
    // Estúdio Copa
    if(i==7){numeroImagensApartamento = 5;}
    // Mar de Copa
    if(i==8){numeroImagensApartamento = 5;}
    // Mar de CopaII
    if(i==9){numeroImagensApartamento = 5;}
    // Copa Dream
    if(i==10){numeroImagensApartamento = 5;}
    // Sunset Estudio
    if(i==11){numeroImagensApartamento = 5;}
    // Sunset Premium
    if(i==12){numeroImagensApartamento = 5;}
}

function aplicarNumeroImagensApartamento(){
    for(let i=0; i<numeroImagensApartamento; i++){imagemApartamento.push (document.querySelector(`#mdImagemApartamento${i+1}`));}
}

let contadorImagemModal = 0;
const setaEFotosApartamento = document.querySelector("#mdSetaEFotosApartamento");
const setaDFotosApartamento = document.querySelector("#mdSetaDFotosApartamento");
const imagemApartamento = [];
aplicarNumeroImagensApartamento();

setaDFotosApartamento.onclick = function(){
    if (contadorImagemModal <4){contadorImagemModal ++; resetarPosicoesImagens(); mudarImagem();}};

setaEFotosApartamento.onclick = function(){
    if (contadorImagemModal <=4 && contadorImagemModal>0){contadorImagemModal --; resetarPosicoesImagens(); mudarImagem();}
    if(contadorImagemModal==0){resetarPosicoesImagens();}};

function resetarPosicoesImagens(){for(let i=0; i<=4; i++){imagemApartamento[i].className = `mdImagemApartamento${i+1}`;}}
function mudarImagem(){for(let i=0; i<=4; i++){imagemApartamento[i].classList.add(`mdMoverImg${contadorImagemModal}`);}}

// EFEITO DE AMPLIAÇÃO DA IMAGEM DA JANELA MODAL

const fundoImagemAmpliadaModal = document.querySelector("#fundoImagemAmpliadaModal");
const imagemAmpliadaModal = document.querySelector("#imagemAmpliadaModal");

for(let i=0; i<=imagemApartamento.length; i++){if(imagemApartamento[i] != undefined){imagemApartamento[i].onclick = function(){ampliarImagem(i);};}}

function ampliarImagem(numero){
    fundoImagemAmpliadaModal.classList.add("mostrarFundoImagemAmpliadaModal");
    imagemAmpliadaModal.className = imagemApartamento[numero].className;
    imagemAmpliadaModal.classList.add("imagemAmpliadaModal");
}

const fecharFundoImagem = document.querySelector("#fecharFundoImagem");
fecharFundoImagem.onclick = function(){fundoImagemAmpliadaModal.className = "fundoImagemAmpliadaModal";};