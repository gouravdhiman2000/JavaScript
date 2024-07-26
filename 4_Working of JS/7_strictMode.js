'use strict';
// a = 10;
// console.log(a); 
//a is not defined

let value = 10; //let is block scope
if(value){
    valeu = 20; //use strict - give an error valeu is not defined
}
console.log(value);