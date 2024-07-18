/** Type Coercion */

console.log(5+5);

// + converts the number to a string
let num = 5 + '5';
console.log(typeof num);
console.log(num);//55 as a string


let fullName = "gourav"+" "+"dhiman";
console.log(fullName);

// - converts the string to a number same for *, /
let sub = '55' - 10;
console.log(sub);
console.log(typeof sub);

console.log('4'*2);//number



let e = 5 + '5';//no. to string
let f = '10' - 5; // string to number
let g = e/f; //no. hi rhega
console.log(typeof g);//number
console.log(g);//11