const obj ={
    a:1,
    b:2,
    c:['0','B','J'],
    d:{value:'Val'}
};

//destructing{}
//Bindig Pattern
const {a,c} = obj; //const a = obj.a
console.log(a,c);

//renaming -a
const {a:a1}= obj;
console.log(a1);


//assignment pattern
let b;
({b:b1} = obj);
console.log(b1);
