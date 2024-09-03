const car ={
    getDetails(name){
        console.log(`Your car is ${name}`);
    },
};

//Object.create
const car1 = Object.create(car);
console.log(car1);
car1.getDetails('BMW');
console.log(car1.__proto__);


//Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
