"use strict";
let a = 10;
let b = 'Andre';
const array = [];
array.push(10, 20, 30, 40);
console.log(`Hello, ${b}! Your score today is ${a}! Come back tomorrow to increase it!`);
console.log(array[2]);
// let item: [string, number, boolean] = ['Apple', 3, true];
// const item: [string, number, boolean] = [];
function soma(n1, n2) {
    if (n1 + n2 >= 10) {
        return true;
    }
    else {
        return false;
    }
}
console.log(soma(5, 6));
// const user:{
//     firstName: string,
//     age: number,
//     lastName: string,
// } = {
//     firstName: "Fábio",
//     age: 33,
//     lastName: "Marques Melo"
// }
const user = {};
const user2 = {
    firstName: "Fábio",
    age: 33,
    lastName: "Marques Melo"
};
function nameType(name) {
    if (typeof name === 'string') {
        return ("O nome dele é: " + name);
    }
    else {
        return ("O nome dele em número é: " + name);
    }
}
let receberParecer = nameType("Fábio");
console.log(receberParecer);
receberParecer = nameType(612915);
console.log(receberParecer);
const person = {
    name: "Fábio",
    age: 33,
    category: "neto",
}; // Foram criados dois ALIAS para definir os campos e mais um para fazer a interseção antes do atributo se apropriar deles
//Declaração de arrays com tipo String e Number ao mesmo tempo.
const stringAndNumbers = ["one", 1, 2, "Two", "Three", "Four"];
console.log(stringAndNumbers[4]);
//# sourceMappingURL=index.js.map