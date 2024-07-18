// Primitive datatypes

// Number (64 bit)
let num = 10;
console.log(typeof num);


// String
const firstName = "Gourav";
const lastName = 'Dhiman';
const nickName = `chotu`;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof nickName);


// Boolean
let bool = false;
console.log(typeof bool);

// Undefined
let a;
console.log(typeof a);
// typeof as well of value of a is undefined
console.log(a);


// Null
let b = null;

console.log(b);//null

console.log(typeof b);//object(bug in javaScript)


// BigInt(ES2020)
let bigInt = 100n;
console.log(typeof bigInt);


// Interesting things about dataTypes
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE * 10); //Infinity


let num1= Infinity;
console.log(typeof num1);//number

console.log(12/0);//infinity

console.log(1/Infinity);//zero


const num2 = Infinity/Infinity;
console.log(num2); //NaN

