//Fazer um filtro no array com as notas que forem maiores que 5
//Existem também map e reduce, sendo Map para fazer alguma alteração de valores, seja no array ou em um novo e
//Reduce, que retorna apenas um valor, sendo que este contém um acumulador antes do parâmetro de dados do array

const numeros = [5, 8, 2, 9, 7, 6, 8, 3, 4, 10];
const notasNaMedia = numeros.filter(n => n>=5);
console.log(notasNaMedia);

const nomes = ["Maria", "João", "Dário", "Wario","Mario", "Peach", "Toad", "Bowser"];

