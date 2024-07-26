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