/**Higher Order Function */
// HoF- which accpets function as an argument
// Or a function that return a function

const inputs = [1,2,3,4,5,6,7,8,9,10];

// function square(input){
//     const squared =[];
//     for(let num of input){
//         squared.push(num * num);
//     }
//     return squared;
// }

// function cubic(input){
//     const cubes =[];
//     for(let num of input){
//         cubes.push(num * num * num);
//     }
//     return cubes;
// }

// console.log(square(inputs));
// console.log(cubic(inputs));


// HOF
function operation(input, fn){
    const output = [];
    for(let num of input){
        output.push(fn(num));
    }
    return output;
}


function square(number){
    return number * number;
}

function cube(number){
    return number * number * number;
}

console.log(operation(inputs,square));
console.log(operation(inputs,cube));