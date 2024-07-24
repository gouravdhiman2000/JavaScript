/**Arrays in JS */
// creating array
const students =["gourav","keshav","anku"];
console.log(students);

// another way of creating array
const car = new Array("Volvo","bmw","audi");
console.log(car);

// In JS, array is heterogenous it can store different types of datatypes
// Array in JS are too liberal it can actually hold any datatype and even function in it
const arr = ["apple","gourav",10,true];
console.log(arr);



const arr1 = [1, 2, 3, 4, 5];
// with didn't change the orginal array
// here at index -2 -> 3 is replaace by 6 and arr1 didn't change
console.log(arr1.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr1); // [1, 2, 3, 4, 5]
