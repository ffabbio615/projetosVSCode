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
