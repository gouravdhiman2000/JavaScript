// callStack - it tracks the order of execution of a program
// callstack is implemented on stack data structure and follows LIFO principle , So the last element added to the call stack will get executed first
var userName = 'gourav';
var userAge = 24;
console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

greetUser(userName);

function greetUser(name){
    console.log(`************************`);
    var greet = `I hope you are doing fine.`;
    console.log(`hello ${name}, ${greet}`);

    var currentYear = 2024;

    const year = birthYear(currentYear , userAge);
    console.log(`************************`);
    return `Your birth year is ${year}`;
}

function birthYear(year,age){
    console.log('Calculating the birth year');
    return year - age;
}

var bYear = greetUser(userName);
console.log(bYear);

// when dealing with function JS creates local execution context for each function in the same order as they are called, and until the function is not returned, the execution context does not get removed from the function


// Example
function foo(){
    console.log("Hello from foo!");
}

function bar(){
    foo();
    console.log("Hello from bar!");

}

function baz(){
    bar();
    console.log("Hello from baz!");

}

baz();