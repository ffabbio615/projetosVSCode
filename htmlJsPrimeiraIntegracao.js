const numero = prompt('Digite um Número:');
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
numeroTitulo.outerHTML = numero;