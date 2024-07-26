let a = 'Global';

function outerPrint(){
    let b = 'OuterPrint';

    // function innerPrint(){
    //     let c = 'InnerPrint';

    //     return `${a} -> ${b} -> ${c}`;
    // }
    // const show = innerPrint();
    // console.log(show);



    //returning the innerPrint function from the outerPrint function
    return function innerPrint(){
        let c = 'InnerPrint';

        return `${a} -> ${b} -> ${c}`;
    };
}
const show = outerPrint();
console.log(show); // returns the innerPrint function

//to get the value of innerPrint function which is returning something store it in some variable
const inner = show();
console.log(inner);