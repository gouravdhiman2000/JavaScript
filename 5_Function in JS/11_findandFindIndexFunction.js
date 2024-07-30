//find - if present in the array return that no. and if not present - undefined
const inputs = [
    22,13,15,77,65,98,76,44,55
];

const find1 = inputs.find((num) => num == 65);
console.log(find1); // Output: 65

const find2 = inputs.findIndex((num) => num == 65);
// returns the index of element where it is present in the array
// if not present returns (-1)
console.log(find2); // Output: 5


const numbers = [1,2,3,4,5,2,4,2];
const filteredNumbers = numbers.filter((element, index, array) => {
    return array.indexOf(element) === index;

});
console.log(filteredNumbers); // Output: [1, 2, 3, 4, 5


// every , fill, findLast, findLastIndex, forEach