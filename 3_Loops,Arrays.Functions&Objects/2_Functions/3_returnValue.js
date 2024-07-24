/**Return value of a function */

function square(number){
    // console.log(number * number);
    return number * number;
    // the return statement is used to terminate the function as soon as it is encountered and will return the values that have been soecified in it.
}

const squaredValue = square(5);
console.log(squaredValue);



function getValues(){
    return 1,2,3;
}
const result = getValues();
console.log(result);
// When you use commas to separate values (return 1, 2, 3;), JavaScript interprets it as the comma operator, which evaluates each expression but only returns the value of the last expression. In this case, the function is effectively returning only 3.



function calculate(len,bre){
    const area = len*bre;
}

const area = calculate(5,5);
console.log(area);
// In JS, if the return value is not mentioned in a function it automatically returns undefined