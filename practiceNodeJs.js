"use strict";
const readline = require('readline-sync');

let columns = readline.question("How many columns  ? ");
let string = readline.question("How many string ? ");
let sumColumns ="";
for (let i=0; i < columns; i++){
    sumColumns+="*";
}
for (let j= 0; j<string;j++){
    console.log(sumColumns);
};