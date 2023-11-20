
const dataAtual = new Date();
document.querySelector("#trParagrafoCopyright").innerHTML = `© ${dataAtual.getFullYear()} - Todos os direitos reservados. Desenvolvido por Fábio Marques.`;
const ids = [

//PRIMEIRA PÁGINA

"trTitulo", "trHorarioTopo", "trApartamentos", "trPagamentos", "trSobreNos", "trTituloSecao1", "trParagrafoSecao1", "trBotaoCTA", 


// SEGUNDA PÁGINA

"trTituloApartamentos","trParagrafoApartamentos","trBotaoDetalhes1","trC1.1","trC1.2","trC1.3","trBotaoDetalhes2","trC2.1","trC2.2","trC2.3",
"trBotaoDetalhes3","trC3.1","trC3.2","trC3.3","trBotaoDetalhes4","trC4.1","trC4.2","trC4.3","trBotaoDetalhes5","trC5.1","trC5.2","trC5.3",
"trBotaoDetalhes6","trC6.1","trC6.2","trC6.3","trBotaoDetalhes7","trC7.1","trC7.2","trC7.3","trBotaoDetalhes8","trC8.1","trC8.2","trC8.3",
"trBotaoDetalhes9","trC9.1","trC9.2","trC9.3","trBotaoDetalhes10","trC10.1","trC10.2","trC10.3","trBotaoDetalhes11","trC11.1","trC11.2",
"trC11.3","trBotaoDetalhes12","trC12.1","trC12.2","trC12.3","trBotaoCTA2",

// TERCEIRA PÁGINA

"trTituloAvaliacoes","trParagrafoAvaliacoes","trAvaliacaolinha1.1","trAvaliacaolinha1.2","trAvaliacaolinha2.1","trAvaliacaolinha2.2","trTituloPoliticas",
"trTituloRegrasDeHospedagem","trParagrafoRegrasDeHospedagem","trTituloPagamentosCancelamentos","trParagrafoPagamentosCancelamentos",
"trTituloPoliticaPrivacidade","trParagrafoPoliticaPrivacidade",

// QUARTA PÁGINA

"trTituloSobreNos","trParagrafoSobreNos","trTituloMissao","trDescricaoMissao","trTituloVisao","trDescricaoVisao","trTituloValores","trDescricaoValores",
"trParagrafoValeriaGomes","trTituloSobreValerias","trParagrafoSobreValerias","trParagrafoValeriaLima",


// QUINTA PÁGINA

"trTituloFaq","trParagrafoFaq","trFaq1","trFaq2","trFaq3","trFaq4","trFaq5","trFaq6","trFaq7","trFaq8","trFaq9","trFaq10","trFaq11", "trFaq12","trBotaoCTA3",


// RODAPÉ

"trParagrafoCopyright",

// LINKS MENU MOBILE
"trApartamentosMobile", "trPagamentosMobile", "trSobreNosMobile", "trHorarioMobile",

// MODAL APARTAMENTOS

"trBotaoCTAModalApartamento", "trBotaoCTAMobileModalApartamento", "trTituloDescricaoModalApartamento", "trFacilidadesModalApartamento", "trLocalizacaoModalApartamento"

];


const dicionarioPortugues = [

//PRIMEIRA PÁGINA

"Sunset Rio – Imoveis de temporada em Copacabana",
"Seg - Sab: 9:00 - 18:00",
"APARTAMENTOS",
"POLÍTICAS",
"SOBRE NÓS",
"Você já contemplou a vida hoje? Com a gente, isso é possível!",
"Apartamentos limpos, com vista para o mar, a 100m da praia, próximo aos transportes mais utilizados e totalmente equipado para que sua experiência seja incrível.",
"Reserve Agora",

    
// SEGUNDA PÁGINA

"NOSSOS APARTAMENTOS",
"Confira a seguir o que temos de melhor para sua estadia:",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"DETALHES",
"",
"",
"",
"Reserve Agora",


// TERCEIRA PÁGINA

"AVALIAÇÕES DE HÓSPEDES",
"Confira a seguir o que nossos hóspedes acharam da experiência:",
'"...Excelente experiência, cumpriram com o anúncio, tudo que foi oferecido foi entregue. Anfitriã muito atenciosa e solícita."',
"abril 2023",
'"...Experiência incrível, apartamento limpo e aconchegante, com uma vista espetacular de Copacabana! A anfitriã super atenciosa, e receptiva!"',
"abril 2023",
"POLÍTICAS",
"REGRAS DE HOSPEDAGEM",
"Nossas regras de hospedagem foram definidas para garantir a qualidade de sua estadia.",
"PAGAMENTOS E CANCELAMENTOS",
"Leia nossa política de pagamentos e cancelamentos.",
"POLÍTICA DE PRIVACIDADE",
"Leia a nossa política de privacidade e veja de que forma utilizamos os seus dados.",

// QUARTA PÁGINA

"SOBRE A SUNSET RIO",
"A Sunset Rio foi idealizada pelas Valéria’s, e iniciou seus serviços no ano de 2021, se comprometendo com as seguintes diretrizes:",
"MISSÃO",
"Oferecer serviços de hospedagem, com qualidade para nossos clientes, e transparência para nossos parceiros.",
"VISÃO",
"Queremos administrar um portifólio com pelo menos 10 apartamentos, nos próximos 24 meses.",
"VALORES",
"Ética, transparência, qualidade, respeito e empatia.",
"Responsável pela recepção dos hóspedes, é a pessoa dedicada a auxiliar sua estadia ser a mais especial possível.",
"SOBRE AS VALÉRIA'S",
"Em 2018, as Valéria’s (Valéria Gomes e Valéria Lima) trabalharam juntas em uma empresa de aluguel por temporada, já consolidada na cidade do Rio de Janeiro, onde aprenderam toda a paixão de recepcionar os hóspedes e oferecer um serviço com qualidade, graças a nossa incrível e inesquecível mentora, Cristina. Após vários momentos difíceis causados pela pandemia de Covid-19, em 2021 resolveram iniciar o seu próprio empreendimento e colocar em prática as lições aprendidas.",
"Responsável pela parte administrativa, é a pessoa dedicada a cuidar de sua reserva e garantir que esteja tudo pronto.",

// QUINTA PÁGINA

"FAQ - PERGUNTAS FREQUENTES",
"Essas são algumas perguntas que são feitas com frequencia, estamos à disposição para quaisquer outras dúvidas.",
"TEM CAFÉ DA MANHÃ?",
"O QUE É TAXA DE LIMPEZA?",
"TEM ESTACIONAMENTO?",
"O APARTAMENTO É COMPARTILHADO COM OUTROS HÓSPEDES?",
"POSSO RECEBER VISITAS?",
"ACEITA PETS?",
"QUAL HORÁRIO DE CHECK IN E CHECK OUT?",
"POSSO FAZER FESTA NO APARTAMENTO?",
"TEM TOALHAS E LENÇÓIS?",
"COMO É FEITO O CHECK IN?",
"TEM SECADOR DE CABELO?",
"TEM FERRO DE PASSAR ROUPA?",
"Reserve Agora",


// RODAPÉ

`© ${dataAtual.getFullYear()} - Todos os direitos reservados. Desenvolvido por Fábio Marques.`,

// LINKS MENU MOBILE
"APARTAMENTOS", "POLÍTICAS", "SOBRE NÓS", "Seg - Sab: 9:00 - 18:00",

//MODAL APARTAMENTOS

"Reserve Agora",
"Reserve Agora",
"DESCRIÇÃO",
"FACILIDADES",
"LOCALIZAÇÃO"

];
const dicionarioIngles = [
    "Sunset Rio – Vacation rentals in Copacabana",
    "Mon - Sat: 9:00 - 18:00",
    "APARTMENTS",
    "POLITICS",
    "ABOUT US",
    "Have you contemplated life today? With us, this is possible!",
    "Clean apartments, overlooking the sea, 100m from the beach, close to the most used transports and fully equipped to make your experience incredible.",
    "Book Now",

    
// SEGUNDA PÁGINA

"NOSSOS APARTAMENTOS",
"Confira a seguir o que temos de melhor para sua estadia:",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"DETALHES",
"1",
"2",
"3",
"Book Now",


// TERCEIRA PÁGINA

"AVALIAÇÕES DE HÓSPEDES",
"Confira a seguir o que nossos hóspedes acharam da experiência:",
'“...Excelente experiência, cumpriram com o anúncio, tudo que foi oferecido foi entregue. Anfitriã muito atenciosa e solícita.”',
"abril 2023",
'"...Experiência incrível, apartamento limpo e aconchegante, com uma vista espetacular de Copacabana! A anfitriã super atenciosa, e receptiva!”',
"abril 2023",
"POLÍTICAS",
"REGRAS DE HOSPEDAGEM",
"Nossas regras de hospedagem foram definidas para garantir a qualidade de sua estadia.",
"PAGAMENTOS E CANCELAMENTOS",
"Leia nossa política de pagamentos e cancelamentos.",
"POLÍTICA DE PRIVACIDADE",
"Leia a nossa política de privacidade e veja de que forma utilizamos os seus dados.",

// QUARTA PÁGINA

"SOBRE A SUNSET RIO",
"A Sunset Rio foi idealizada pelas Valéria’s, e iniciou seus serviços no ano de 2021, se comprometendo com as seguintes diretrizes:",
"MISSÃO",
"Oferecer serviços de hospedagem, com qualidade para nossos clientes, e transparência para nossos parceiros.",
"VISÃO",
"Queremos administrar um portifólio com pelo menos 10 apartamentos, nos próximos 24 meses.",
"VALORES",
"Ética, transparência, qualidade, respeito e empatia.",
"Responsável pela recepção dos hóspedes, é a pessoa dedicada a auxiliar sua estadia ser a mais especial possível.",
"SOBRE AS VALÉRIA'S",
"Em 2018, as Valéria’s (Valéria Gomes e Valéria Lima) trabalharam juntas em uma empresa de aluguel por temporada, já consolidada na cidade do Rio de Janeiro, onde aprenderam toda a paixão de recepcionar os hóspedes e oferecer um serviço com qualidade, graças a nossa incrível e inesquecível mentora, Cristina. Após vários momentos difíceis causados pela pandemia de Covid-19, em 2021 resolveram iniciar o seu próprio empreendimento e colocar em prática as lições aprendidas.",
"Responsável pela parte administrativa, é a pessoa dedicada a cuidar de sua reserva e garantir que esteja tudo pronto.",

// QUINTA PÁGINA

"FAQ - PERGUNTAS FREQUENTES",
"Essas são algumas perguntas que são feitas com frequencia, estamos à disposição para quaisquer outras dúvidas.",
"TEM CAFÉ DA MANHÃ?",
"O QUE É TAXA DE LIMPEZA?",
"TEM ESTACIONAMENTO?",
"O APARTAMENTO É COMPARTILHADO COM OUTROS HÓSPEDES?",
"POSSO RECEBER VISITAS?",
"ACEITA PETS?",
"QUAL HORÁRIO DE CHECK IN E CHECK OUT?",
"POSSO FAZER FESTA NO APARTAMENTO?",
"TEM TOALHAS E LENÇÓIS?",
"COMO É FEITO O CHECK IN?",
"TEM SECADOR DE CABELO?",
"TEM FERRO DE PASSAR ROUPA?",
"Book Now",


// RODAPÉ

`© ${dataAtual.getFullYear()} - All Rights Reserved. Developed by Fábio Marques.`,


// LINKS MENU MOBILE
"APARTMENTS", "POLITICS", "ABOUT US", "Mon - Sat: 9:00 - 18:00",


//MODAL APARTAMENTOS

"Book Now",
"Book Now",
"DESCRIPTION",
"AMENITIES",
"LOCALIZATION"

];

let alterarIdioma;
let idiomaTraducao = 1;

const botaoPortugues = document.getElementById('botaoPortugues');
const botaoIngles = document.getElementById('botaoIngles');

carregarIdiomaDaPagina();
function carregarIdiomaDaPagina(){
    idiomaTraducao = JSON.parse(localStorage.getItem('idioma'));
    if(idiomaTraducao != null){alterarIdiomaDaPagina();}
}

botaoPortugues.onclick = function() {idiomaTraducao = 1; alterarIdiomaDaPagina();};
botaoIngles.onclick = function() {idiomaTraducao = 2; alterarIdiomaDaPagina();};

function alterarIdiomaDaPagina(){
    for (let i=0; i<ids.length; i++){
        alterarIdioma = document.getElementById(ids[i]);
        if (idiomaTraducao == 1){alterarIdioma.innerText = dicionarioPortugues[i]; idioma = 1;}
        if (idiomaTraducao == 2){alterarIdioma.innerText = dicionarioIngles[i];  idioma = 2;}
    }
    localStorage.setItem('idioma', JSON.stringify(idiomaTraducao));
    return;
}

// PRIMEIRA PÁGINA

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
// trBotaoCTA2 = Reserve Agora

// TERCEIRA PÁGINA

// trTituloAvaliacoes = AVALIAÇÕES DE HÓSPEDES
// trParagrafoAvaliacoes = Confira a seguir o que nossos hóspedes acharam da experiência:
// trAvaliacaolinha1.1 = “...Excelente experiência, cumpriram com o anúncio, tudo que foi oferecido foi entregue. Anfitriã muito atenciosa e solícita.”
// trAvaliacaolinha1.2 = abril 2023
// trAvaliacaolinha2.1 = ""...Experiência incrível, apartamento limpo e aconchegante, com uma vista espetacular de Copacabana! A anfitriã super atenciosa, e receptiva!”
// trAvaliacaolinha2.2 = abril 2023
// trTituloPoliticas = POLÍTICAS
// trTituloRegrasDeHospedagem = REGRAS DE HOSPEDAGEM
// trParagrafoRegrasDeHospedagem = Nossas regras de hospedagem foram definidas para garantir a qualidade de sua estadia.
// trTituloPagamentosCancelamentos = PAGAMENTOS E CANCELAMENTOS
// trParagrafoPagamentosCancelamentos = Leia nossa política de pagamentos e cancelamentos.
// trTituloPoliticaPrivacidade = POLÍTICA DE PRIVACIDADE
// trParagrafoPoliticaPrivacidade = Leia a nossa política de privacidade e veja de que forma utilizamos os seus dados.

// QUARTA PÁGINA

// trTituloSobreNos = SOBRE A SUNSET RIO
// trParagrafoSobreNos = A Sunset Rio foi idealizada pelas Valéria’s, e iniciou seus serviços no ano de 2021, se comprometendo com as seguintes diretrizes:</p>
// trTituloMissao = MISSÃO
// trDescricaoMissao = Oferecer serviços de hospedagem, com qualidade para nossos clientes, e transparência para nossos parceiros.
// trTituloVisao = VISÃO
// trDescricaoVisao = Queremos administrar um portifólio com pelo menos 10 apartamentos, nos próximos 24 meses.
// trTituloValores = VALORES
// trDescricaoValores = Ética, transparência, qualidade, respeito e empatia.
// trParagrafoValeriaGomes = Responsável pela recepção dos hóspedes, é a pessoa dedicada a auxiliar sua estadia ser a mais especial possível.
// trTituloSobreValerias = SOBRE AS VALÉRIA'S
// trParagrafoSobreValerias = Em 2018, as Valéria’s (Valéria Gomes e Valéria Lima) trabalharam juntas em uma empresa de aluguel por temporada, 
//                         já consolidada na cidade do Rio de Janeiro, onde aprenderam toda a paixão de recepcionar os hóspedes e oferecer 
//                         um serviço com qualidade, graças a nossa incrível e inesquecível mentora, Cristina.

//                         Após vários momentos difíceis causados pela pandemia de Covid-19, em 2021 resolveram iniciar o seu próprio 
//                         empreendimento e colocar em prática as lições aprendidas.
// trParagrafoValeriaLima = Responsável pela parte administrativa, é a pessoa dedicada a cuidar de sua reserva e garantir que esteja tudo pronto.


// QUINTA PÁGINA

// trTituloFaq = FAQ - PERGUNTAS FREQUENTES
// trParagrafoFaq = Essas são algumas perguntas que são feitas com frequencia, estamos à disposição para quaisquer outras dúvidas.
// trTitulosPerguntasFrequentes = TEM CAFÉ DA MANHÃ?
//                     O QUE É TAXA DE LIMPEZA?
//                     TEM ESTACIONAMENTO?
//                     O APARTAMENTO É COMPARTILHADO COM OUTROS HÓSPEDES?
//                     POSSO RECEBER VISITAS?
//                     ACEITA PETS?
//                     QUAL HORÁRIO DE CHECK IN E CHECK OUT?
//                     POSSO FAZER FESTA NO APARTAMENTO?
//                     TEM TOALHAS E LENÇÓIS?
//                     COMO É FEITO O CHECK IN?
//                     TEM SECADOR DE CABELO?
//                     TEM FERRO DE PASSAR ROUPA?
// botaoCTA3 = Reserve Agora


// RODAPÉ

// trParagrafoCopyright = © 2023 - Todos os direitos reservados. Desenvolvido por Fábio Marques.