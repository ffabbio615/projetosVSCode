let ids = ["trTitulo", "trHorarioTopo", "trApartamentos", "trPagamentos", "trSobreNos", "trTituloSecao1", 
"trParagrafoSecao1", "trBotaoCTA"];
let dicionarioPortugues = [
    "Sunset Rio – Imoveis de temporada em Copacabana",
    "Seg - Sáb: 9:00 - 18:00",
    "APARTAMENTOS",
    "POLÍTICAS",
    "SOBRE NÓS",
    "Você já contemplou a vida hoje? Com a gente, isso é possível!",
    "Apartamentos limpos, com vista para o mar, a 100m da praia, próximo aos transportes mais utilizados e totalmente equipado para que sua experiência seja incrível.",
    "Reserve Agora"
];
let dicionarioIngles = [
    "Sunset Rio – Vacation rentals in Copacabana",
    "Mon - Sat: 9:00am - 18:00pm",
    "APARTMENTS",
    "POLITICS",
    "ABOUT US",
    "Have you contemplated life today? With us, this is possible!",
    "Clean apartments, overlooking the sea, 100m from the beach, close to the most used transports and fully equipped to make your experience incredible.",
    "Book Now"
];
const botaoPortugues = document.getElementById('botaoPortugues');
const botaoIngles = document.getElementById('botaoIngles');
botaoPortugues.onclick = function() {
    let alterarIdioma;
    for (let i=0; i<dicionarioPortugues.length; i++){
        alterarIdioma = document.getElementById(ids[i]);
        alterarIdioma.innerText = dicionarioPortugues[i];
    }
    return;
};

botaoIngles.onclick = function() {
    let alterarIdioma;
    for (let i=0; i<dicionarioIngles.length; i++){
        alterarIdioma = document.getElementById(ids[i]);
        alterarIdioma.innerText = dicionarioIngles[i];
    }
    return;
};

// ID's de Tradução
// trTitulo = Sunset Rio – Imoveis de temporada em Copacabana
// trHorarioTopo = Seg - Sáb: 9:00 - 18:00
// trApartamentos = APARTAMENTOS
// trPagamentos = POLÍTICAS
// trSobreNos = SOBRE NÓS
// trTituloSecao1 = Você já contemplou a vida hoje? Com a gente, isso é possível!
// trParagrafoSecao1 =  Apartamentos limpos, com vista para o mar, a 100m da praia, próximo aos transportes mais utilizados e totalmente equipado para que sua experiência seja incrível.
// trBotaoCTA = Reserve Agora

// SEGUNDA PÁGINA

// trTituloApartamentos = NOSSOS APARTAMENTOS
// trParagrafoApartamentos = Confira a seguir o que temos de melhor para sua estadia:
// trBotaoDetalhes1 = DETALHES
// trC1.1 = 
// trC1.2 = 
// trC1.3 = 
// trBotaoDetalhes2 = DETALHES
// trC2.1 = 
// trC2.2 = 
// trC2.3 =
// trBotaoDetalhes3 = DETALHES
// trC3.1 = 
// trC3.2 = 
// trC3.3 =
// trBotaoDetalhes4 = DETALHES
// trC4.1 = 
// trC4.2 = 
// trC4.3 =
// trBotaoDetalhes5 = DETALHES
// trC5.1 = 
// trC5.2 = 
// trC5.3 =
// trBotaoDetalhes6 = DETALHES
// trC6.1 = 
// trC6.2 = 
// trC6.3 =
// trBotaoDetalhes7 = DETALHES
// trC7.1 = 
// trC7.2 = 
// trC7.3 =
// trBotaoDetalhes8 = DETALHES
// trC8.1 = 
// trC8.2 = 
// trC8.3 =
// trBotaoDetalhes9 = DETALHES
// trC9.1 = 
// trC9.2 = 
// trC9.3 =
// trBotaoDetalhes10 = DETALHES
// trC10.1 = 
// trC10.2 = 
// trC10.3 =
// trBotaoDetalhes11 = DETALHES
// trC11.1 = 
// trC11.2 = 
// trC11.3 =
// trBotaoDetalhes12 = DETALHES
// trC12.1 = 
// trC12.2 = 
// trC12.3 =

// trTituloAvaliacoes = AVALIAÇÕES DE HÓSPEDES
// trParagrafoAvaliacoes = Confira a seguir o que nossos hóspedes acharam da experiência: