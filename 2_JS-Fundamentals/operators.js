// Operators in JavaScript

// 1. Arithmetic Operators
// (+,-,*,/,%,**,++,--)
console.log(5+4);
console.log(2 ** 3);

let x = 10;
x++;// x=x+1 = 11
x--;// 11-1 = 10
x--; // 10-1 = 9
console.log(x);

// 2. Assignment Operators
// (=, +=, -=, *=, /=, %=, **=)
let b = 5;
b+=2;
console.log(b);//7

let c = 2;
c*=3;
console.log(c);//6

// 3. Comparison Operators
// (<, >, <=, >=, ==, !=, ===, !==)
console.log(5<6);//true
console.log(5 == 5);//true
console.log(5 != 5);//false
// compare the values here
console.log( 5 == '5');//true
// compare the values as well as datatypes also
// strict equals to
console.log( 5 === '5');//false

// returning true because datatypes are different
console.log(5 !== '5');//true

// 4. Logical Operators
// (&&, ||, !)

console.log( true && true); //true
// && - return last truthy and first falsy value
console.log( true && 1); //1 - because one considered as true and it is  last truthy 
console.log( 5 && 1);// one

// || (OR)- return first truthy and last falsy value
console.log( 0 || false || '' || null);//return null because it is last falsy value

console.log(!1);//false

console.log(0 || "hello" || true);
//return = hello because OR returns the first truthy value and 0 is false

console.log(4>2 && "hello" != "Hello");//true
console.log( false || null);//null
console.log(undefined == null);//true
console.log("0" === 0);//false


// 5. Bitwise Operators
// (&, |, ^, ~, <<, >>, >>>)


