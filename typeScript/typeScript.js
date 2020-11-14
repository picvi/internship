"use strict";
const phrase = 'Hello, dude';
const phraseLength = phrase.length;
console.log(`phrase: ${phrase}, length: ${phraseLength}`);
let smth = "I'm string";
smth = { 'name': 'Robin' };
console.log(smth);
let sum = 12;
console.log(sum);
function sayMyName(name, middleName) {
    if (middleName) {
        return `My name is ${name} ${middleName}`;
    }
    else
        return `My name is ${name}`;
}
console.log(sayMyName('Joe'));
function sums(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
sums('3', '7', '19');
let subtract;
function funcResult(x, y, operation) {
    return operation(x, y);
}
subtract = (a, b) => {
    return a - b;
};
console.log(funcResult(23, 20, subtract));
