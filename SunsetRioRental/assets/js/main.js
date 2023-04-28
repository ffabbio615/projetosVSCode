// const something = document.getElementById('trApartamentos');
// something.onclick = function() {
//     let botaoMenu = document.querySelector("#botaoMenu");
//     botaoMenu.className = "botaoMenuVisivel botaoMenu";
// };

const linkApartamento = document.location.href;
if (linkApartamento == "http://25.10.190.140:5500/SunsetRioRental/index.html#secaoSobreNos")
{
    alert("O JavaScript pega o link e checa apenas uma vez, daí se o link for esse especial, vai abrir uma modal com as informações");
}