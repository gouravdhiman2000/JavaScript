
const inputs = [4,10,2,-3,-2,5,9,-1];

const positive = inputs.filter(noNegative);

function noNegative(num){
   return num > 0;
}
const negative = inputs.filter((num)=>{
    return num<0;
})
console.log("Original array:", inputs);
console.log("Positive numbers:",positive);
console.log("Negative numbers:",negative);