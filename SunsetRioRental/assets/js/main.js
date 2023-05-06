// const something = document.getElementById('trApartamentos');
// something.onclick = function() {
//     let botaoMenu = document.querySelector("#botaoMenu");
//     botaoMenu.className = "botaoMenuVisivel botaoMenu";
// };
let borrar = document.querySelector("#trBotaoCTA");
// const linkApartamento = document.location.href;
// if (linkApartamento == "http://25.10.190.140:5500/SunsetRioRental/index.html#modalApartamento" || linkApartamento == "http://127.0.0.1:5500/SunsetRioRental/index.html#modalApartamento")
// {
//     // alert("O JavaScript pega o link e checa apenas uma vez, daí se o link for esse especial, vai abrir uma modal com as informações");
//     borrar = document.querySelector("#secaoInicial")
//     borrar.className = "secaoInicial blurModal"
// }

const fecharModal = document.querySelector("#btnFecharModalApartamento");
borrar.onclick = function(){
    borrar = document.querySelector("#secaoInicial")
    borrar.className = "secaoInicial blurModal";
};

fecharModal.onclick = function(){
    borrar = document.querySelector("#secaoInicial")
    borrar.className = "secaoInicial";
};