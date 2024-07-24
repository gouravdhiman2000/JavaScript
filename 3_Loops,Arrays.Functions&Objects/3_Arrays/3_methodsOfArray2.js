const arr1 = [1,2,34,5];
const  arr2 = arr1.slice();
// if you don't pass any parameter in the slice then the default parameter will be used in place of start and end which is 0 and length of array respectively
arr2.push(6);
console.log(arr1);


var arr = ['a','b','c','d'];
// If you don't specify the deleteCount in the splice method it will automatically take the next parameter as deleteCount, since here the next parameter is a string, so it will get discarded, and 'y' will be inserted at index 2.
arr.splice(2,'x','y');
console.log(arr);


const arr3 = Array.from("codingNinja");
// Array.from() method is used to convert the iterable object into an array.
// The Array.from is used to create a new array from any iterable data. When used with string it will create an Array with all the characters of the string.
console.log(arr3);