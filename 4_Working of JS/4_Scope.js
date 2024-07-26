/** Scope in JS */

//Global
var varNum = 10;
let letNum = 20;
const constNum = 30;

function print(){
    var varlocal = 10;
    let letlocal = 20;
    const constlocal = 30;

    console.log("functinal scope variable",varlocal,letlocal,constlocal);

    //global scope variables can be accessible inside the functional scope
    console.log("global scope variable",varNum,letNum,constNum);
}
console.log("global scope variable",varNum,letNum,constNum);
print();

// cannot access the functional scope variable in the global scope but global scope variables can be accessible inside the functional scope
//console.log(varlocal,letlocal,constlocal);


// Functional (local)
// Block- {} let and const are blocked scope
{
    var varblock = 10;
    let letblock = 20;
    const constblock = 30;

    console.log("block scope variable",varblock,letblock,constblock);
}

//error- cannot be accessible the block scope variables(let and const ) in the global scope , var can be accessed 
console.log("block scope variable",varblock);
console.log("block scope variable",varblock,letblock,constblock);
