const inputs = [11,32,12,45,65,94,7,78,10,100,131,67,81,92,53];

const evenNumbers= [];

for(let i of inputs){
    if(i % 2 !== 0){
        // skipping all the odd no.s
        continue;
    }
    // console.log(i);
    evenNumbers.push(i);

    // pushing only the first 5 even no.s to the array
    if(evenNumbers.length === 5){
        // when a break statement is encountered within nested loops, it terminates only the innermost loop and resumes the execution of the outer loop.
        break;
    }
    console.log(evenNumbers);
}
console.log(evenNumbers);

//adding the first 10 prime numbers starting with 1 in an array
// checkPrime is the function to check if a number is prime or not and return a boolean value
// const arr =[];
// let num = 1;
// do {
//     num++;
//     if(checkPrime(num) && arr.push(num) >= 10){
//         break;
//     }
    
// }
// while(true);
// console.log(arr);
