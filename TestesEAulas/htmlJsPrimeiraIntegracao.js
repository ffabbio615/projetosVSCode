let numero;

function informarNumero(n)
{
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = n;
texto.innerHTML = `<p>Seu número + 2 é: ${Number(n) + 2}. </p>`;
return alert (n);
}

numero = informarNumero(prompt('Digite um Número:'));

