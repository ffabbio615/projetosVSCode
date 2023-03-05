let nome;
let num1, num2, num3, resultado;

alert ("Bem vindo(a) ao sistema de notas online!");
if (confirm ("Deseja inserir as notas de um aluno?") == true)
{
    //alert ('Você clicou em "SIM"');
    nome = prompt ("Certo! Então digite o nome do aluno:");
    alert ("Muito bem! Agora diga as notas para o aluno: " + nome);
    num1 = parseFloat(prompt("Nota 1:"));
    num2 = parseFloat(prompt("Nota 2:"));
    num3 = parseFloat(prompt("Nota 3:"));
    resultado = (num1 + num2 + num3)/3;
    if (resultado>= 6)
    {
        document.body.innerHTML = "<input type = 'text' name 'textoMedia' size = '40' value =" + resultado + ">";
        alert("Aluno " + nome + " passou de ano.");
    }else if(resultado<6){
        alert("Aluno " + nome + " não passou de ano.");
    }
}
else{
    alert('Não amole então!');
}