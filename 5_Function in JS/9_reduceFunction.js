//Reduce

//reduce(callbackfn, initial value);

//function callbackfn(accumulator, currentValue, currentIndex, arr)


const inputs = [1,2,3,4,5,6];

const sum = inputs.reduce((total, num, index)=>{
    console.log(total , index);
    return total+num;
},0)

console.log(sum);


const numbers = [1,2,3,4,5,6];
const sum1 = numbers.reduce((acc,num)=>{
    if(num%2 === 0){
        return acc + num;
    }
    else{
        return acc;
    }
},0);

console.log("Sum of  even no.s :",sum1);


const number = [];
const sum2 = number.reduce((acc,num)=> acc + num,5);
console.log(sum2);