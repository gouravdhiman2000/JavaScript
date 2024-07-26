console.log(a);
var a = 10;//undefined

let c = 10;
{
    console.log(c);
    let c = 20;
}

console.log(b);
let b = 10;// cannot access 'b' before initialization
//TDZ- Temporal Dead Zone - once the initializing the variable executes , the TDZ ends, and all the variables will be accessed after this