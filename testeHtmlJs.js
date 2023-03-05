let  mediaDoAluno;


//function validar()
//{
    mediaDoAluno = document.getElementsByName("textoMedia");
   if (parseFloat (mediaDoAluno[0].defaultValue)>=6){
    alert ("Aprovado");
   }
   else{
    alert("Reprovado!");
   }
//alert (mediaDoAluno[0].defaultValue);
//}