/**Currying in JS */
// Function currying allows for the creation of reusable functions and enables a more flexible function composition
// It is a technique to convert a function with multiple arugments into a sequence of functions, each taking a single argument
function add(a,b,c){
    return a+b+c;
}
console.log(add(2,3,4));

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
console.log(sum(2)(3)(4));


// function power(a,b){
//     return b ** a;
// }

function power(b){
    return function(a){
        return b ** a;
    };
}

const square = power(2);
console.log(square);

console.log(square(4));
console.log(square(11));
console.log(square(8));


const cube = power(3);
console.log(cube(3));
console.log(cube(8));
console.log(cube(5));