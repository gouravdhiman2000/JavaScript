/**Pure function - return same output for same set of inputs */

function calculate(num1,num2){
    return num1 * num2;
}

console.log(calculate(4,6));

// this function is completely depend on the discount value as the value of the discount changes the function output also changes - Impure function
const discount = 25;
function calDiscount(price){
    return price * (discount/100);
}

console.log("discount value is :",calDiscount(5000));




function removeVowels(obj) {
    return {
        ...obj,
        value: obj.value.replace(/[aeiou]/gi, "")
    };
}

let strObj = { value: "Hello World" };

// Using the pure function
let newObj = removeVowels(strObj);

console.log(strObj.value); // Output: "Hello World"
console.log(newObj.value); // Output: "Hll Wrld"
