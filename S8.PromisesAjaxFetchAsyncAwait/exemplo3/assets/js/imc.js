//pega o elemento pelo id e dá os atributos dele para a constante formulario

document.addEventListener('click', form => { //adiciona ao evento submit do botão uma função
    const elemento = form.target
    // const formulario = elemento.tagName.toLowerCase();
    form.preventDefault(); //cancela o evento submit do botão
    if(elemento.className === 'calcular'){
    const inputAltura = document.querySelector('#altura');
    const altura = Number(inputAltura.value); //pega o valor do input do botão altura e converte em número
    const inputPeso = document.querySelector('#peso');
    const peso = Number(inputPeso.value);

    const imc = (peso / (altura * altura)).toFixed(2);
    //realiza o cálculo do IMC e deixa dois números após a vírgula

    const classificacoes = ["(Abaixo do Peso Normal)","(Peso Normal)","(Excesso de Peso)"
    ,"(Obesidade Classe I)","(Obesidade Classe II)","(Obesidade Classe III)"];
    let numeroClassificacoes;

    if (imc<18.5){numeroClassificacoes=0;}
    else if (imc>=18.5 && imc<25 ){numeroClassificacoes=1;}
    else if (imc>=25 && imc<30 ){numeroClassificacoes=2;}
    else if (imc>=30 && imc<35 ){numeroClassificacoes=3;}
    else if (imc>=35 && imc<40 ){numeroClassificacoes=4;}
    else if (imc>=40){numeroClassificacoes=5;}

    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''; //limpa o que tem dentro da div resultado no html
    resultado.className = 'resultado'; //adiciona ao nome da classe o nome "resultado"
    const p = document.createElement('p'); //cria um elemento P e atribui na constante
    // p.classList.add('paragrafoResultado'); //adiciona ao nome da classe de outra forma
    p.className = 'paragrafoResultado';

    p.innerHTML = `Seu IMC é ${imc} ${classificacoes[numeroClassificacoes]}.`; //a
    resultado.appendChild(p); 
    }
})


