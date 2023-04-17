const formulario = document.querySelector('#formulario');
//pega o elemento pelo id e dá os atributos dele para a constante formulario

formulario.addEventListener('submit', function (form) { //adiciona ao evento submit do botão uma função
    form.preventDefault(); //cancela o evento submit do botão

    const inputAltura = document.querySelector('#altura');
    const altura = Number(inputAltura.value); //pega o valor do input do botão altura e converte em número
    const inputPeso = document.querySelector('#peso');
    const peso = Number(inputPeso.value);

    const imc = (peso / (altura * altura)).toFixed(2);
    //realiza o cálculo do IMC e deixa dois números após a vírgula

    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''; //limpa o que tem dentro da div resultado no html
    resultado.className = 'resultado'; //adiciona ao nome da classe o nome "resultado"
    const p = document.createElement('p'); //cria um elemento P e atribui na constante
    // p.classList.add('paragrafoResultado'); //adiciona ao nome da classe de outra forma
    p.className = 'paragrafoResultado';

    p.innerHTML = `Seu IMC é ${imc}.`; //a
    resultado.appendChild(p); 
})


