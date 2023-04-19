const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', function(form){

    form.preventDefault();

    const optGenero = form.target.querySelector('#optGenero');
    const inputPeso = form.target.querySelector('#inputPeso');
    const inputAltura = form.target.querySelector('#inputAltura');
    const inputIdade = form.target.querySelector('#inputIdade');
    const optNivelAtividade = form.target.querySelector('#optNivelAtividade');

    const genero = Number(optGenero.value);
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const idade = Number(inputIdade.value);
    const nivelAtividade = Number(optNivelAtividade.value);
    
    let tmb;

    if(genero==1){tmb = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.75 * idade);}
    else{tmb = 655.1 + (9563 * peso) + (1850 * altura) - (4676 * idade);}

    const resultado = document.querySelector('#resultado');
    resultado.className = 'resultado';
    const p = document.createElement('p');
    p.className = 'paragrafoResultado';
    resultado.innerHTML = '';
    p.innerHTML = `Sua Taxa Metabólica Basal é de: ${tmb.toFixed(2)}.`;
    if(nivelAtividade==1){tmb= tmb*1.2;}
    if(nivelAtividade==2){tmb= tmb*1.375;}
    if(nivelAtividade==3){tmb= tmb*1.55;}
    if(nivelAtividade==4){tmb= tmb*1.725;}
    if(nivelAtividade==5){tmb= tmb*1.9;}
    
    p.innerHTML += ` A quantidade de calorias que você precisa ingerir para manter é de: ${tmb.toFixed(2)}.`
    resultado.appendChild(p);


//  Para homens: TMB = 66.5 + (13,75 x peso em Kg) + (5.003 x altura em cm) – (6.75 x Idade)
//  Para mulheres: TMB = 655.1 + (9.563 x peso em Kg) + (1.850 x altura em cm) – (4.676 x Idade)

//  Sedentário – se você faz pouco ou nenhum exercício (TMB x 1,2)
//  Pouco ativo – exercício ou algum esporte leve de 1 a 3 dias/semana (TMB x 1,375)
//  Moderadamente ativo – exercício ou esporte moderado de 3 a 5 dias/semana (TMB x 1,55)
//  Muito ativo – exercício ou esporte pesado de 6 a 7 dias/semana (TMB x 1,725)
//  Extremamente ativo – exercício ou esporte muito pesado e trabalho físico intenso todos os dias ou se você treina 2x por dia (TMB x 1,9)

    // alert (`Genero: ${genero} - Altura: ${altura} - Peso: ${peso} - Idade: ${idade} - Nivel de Atividade: ${nivelAtividade}.`);


})