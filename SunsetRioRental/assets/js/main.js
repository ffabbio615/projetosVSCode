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


// FAZ PASSAR OS APARTAMENTOS NA LISTA DA SEÇÃO APARTAMENTOS
const setaEListaApartamento = document.querySelector("#setaEListaApartamento");
const setaDListaApartamento = document.querySelector("#setaDListaApartamento");
const listaApartamentos = document.querySelector("#listaApartamentos");
// setaDListaApartamento.onclick = function(){listaApartamentos.classList.add("listaApartamentosPos1")};
setaDListaApartamento.onclick = function(){listaApartamentos.scrollBy(window.innerWidth*0.301, 0);};
setaEListaApartamento.onclick = function(){listaApartamentos.scrollBy(-window.innerWidth*0.301, 0);};


// FAZ O EFEITO DE ABRIR A JANELA MODAL DOS APARTAMENTOS

const abrirModalApartamentos = document.querySelector(".botaoDetalhes");
let efeitoBorrar;
const fecharModalApartamentos = document.querySelector("#btnFecharModalApartamento");
abrirModalApartamentos.onclick = function(){
    efeitoBorrar = document.querySelector("#topo");
    efeitoBorrar.className = "topo blurModal";
    efeitoBorrar = document.querySelector("#secaoInicial");
    efeitoBorrar.className = "secaoInicial blurModal";
    efeitoBorrar = document.querySelector("#secaoApartamentos");
    efeitoBorrar.className = "secaoApartamentos blurModal";
    efeitoBorrar = document.querySelector("#secaoSobreNos");
    efeitoBorrar.className = "secaoSobreNos blurModal";
    efeitoBorrar = document.querySelector("#secaoFaq");
    efeitoBorrar.className = "secaoFaq blurModal";
    efeitoBorrar = document.querySelector("#rodape");
    efeitoBorrar.className = "rodape blurModal";
};

fecharModalApartamentos.onclick = function(){
    efeitoBorrar = document.querySelector("#secaoApartamentos")
    efeitoBorrar = document.querySelector("#topo");
    efeitoBorrar.className = "topo";
    efeitoBorrar = document.querySelector("#secaoInicial");
    efeitoBorrar.className = "secaoInicial";
    efeitoBorrar = document.querySelector("#secaoApartamentos");
    efeitoBorrar.className = "secaoApartamentos";
    efeitoBorrar = document.querySelector("#secaoSobreNos");
    efeitoBorrar.className = "secaoSobreNos";
    efeitoBorrar = document.querySelector("#secaoFaq");
    efeitoBorrar.className = "secaoFaq";
    efeitoBorrar = document.querySelector("#rodape");
    efeitoBorrar.className = "rodape";
};


// CARREGA NA MODAL APARTAMENTO O NÚMERO DE IMAGENS QUE TEM NO APARTAMENTO E APLICA O EFEITO DE PASSAR PARA OS LADOS
let numeroImagensApartamento = 6;
let apartamentoSelecionado = "nenhum";
const quantidadeDeApartamentos = 12;
const botaoDetalhesApartamento = [];
for(let i=0; i<quantidadeDeApartamentos; i++){botaoDetalhesApartamento[i] = document.querySelector(`#trBotaoDetalhes${i+1}`);}

for (let i = 1; i <= quantidadeDeApartamentos; i++) {botaoDetalhesApartamento[i - 1].onclick = function () {selecaoDeApartamento(i);};}

function selecaoDeApartamento(i)
{
    // COPA LOFT
    if (i-1 == 0) { apartamentoSelecionado = "copaLoft"; numeroImagensApartamento = 7; aplicarNumeroImagensApartamento(); aplicarEventoImagensModal()
    for(j=0; j<numeroImagensApartamento; j++){if(imagemApartamento[j] != undefined){imagemApartamento[j].className = `copaLoft${j}`;}else return;}}
    // Estilo Sunset
    if (i-1 == 1) { numeroImagensApartamento = 5; }
    // Atlântico Loft
    if (i-1 == 2) { numeroImagensApartamento = 5; }
    // Sunset Garden
    if (i-1 == 3) { numeroImagensApartamento = 5; }
    // Copa Sunset
    if (i-1 == 4) { numeroImagensApartamento = 5; }
    // Atlântico Estúdio
    if (i-1 == 5) { numeroImagensApartamento = 5; }
    // Estúdio Copa
    if (i-1 == 6) { numeroImagensApartamento = 5; }
    // Mar de Copa
    if (i-1 == 7) { numeroImagensApartamento = 5; }
    // Mar de CopaII
    if (i-1 == 8) { numeroImagensApartamento = 5; }
    // Copa Dream
    if (i-1 == 9) { numeroImagensApartamento = 5; }
    // Sunset Estudio
    if (i-1 == 10) { numeroImagensApartamento = 5; }
    // Sunset Premium
    if (i-1 == 11) { numeroImagensApartamento = 5; }
}

let contadorImagemModal = 1;
const setaEFotosApartamento = document.querySelector("#mdSetaEFotosApartamento");
const setaDFotosApartamento = document.querySelector("#mdSetaDFotosApartamento");
const imagemApartamento = [];

function aplicarNumeroImagensApartamento(){
    for(let i=1; i<=numeroImagensApartamento; i++){imagemApartamento.push (document.querySelector(`#mdImagemApartamento${i}`));} 
    contadorImagemModal = 1; resetarPosicoesImagens(); mudarImagem();
}

setaDFotosApartamento.onclick = function(){
    if (contadorImagemModal <numeroImagensApartamento){contadorImagemModal ++; resetarPosicoesImagens(); mudarImagem();}};

setaEFotosApartamento.onclick = function(){
    if (contadorImagemModal <=numeroImagensApartamento && contadorImagemModal>1){contadorImagemModal --; resetarPosicoesImagens(); mudarImagem();}
    if(contadorImagemModal==1){resetarPosicoesImagens();}};

function resetarPosicoesImagens(){for(let i=0; i<numeroImagensApartamento; i++){imagemApartamento[i].className = `${apartamentoSelecionado}${i}`;}}
function mudarImagem(){for(let i=0; i<numeroImagensApartamento; i++){imagemApartamento[i].classList.add(`mdMoverImg${contadorImagemModal-1}`);}}

// EFEITO DE AMPLIAÇÃO DA IMAGEM DA JANELA MODAL

const fundoImagemAmpliadaModal = document.querySelector("#fundoImagemAmpliadaModal");
const imagemAmpliadaModal = document.querySelector("#imagemAmpliadaModal");

function aplicarEventoImagensModal(){
    for(let i=0; i<=imagemApartamento.length; i++){if(imagemApartamento[i] != undefined){imagemApartamento[i].onclick = function(){ampliarImagem(i);};}}
}

function ampliarImagem(numero){
    fundoImagemAmpliadaModal.classList.add("mostrarFundoImagemAmpliadaModal");
    imagemAmpliadaModal.className = imagemApartamento[numero].className;
    imagemAmpliadaModal.classList.add("imagemAmpliadaModal");
}

const fecharFundoImagem = document.querySelector("#fecharFundoImagem");
fecharFundoImagem.onclick = function(){fundoImagemAmpliadaModal.className = "fundoImagemAmpliadaModal";};


const faq = [];
let numeroPerguntaFaq = 0;
for(let i=1; i<=12; i++){
    faq[i-1] = document.querySelector(`#trFaq${i}`);
    if(i==12){adicionarEventoFaq();}
}

function adicionarEventoFaq() {
    for (let j = 0; j < 12; j++) {
        faq[j].onclick = function () {
            const respostaFaq = document.querySelector("#respostaFaq");
            if (respostaFaq != null) {
                respostaFaq.className = "limparRespostaFaq";
                setTimeout(() => respostaFaq.parentNode.removeChild(respostaFaq), 100);
            }
            if (numeroPerguntaFaq != j + 1) {
                numeroPerguntaFaq = j + 1;
                const elementoRespostaFaq = document.createElement('p');
                elementoRespostaFaq.setAttribute('id', 'respostaFaq');
                const textoResposta = selecionarRepostaFaq(j + 1);
                faq[j].parentNode.insertBefore(elementoRespostaFaq, faq[j].nextSibling);
                elementoRespostaFaq.innerHTML = textoResposta;
                setTimeout(() => elementoRespostaFaq.classList.add("respostaFaq"), 1);
            }
            else{numeroPerguntaFaq = 0;}
        }
    }
}

function limparRespostaFaq(elementoFaq){elementoFaq.innerHTML = '';}
function selecionarRepostaFaq(resposta){
    if(resposta ==1){return "Não oferecemos café da manhã, mas todos os apartamentos estão equipados com itens básicos para preparar refeições.";}
    if(resposta ==2){return "É a taxa de serviço para na modalidade de aluguel de temporada. Essa taxa auxilia nas despesas com lavanderia, energia, limpeza, entre outros. Não significa limpeza diária no apartamento.";}
    if(resposta ==3){return "Não. Nenhum dos prédios possuem garagem. Nas ruas ao redor, existem vagas da prefeitura e estacionamentos particulares.";}
    if(resposta ==4){return "Não. Durante a estadia, o apartamento fica disponível apenas para o hóspede.";}
    if(resposta ==5){return "A capacidade do apartamento não pode ser excedida. Ou seja, se o apartamento acomoda 5 pessoas e a reserva foi feita para 2 pessoas, o hóspede poderá receber até 3 pessoas. As visitas deverão ser informadas previamente. A capacidade do apartamento pode ser verificado através do site, ou através de mensagens para o nosso whatsapp, ou email. <br> Obs.: Alguns condomínios não permitem visitas, confirme antes conosco.";}
    if(resposta ==6){return "Na maioria dos apartamentos, sim. Porém, em alguns não é permitido pelo condomínio. Nos envie uma mensagem para confirmar.";}
    if(resposta ==7){return "O horário padrão de check in é 14h, e de check out 12h. Flexibilizações de horário são feitas mediante disponibilidade do apartamento e taxas poderão ser aplicadas.";}
    if(resposta ==8){return "Não. É proibido festas e eventos em qualquer um de nossos apartamentos.";}
    if(resposta ==9){return "Sim. Disponibilizamos roupa de cama e toalhas para todos os hóspedes.";}
    if(resposta ==10){return "Um dia antes da chegada, entramos em contato para combinar a entrega das chaves. Tem um cofre de chaves ao lado da porta, que possibilita o self check in.";}
    if(resposta ==11){return "Sim, disponibilizamos secador de cabelo.";}
    if(resposta ==12){return "Sim, disponibilizamos ferro de passar roupas.";}
}