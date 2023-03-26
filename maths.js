let numerosDoSorteio = [];
let numeroSorteado;
for (let i=0; i<10; i++)
{
    console.log (numeroSorteado = Math.floor(Math.random() * 10 +1));
    for (let j=0; j<10; j++)
    {
    if (numerosDoSorteio[j]!=undefined)
    {
        if(numeroSorteado==numerosDoSorteio[j])
        {
            j=10;
            i--;
        }
    }
    else if(numerosDoSorteio[i]===undefined && j!=10){
        numerosDoSorteio[i] = numeroSorteado;
    }
}
}
for (let i=0; i<10; i++){
    console.log("Número "+ (i+1) + ": " + numerosDoSorteio[i]);
}