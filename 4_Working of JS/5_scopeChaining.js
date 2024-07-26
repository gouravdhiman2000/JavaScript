var a = 10;
let b = 20;
const c = 30;

//when a variable is declared in both the global scope and local scope , the variable in the local scope takes precedence and shadows the one in the global scope
function print(){
    var a = 'ten';
    let b = 'twenty';

    console.log('***** Inside print Function *****');
    console.log(a,b,c);
    //ten twenty 30
    // 30 from global scope
    console.log('**** ****');


    function innerPrint(){
        var a = 'innner10';
        console.log('**** Inside innerPrint Function ****');
        console.log(a,b,c);
        //inner10 twenty 30
        // twenty from functional scope and 30 from global scope
    }
    innerPrint();
}

console.log(a,b,c);
print();