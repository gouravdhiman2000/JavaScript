/** JS Higher Order Functions */

//map()

const inputs = [1,2,3,,4,5,6];

// const squaredarray = inputs.map(function (currentElement){
//     return currentElement * currentElement;
// });

const squaredarray = inputs.map((num) => num * num);
console.log(squaredarray);






let fruits = ["banana", "apple","mango"]
let maparray = fruits.map((item,ind)=>{
    // return item + " is at index " + ind;
    return {[ind] : item.length};
});
console.log(maparray);