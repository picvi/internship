const phrase: string = 'Hello, dude';

const phraseLength: number = (phrase as string).length;
console.log(`phrase: ${phrase}, length: ${phraseLength}`);

let smth: string | object = "I'm string";
smth = {'name': 'Robin'};
console.log(smth);

type numeric = number;
let sum: numeric = 12;
console.log(sum);

function sayMyName(name: string, middleName?: string): string {
  if (middleName) {
    return `My name is ${name} ${middleName}`;
  } else return `My name is ${name}`
}

console.log(sayMyName('Joe'));

function sums(...rest: string[]) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

sums('3', '7', '19');

let subtract: (x: number, y: number) => number;
function funcResult(x: number,
  y: number,
  operation: (a: number, b: number) => number) {
    return operation(x, y);
}

subtract = (a: number, b: number) => {
  return a - b;
}

console.log(funcResult(23, 20, subtract));

