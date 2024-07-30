/**Arrow Function */
// replace the function keyword and function name
// var product = (num1,num2) => {
//     return num1 * num2;
// } 
// if there is a single statement and single return then we can use

// the arrow function implicitly return if there is a single line of code, but if enclose the code within curly brackets , it will not return implicity
var product = (num1,num2) => num1*num2;
console.log(product(5,5));

let result = (() =>{
    let x =5;
    return () => {
        x +=1;
        return x;
    };
}) ();
// the arrow function returns a function, so the result will store the returned function as a value
console.log(result);


// error beacause the asrrow function is a function expression , and we cant't invoke a function expression before its declaration
console.log(greet("Alice"));
const greet = name => `Hello , ${name}`;