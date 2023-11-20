//RECEBE O TAMANHO INTERNO NO NAVEGADOR E ADICIONA A VARIÁVEL CSS
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


let idioma;
carregarIdiomaDaPagina();
function carregarIdiomaDaPagina(){
    idioma = JSON.parse(localStorage.getItem('idioma'));
    if(idioma == null){idioma = 1;}
}


//REDIRECIONA PARA O TOPO, CASO AS INFORMAÇÕES DOS APARTAMENTOS ESTEJAM VAZIAS E A PÁGINA RETORNE POR LINK EXTERNO
if(document.location.href.includes ("modalApartamento")){
if (document.querySelector("#trTituloModalApartamento").innerHTML==""){document.location.href = "#topo"}}



// FAZ PASSAR OS APARTAMENTOS NA LISTA DA SEÇÃO APARTAMENTOS
const setaEListaApartamento = document.querySelector("#setaEListaApartamento");
const setaDListaApartamento = document.querySelector("#setaDListaApartamento");
const listaApartamentos = document.querySelector("#listaApartamentos");
// setaDListaApartamento.onclick = function(){listaApartamentos.classList.add("listaApartamentosPos1")};
setaDListaApartamento.onclick = function(){listaApartamentos.scrollBy(window.innerWidth*0.301, 0);};
setaEListaApartamento.onclick = function(){listaApartamentos.scrollBy(-window.innerWidth*0.301, 0);};


//MODAL PAGAMENTOS
const btnRegrasDeHospedagem = document.querySelector("#regrasDeHospedagem")
const mdConteudoRegrasDeHospedagem = document.querySelector("#mdConteudoRegrasDeHospedagem");
const btnPagamentosECancelamentos = document.querySelector("#pagamentosECancelamentos");
const mdConteudoPagamentosECancelamentos = document.querySelector("#mdConteudoPagamentosECancelamentos");
const btnPoliticasDePrivacidade = document.querySelector("#politicasDePrivacidade");
const mdConteudoPoliticasDePrivacidade = document.querySelector("#mdConteudoPoliticasDePrivacidade");
const fecharModalPagamentos = document.querySelector("#btnFecharModalPagamentos");

btnRegrasDeHospedagem.onclick = function(){
    efeitoDesfocar();
    mdConteudoRegrasDeHospedagem.className = "mdConteudoRegrasDeHospedagem";
}

btnPagamentosECancelamentos.onclick = function(){
    efeitoDesfocar();
    mdConteudoPagamentosECancelamentos.className = "mdConteudoPagamentosECancelamentos";
}

btnPoliticasDePrivacidade.onclick = function(){
    efeitoDesfocar();
    mdConteudoPoliticasDePrivacidade.className = "mdConteudoPoliticasDePrivacidade";
}

fecharModalPagamentos.onclick = function(){
    efeitoFocar();
    mdConteudoRegrasDeHospedagem.className = "mdConteudoModalPagamentosInvisivel";
    mdConteudoPagamentosECancelamentos.className = "mdConteudoModalPagamentosInvisivel";
    mdConteudoPoliticasDePrivacidade.className = "mdConteudoModalPagamentosInvisivel";
}


// FAZ O EFEITO DE ABRIR A JANELA MODAL DOS APARTAMENTOS E DOS PAGAMENTOS

const abrirModalApartamentos = document.querySelector(".botaoDetalhes");
let efeitoBorrar;
const fecharModalApartamentos = document.querySelector("#btnFecharModalApartamento");
abrirModalApartamentos.onclick = function(){efeitoDesfocar();};

function efeitoDesfocar(){
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
}

fecharModalApartamentos.onclick = function(){efeitoFocar();};

function efeitoFocar(){
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
}

// CARREGA NA MODAL APARTAMENTO O NÚMERO DE IMAGENS QUE TEM NO APARTAMENTO E APLICA O EFEITO DE PASSAR PARA OS LADOS
let numeroImagensApartamento = 0;
let apartamentoSelecionado = "nenhum";
const quantidadeDeApartamentos = 12;
const botaoDetalhesApartamento = [];
for(let i=0; i<quantidadeDeApartamentos; i++){botaoDetalhesApartamento[i] = document.querySelector(`#trBotaoDetalhes${i+1}`);}

for (let i = 1; i <= quantidadeDeApartamentos; i++) {botaoDetalhesApartamento[i - 1].onclick = function () {selecaoDeApartamento(i);};}

function selecaoDeApartamento(i)
{
    // COPA LOFT
    if (i == 1) {inserirImagensDoApartamento("copaLoft",7);}
    // Estilo Sunset
    if (i == 2) {inserirImagensDoApartamento("estiloSunset",9);}
    // Atlântico Loft
    if (i == 3) {inserirImagensDoApartamento("atlanticoLoft",7);}
    // Sunset Garden
    if (i == 4) {inserirImagensDoApartamento("sunsetGarden",16);}
    // Copa Sunset
    if (i == 5) {inserirImagensDoApartamento("copaSunset",19);}
    // Atlântica Estúdio
    if (i == 6) {inserirImagensDoApartamento("atlanticaEstudio",7);}
    // Estúdio Copa
    if (i == 7) {inserirImagensDoApartamento("estudioCopa",10);}
    // Mar de Copa
    if (i == 8) {inserirImagensDoApartamento("marDeCopa",9);}
    // Mar de CopaII
    if (i == 9) {inserirImagensDoApartamento("marDeCopaII",20);}
    // Copa Dream
    if (i == 10) {inserirImagensDoApartamento("copaDream",14);}
    // Sunset Estudio
    if (i == 11) {inserirImagensDoApartamento("sunsetEstudio",12);}
    // Sunset Premium
    if (i == 12) {inserirImagensDoApartamento("sunsetPremium",11);}

    inserirTextoDoApartamento(i,idioma);
}

function inserirImagensDoApartamento(apSel,numImgAp){
    if (numeroImagensApartamento!=0){
        for(i=1; i<imagemApartamento.length; i++){
            imagemApartamento[imagemApartamento.length-i].className="";
            imagemApartamento.pop;
        }
    }
    apartamentoSelecionado = apSel;
    numeroImagensApartamento = numImgAp;
    aplicarNumeroImagensApartamento();
    aplicarEventoImagensModal()
    for(j=0; j<numeroImagensApartamento; j++){
        if(imagemApartamento[j] != undefined){
            imagemApartamento[j].className = `${apartamentoSelecionado}${j}`;
        }else return;
    }
}

function inserirTextoDoApartamento(i,idiomaAp)
{
    const tituloModalApartamento = document.querySelector("#trTituloModalApartamento");
    const subTituloModalApartamento = document.querySelector("#trSubTituloModalApartamento");
    const conteudoCamasModalApartamento = document.querySelector("#trConteudoCamasModalApartamento");
    const conteudoPessoasModalApartamento = document.querySelector("#trConteudoPessoasModalApartamento");
    const conteudoMetragemModalApartamento = document.querySelector("#trConteudoMetragemModalApartamento");
    const botaoCTAModalApartamento = document.querySelector("#trBotaoCTAModalApartamento");
    const botaoCTAMobileModalApartamento = document.querySelector("#trBotaoCTAMobileModalApartamento");
    const descricaoModalApartamento = document.querySelector("#trDescricaoModalApartamento");
    const facilidade1ModalApartamento = document.querySelector("#trFacilidade1ModalApartamento");
    const facilidade2ModalApartamento = document.querySelector("#trFacilidade2ModalApartamento");
    const facilidade3ModalApartamento = document.querySelector("#trFacilidade3ModalApartamento");
    const facilidade4ModalApartamento = document.querySelector("#trFacilidade4ModalApartamento");
    const facilidade5ModalApartamento = document.querySelector("#trFacilidade5ModalApartamento");
    const facilidade6ModalApartamento = document.querySelector("#trFacilidade6ModalApartamento");
    const facilidade7ModalApartamento = document.querySelector("#trFacilidade7ModalApartamento");
    const facilidade8ModalApartamento = document.querySelector("#trFacilidade8ModalApartamento");
    const facilidade9ModalApartamento = document.querySelector("#trFacilidade9ModalApartamento");
    const facilidade10ModalApartamento = document.querySelector("#trFacilidade10ModalApartamento");
    desativarMapasDeLocalizacao();
    let mapaLocalizacao;
    // COPA LOFT
    if (i == 1) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Copa Loft";
            subTituloModalApartamento.innerHTML = "Apartamento à beira mar";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 1 Solteiro + 1 Auxiliar";
            conteudoPessoasModalApartamento.innerHTML = "4 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "25m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/588235675505978964?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924216_BZOKqVXzh4kfVq4r";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/588235675505978964?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924216_BZOKqVXzh4kfVq4r";
            descricaoModalApartamento.innerHTML = "Copa Loft é um apartamento de aproximadamente 28m², que acomoda até 4 pessoas, localizado a beira mar, e com vista para a rua de trás da praia. O apartamento possui 1 cama queen e 1 cama de solteiro com cama auxiliar, já para a refrigeração, tem ar condicionado no quarto e ventilador na sala. Possui também uma pequena cozinha, equipada com utensílios para cozinhar, mesa com cadeiras, geladeira, fogão, microondas, banheiro com chuveiro elétrico, TV e wifi.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#avAtlantica3806");
        }
        else{
            tituloModalApartamento.innerHTML = "Copa Loft";
            subTituloModalApartamento.innerHTML = "Apartment by the sea";
            conteudoCamasModalApartamento.innerHTML = "1 Double + 1 Single + 1 Auxiliary";
            conteudoPessoasModalApartamento.innerHTML = "4 People";
            conteudoMetragemModalApartamento.innerHTML = "25m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/588235675505978964?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924216_BZOKqVXzh4kfVq4r";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/588235675505978964?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924216_BZOKqVXzh4kfVq4r";
            descricaoModalApartamento.innerHTML = "Copa Loft is an apartment of approximately 28m², which sleeps up to 4 people, located by the sea, and overlooking the back street of the beach. The apartment has 1 queen bed and 1 single bed with an auxiliary bed, for cooling, it has air conditioning in the bedroom and a fan in the living room. It also has a small kitchen, equipped with cooking utensils, table with chairs, refrigerator, stove, microwave, bathroom with electric shower, TV and wifi.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AIR CONDITIONING";
            facilidade3ModalApartamento.innerHTML = "FAN";
            facilidade4ModalApartamento.innerHTML = "TOWELS";
            facilidade5ModalApartamento.innerHTML = "BEDDING";
            facilidade6ModalApartamento.innerHTML = "GAMES";
            facilidade7ModalApartamento.innerHTML = "IRON";
            facilidade8ModalApartamento.innerHTML = "HAIRDRYER";
            facilidade9ModalApartamento.innerHTML = "SOAP";
            facilidade10ModalApartamento.innerHTML = "FIRST AID KIT";
            mapaLocalizacao = document.querySelector("#avAtlantica3806");
        }
    }
    // Estilo Sunset
    if (i == 2) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Estilo Sunset";
            subTituloModalApartamento.innerHTML = "Apartamento a 1 quadra da praia";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 1 Solteiro + 1 Auxiliar";
            conteudoPessoasModalApartamento.innerHTML = "4 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "30m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/754926310130497309?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924219_Et4HGI%2FlAlf9GLvD";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/754926310130497309?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924219_Et4HGI%2FlAlf9GLvD";
            descricaoModalApartamento.innerHTML = "O Estilo Sunset é um apartamento localizado no Posto 6 da praia de Copacabana, a menos de 5 min de caminhada até a praia. É possível acomodar até 4 pessoas, com 1 cama queen no quarto, e 1 cama de solteiro com cama auxiliar, na sala. Para refrigeração, tem ar condicionado no quarto, e ventilador de teto nos dois ambientes. O apartamento também possui chuveiro elétrico e uma pequena cozinha equipada com utensílios básicos para cozinhar.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#julioDeCastilhos35");
        }
        else{

        }
    }
    // Atlântico Loft
    if (i == 3) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Atlântico Loft";
            subTituloModalApartamento.innerHTML = "Apartamento à beira mar";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 1 Solteiro";
            conteudoPessoasModalApartamento.innerHTML = "3 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "20m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/728213534370751794?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924220_oiZH5NLTfWxYZWgX";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/728213534370751794?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924220_oiZH5NLTfWxYZWgX";
            descricaoModalApartamento.innerHTML = "O Atlântico loft está localizado na Av. Atlântica, na altura do Posto 6 da praia de Copacabana. O apartamento possui cerca de 20m² e acomoda até 3 pessoas, com 1 cama de casal e 1 cama de solteiro, acomodados no mesmo ambiente,que possui ar condicionado e ventilador de teto. O apartamento possui uma pequena cozinha equipada com utensílios básicos para cozinhar, mesa com cadeiras, geladeira, fogão, microondas. chuveiro elétrico, TV e wifi. O apt tem vista para os fundos do prédio.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#avAtlantica3806");
        }
        else{

        }
    }
    // Sunset Garden
    if (i == 4) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Sunset Garden";
            subTituloModalApartamento.innerHTML = "Sunset Garden - 2 quartos a 2 quadras da praia";
            conteudoCamasModalApartamento.innerHTML = "4 camas + 1 colchonete";
            conteudoPessoasModalApartamento.innerHTML = "6 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "50m²";
            botaoCTAModalApartamento.href = "";
            botaoCTAMobileModalApartamento.href = "";
            descricaoModalApartamento.innerHTML = "O Sunset Garden é um apartamento de 2 quartos, com uma pequena área externa, que está localizado a 2 quadras na quadra do metrô, na rua Sá Ferreira 120. O apt acomoda 6 pessoas, sendo 1 quarto com cama de casal, 1 quarto com cama de solteiro e cama auxiliar, e uma cama de viúva com um colchonete adicional, na sala. Para refrigeração, os cômodos possuem ventiladores. O apartamento possui WIFI e Smartv de 32″. A cozinha é americana, integrada à sala e equipada com utensílios básicos para cozinhar.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#saFerreira120");
        }
        else{

        }
    }
    // Copa Sunset
    if (i == 5) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Copa Sunset";
            subTituloModalApartamento.innerHTML = "Apartamento 2 quartos - 100m da praia";
            conteudoCamasModalApartamento.innerHTML = "1 Queen + 1 Casal + 1 Solteiro";
            conteudoPessoasModalApartamento.innerHTML = "5 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "50m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/616750919218978429?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924223_Yerwpf%2FFkOALYdgU";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/616750919218978429?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924223_Yerwpf%2FFkOALYdgU";
            descricaoModalApartamento.innerHTML = "Venhar aproveitar sua estadia no RJ no Copa Sunset! Ele é um apartamento espaçoso, no Posto 6, na rua atrás da praia, entre Copacabana e Ipanema. São 2 quartos, sendo 1 deles suíte com cama Queen e espaço para home office. No outro quarto temos 1 cama de casal e 1 de solteiro, acomodando o total de 5 pessoas no apartamento. Ambos os quartos tem ar condicionado e ventilador de teto. A cozinha é ampla e equipada com utensílios básicos para cozinhar. Oferecemos roupa de cama, toalhas e wifi.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#nossaSenhora1292");
        }
        else{

        }
    }
    // Atlântica Estúdio
    if (i == 6) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Atlântica Estúdio";
            subTituloModalApartamento.innerHTML = "Apartamento com vista para o mar";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 2 Solteiro + 1 Auxiliar";
            conteudoPessoasModalApartamento.innerHTML = "5 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "30m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/561718484482770817?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924225_t2mMHxwDsZUiR6Hd";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/561718484482770817?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924225_t2mMHxwDsZUiR6Hd";
            descricaoModalApartamento.innerHTML = "O Atlântica Estudio é um apartamento completo que acomoda até 5 pessoas, sendo 1 cama de casal no quarto, e 2 camas de solteiro com uma cama auxiliar na sala. O apartamento está equipado com: utensílios para cozinhar, geladeira, fogão, pratos, copos, TV com canais abertos, ar condicionado split no quarto e ventiladores de teto no quarto e na sala. Wifi de 100Mbps. Disponibilizamos também, roupa de cama e toalhas. A localização é entre os Postos 5 e 6.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#avAtlantica3806");
        }
        else{

        }
    }
    // Estúdio Copa
    if (i == 7) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Estúdio Copa";
            subTituloModalApartamento.innerHTML = "Apartamento à beira mar - Posto 6";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 1 Solteiro + 1 Auxiliar";
            conteudoPessoasModalApartamento.innerHTML = "4 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "25m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/571546796050403948?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924227_F7%2F8ovCp037vH9zA";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/571546796050403948?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924227_F7%2F8ovCp037vH9zA";
            descricaoModalApartamento.innerHTML = "Aproveite com sua família e amigos no Estúdio Copa! O apartamento possui 25m² e acomoda até 4 pessoas sendo de: 1 cama de casal e 1 cama de solteiro com 1 cama auxiliar, acomodados no mesmo ambiente, que é refrigerado com ar condicionado e ventilador de teto. O apartamento também possui uma pequena cozinha equipada com utensílios para cozinhar, mesa com banquinhos, geladeira, fogão. Banheiro com chuveiro elétrico. Tv smart e wifi. A localização e a beira mar mas com vista para os fundos do prédio";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#avAtlantica3806");
        }
        else{

        }
    }
    // Mar de Copa
    if (i == 8) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Mar de Copa";
            subTituloModalApartamento.innerHTML = "Apartamento com vista para o mar";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 2 Solteiro + 1 Auxiliar"
            conteudoPessoasModalApartamento.innerHTML = "5 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "30m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/51299204?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924228_CKWrPBSMaWf1f2Tj";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/51299204?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924228_CKWrPBSMaWf1f2Tj";
            descricaoModalApartamento.innerHTML = "O Mar de Copa é um excelente apartamento que acomoda até 5 pessoas, sendo 1 cama de casal, 2 camas de solteiro e 1 cama auxiliar. O apartamento está equipado com: utensílios para cozinhar, geladeira, fogão, pratos, copos, TV com canais abertos, wifi, ar condicionado. A localização é excelente, Posto 6, na divisa entre Copacabana e Ipanema! Dá para ver o nascer do sol na janela, e caminhar alguns minutos até Ipanema para ver o por do sol. Disponibilizamos também, roupa de cama e toalhas.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#avAtlantica3806");
        }
        else{

        }
    }
    // Mar de CopaII
    if (i == 9) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Mar de Copa II";
            subTituloModalApartamento.innerHTML = "Apartamento com vista para o mar";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 2 Solteiro + 1 Auxiliar";
            conteudoPessoasModalApartamento.innerHTML = "5 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "30m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/51534616?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924230_135kOtL1TUjTMdaX";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/51534616?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924230_135kOtL1TUjTMdaX";
            descricaoModalApartamento.innerHTML = "O Mar de Copa II é um excelente apartamento que acomoda até 5 pessoas, sendo 1 cama de casal, e 2 camas de solteiro + 1 auxiliar na sala. O apartamento está equipado com: utensílios para cozinhar, geladeira, fogão, pratos, copos, TV com canais abertos, wifi, ar condicionado. A localização é excelente, Posto 6, na divisa entre Copacabana e Ipanema! Dá para ver o nascer do sol na janela, e caminhar alguns minutos até Ipanema para ver o por do sol. Disponibilizamos também, roupa de cama e toalhas.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#avAtlantica3806");
        }
        else{

        }
    }
    // Copa Dream
    if (i == 10) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Copa Dream";
            subTituloModalApartamento.innerHTML = "Apartamento com vista para o mar";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 2 Solteiro + 1 Auxiliar";
            conteudoPessoasModalApartamento.innerHTML = "5 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "30m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/54045886?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924231_iAhu9k3l2PxMpiTY";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/54045886?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924231_iAhu9k3l2PxMpiTY";
            descricaoModalApartamento.innerHTML = "O Copa Dream é um apartamento completo que acomoda até 5 pessoas, sendo 1 cama de casal e 1 cama de solteiro com cama auxiliar. O apartamento está equipado com: utensílios para cozinhar, frigobar, fogão, pratos, copos, TV com canais abertos, ar condicionado no quarto e ventiladores de teto no quarto e na sala. Disponibilizamos também, roupa de cama e toalhas. A localização é no Posto 6. Obs.: Os itens e decorações mostrados nas fotos, podem sofrer alterações sem aviso prévio.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#avAtlantica3806");
        }
        else{

        }
    }
    // Sunset Estudio
    if (i == 11) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Sunset Estúdio";
            subTituloModalApartamento.innerHTML = "2 quadras da praia e ao lado metrô";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 1 Solteiro";
            conteudoPessoasModalApartamento.innerHTML = "3 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "25m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/53201638?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924182_ZXly8tom4NALxpW3";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/53201638?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924182_ZXly8tom4NALxpW3";
            descricaoModalApartamento.innerHTML = "Relaxe com sua família e amigos no Sunset Estúdio! O apartamento é super aconchegante e possui cerca de 23m² e acomodando até 3 pessoas. Para acomodar todos os hóspedes, o apartamento dispõe de: 1 cama de casal e 1 cama de solteiro acomodados no mesmo ambiente, que é refrigerado com ar condicionado e ventilador de teto. Uma Pequena cozinha equipada com utensílios básicos para cozinhar, além de sanduicheira, filtro para café, microondas, mesa com banquinhos e frigobar. Banheiro com chuveiro elétrico. A tv tem canais à cabo básico, e você poderá usar sua conta pessoal para assistir netflix, prime vídeo, entre outros. A internet é disponibilizada via wifi com velocidade de 250 Mbps. A localização é na Rua Sá Ferreira, em um prédio tranquilo e residencial, a cerca de 150m da saída D do metrô de General Osório, e cerca de 350m da praia de Copacabana (2 quadras), fica pertinho também, de Ipanema e do Arpoador, além de amplo comércio, bares, restaurantes, supermercados, drogarias e transportes públicos na região.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#saFerreira138");
        }
        else{

        }
    }
    // Sunset Premium
    if (i == 12) {
        if (idiomaAp == 1){
            tituloModalApartamento.innerHTML = "Sunset Premium";
            subTituloModalApartamento.innerHTML = "Apartamento com vista lateral para o mar.";
            conteudoCamasModalApartamento.innerHTML = "1 Casal + 1 Solteiro + 1 Auxiliar";
            conteudoPessoasModalApartamento.innerHTML = "4 Pessoas";
            conteudoMetragemModalApartamento.innerHTML = "30m²";
            botaoCTAModalApartamento.href = "https://www.airbnb.com.br/rooms/588270988006710859?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924184_0P33aFwhFlapqjrH";
            botaoCTAMobileModalApartamento.href = "https://www.airbnb.com.br/rooms/588270988006710859?_set_bev_on_new_domain=1685924216_MjE4ODNlYzNhYWMx&source_impression_id=p3_1685924184_0P33aFwhFlapqjrH";
            descricaoModalApartamento.innerHTML = "Aproveite para relaxar no Sunset Premium, um apartamento completo na quadra da praia e vista lateral para o mar, localizado entre o Posto 5 e 6 da praia de Copacabana. O apartamento acomoda até 4 pessoas, sendo 1 cama de casal e 1 cama de solteiro com auxiliar, acomodados no mesmo ambiente, refrigerado por ventilador de teto e ar condicionado split. Possui também, cozinha equipada com fogão, frigobar, microondas e utensílios básicos para que possa preparar refeições durante sua estadia. O apartamento possui smartv de 32″ e tv a cabo com canais básicos, além de wifi de 240Mbps. Oferecemos roupa de cama e toalhas sem custos adicionais para nossos hóspedes. Obs.: Os itens e decorações mostrados nas fotos, podem sofrer alterações sem aviso prévio.";
            facilidade1ModalApartamento.innerHTML = "WIFI";
            facilidade2ModalApartamento.innerHTML = "AR CONDICIONADO";
            facilidade3ModalApartamento.innerHTML = "VENTILADOR";
            facilidade4ModalApartamento.innerHTML = "TOALHAS";
            facilidade5ModalApartamento.innerHTML = "ROUPA DE CAMA";
            facilidade6ModalApartamento.innerHTML = "JOGOS";
            facilidade7ModalApartamento.innerHTML = "FERRO DE PASSAR";
            facilidade8ModalApartamento.innerHTML = "SECADOR DE CABELO";
            facilidade9ModalApartamento.innerHTML = "SABONETE";
            facilidade10ModalApartamento.innerHTML = "KIT DE PRIMEIROS SOCORROS";
            mapaLocalizacao = document.querySelector("#souzaLima37");
        }
        else{

        }
    }
    mapaLocalizacao.className = ""
}

function desativarMapasDeLocalizacao(){
    const mapas = ["avAtlantica3806", "julioDeCastilhos35", "saFerreira120", "saFerreira138", "nossaSenhora1292", "souzaLima37"];
    for(i=0; i<mapas.length; i++){document.querySelector(`#${mapas[i]}`).className = "mdMapaInvisivel"}
}

let contadorImagemModal = 1;
const setaEFotosApartamento = document.querySelector("#mdSetaEFotosApartamento");
const setaDFotosApartamento = document.querySelector("#mdSetaDFotosApartamento");
const imagemApartamento = [];

function aplicarNumeroImagensApartamento(){
    for(let i=1; i<=numeroImagensApartamento; i++){imagemApartamento[i-1] = document.querySelector(`#mdImagemApartamento${i}`);} 
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




//EXTRAS

//LINKS PARA CARREGAR DIRETAMENTE IMAGENS E TEXTOS DOS APARTAMENTOS
const linkApartamento = document.location.href;
// 1-COPA LOFT | 2-Estilo Sunset | 3-Atlântico Loft | 4-Sunset Garden | 5-Copa Sunset | 6-Atlântica Estúdio
// 7-Estúdio Copa | 8-Mar de Copa | 9-Mar de CopaII | 10-Copa Dream | 11-Sunset Estudio | 12-Sunset Premium
// Para aplcar, enviar link como por exemplo: SunsetRioRental/index.html#apCopaLoft
if (linkApartamento.includes("apCopaLoft")){aplicarLinkApartamento(1);}
if (linkApartamento.includes("apEstiloSunset")){aplicarLinkApartamento(2);}
if (linkApartamento.includes("apAtlanticoLoft")){aplicarLinkApartamento(3);}
if (linkApartamento.includes("apSunsetGarden")){aplicarLinkApartamento(4);}
if (linkApartamento.includes("apCopaSunset")){aplicarLinkApartamento(5);}
if (linkApartamento.includes("apAtlanticaEstudio")){aplicarLinkApartamento(6);}
if (linkApartamento.includes("apEstudioCopa")){aplicarLinkApartamento(7);}
if (linkApartamento.includes("apMarDeCopa")){aplicarLinkApartamento(8);}
if (linkApartamento.includes("apMarDeCopaII")){aplicarLinkApartamento(9);}
if (linkApartamento.includes("apCopaDream")){aplicarLinkApartamento(10);}
if (linkApartamento.includes("apSunsetEstudio")){aplicarLinkApartamento(11);}
if (linkApartamento.includes("apSunsetPremium")){aplicarLinkApartamento(12);}

function aplicarLinkApartamento(numeroLink){
    efeitoDesfocar();
    document.location.href = "#modalApartamento";
    selecaoDeApartamento(numeroLink);
}
