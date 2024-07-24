/**Default Parameters */

function sum(num1=0, num2=0){
    console.log("Sum of the numbers is:" + num1+num2);//45

    console.log("Sum of the numbers is:", (num1+num2));//9

    console.log(`Sum of the numbers is: ${num1 + num2}`);//9
}

sum(4,5);
// if a default paremeter value is not specified for a parameter, the parameter will be assigned the value undefined as its default parameter
// if someone forgets the argument default parameter is used - here the argument for the num2 is missing
// so give num1=0, num2=0
sum(4);