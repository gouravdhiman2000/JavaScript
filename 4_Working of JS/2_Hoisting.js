// Hoisting - use the variable/invoking the function before declaring it 
// hoisting - starts during the compilation phase before code execution
console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

greetUser(userName);

var userName = 'gourav';
var userAge = 24;
console.log(`username: ${userName}`);
console.log(`userAge: ${userAge}`);

function greetUser(name){
    var greet = `I hope you are doing fine.`;
    console.log(`hello ${name}, ${greet}`);

    var currentYear = 2024;
    const year = currentYear - userAge;
    return `Your birth year is ${year}`;
}

var birthYear = greetUser(userName);
console.log(birthYear);

// to avoid hoisting-related confusion in JS, it's best practice to declare variables and functions at the top pf their scope so that when you use a variable, it has already been initialized