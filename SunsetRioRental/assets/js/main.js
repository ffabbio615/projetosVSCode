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

// FAZ O EFEITO DE ABRIR A JANELA MODAL DOS APARTAMENTOS
let borrar = document.querySelector("#trBotaoCTA");
const fecharModal = document.querySelector("#btnFecharModalApartamento");
borrar.onclick = function(){
    borrar = document.querySelector("#secaoInicial")
    borrar.className = "secaoInicial blurModal";
};

fecharModal.onclick = function(){
    borrar = document.querySelector("#secaoInicial")
    borrar.className = "secaoInicial";
};

let contadorImagemModal = 0;
let numeroImagensApartamento = 5;
const setaEFotosApartamento = document.querySelector("#mdSetaEFotosApartamento");
const setaDFotosApartamento = document.querySelector("#mdSetaDFotosApartamento");
const imagemApartamento = [];
aplicarNumeroImagensApartamento();

function aplicarNumeroImagensApartamento(){
for(let i=0; i<numeroImagensApartamento; i++){imagemApartamento.push (document.querySelector(`#mdImagemApartamento${i+1}`));}
}

setaDFotosApartamento.onclick = function(){
    if (contadorImagemModal <4){contadorImagemModal ++; resetarPosicoesImagens(); mudarImagem();}};

setaEFotosApartamento.onclick = function(){
    if (contadorImagemModal <=4 && contadorImagemModal>0){contadorImagemModal --; resetarPosicoesImagens(); mudarImagem();}
    if(contadorImagemModal==0){resetarPosicoesImagens();}};

function resetarPosicoesImagens(){for(let i=0; i<=4; i++){imagemApartamento[i].className = `mdImagemApartamento${i+1}`;}}
function mudarImagem(){for(let i=0; i<=4; i++){imagemApartamento[i].classList.add(`mdMoverImg${contadorImagemModal}`);}}