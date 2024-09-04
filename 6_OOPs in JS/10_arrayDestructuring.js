const fruits = [
    'Apple',
    'Mango',
    'Banana',
    'Orange',
    'Grapes',
    'Kiwi',
    'Lichi',
];

//Binding Pattern
//array destructing []
// const [a, ,b]= fruits;
// console.log(a,b); //Apple banana


// const [a,m,...f]=fruits;
// console.log(f);

const [a,m,...[,g,k,l]] = fruits;
console.log(a,m,g,k,l); //Apple Mango Lichi Kiwi Lichi
