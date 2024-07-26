var a = 10;
let b = 20;

console.log(a,b);

var a = 30;
console.log(a);

// let b = 40;
// console.log(b); 
//b has already been declared

var c = 1;
console.log(c);

//Redeclaration of variables is only possible with the var keyword. It we are redeclaring let with var or var with let , it will give a syntax error

function outer(){
    let x = 10;
    if(true){
        let y = 20;
        let z = 30;
        console.log(x+y+z); //60
    }
    console.log(x+y+z); //y is not defined
}
outer();