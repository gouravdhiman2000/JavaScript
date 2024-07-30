/**Function in JS */

// function hoisting
const sum1 = sum(5,6);
console.log(sum1);

// Function declaration - allow function hoisting
function sum(a,b){
    return a + b;
}




// Function Expression- assigning a function to a variable and it doesn't allow function hoisting
// console.log(sum2(5,6));
// function that doesn't have name is anonymous function
const sum2 = function (a,b){
    return a + b;
}
console.log(sum2(5,6));