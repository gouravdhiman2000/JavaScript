/**Function returning Function */

function greet(mesaage){
    return function (wishes){
        console.log(`${wishes}, ${mesaage}`);
    }
}

const greeting = greet("I hpoe you are doing well");
greeting("Hello G");

greet("Welcome to the Session")('Hi');