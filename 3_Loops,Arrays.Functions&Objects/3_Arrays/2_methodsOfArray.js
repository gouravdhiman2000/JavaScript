/**Arrays in JS are Dynamic */

const cities =["delhi","mumbai","chandigarh","chennai","jaipur"];

console.log(cities.length);

cities[4]="pink city";
console.log(cities);

/**Methods on Arrays */

/**Adding an Element */
//push() - add at end
const teams =["csk","rcb","mi","lsg"];
teams.push("gt");
console.log("push",teams);

// retuen type of push and unshift is its array length
const pushArray = teams.push("pb");
console.log(pushArray);


// unshift() - add at starting
teams.unshift("kkr","delhi");
console.log("unshift",teams);



/** Removing an element */
// pop(); -  don't take any argument and delete from the end
teams.pop();
console.log("pop",teams);

const popArray = teams.pop();
console.log("popArray",popArray);

// shift(); -don't take any argument and  delete from the starting
teams.shift();
console.log("shift",teams);

// return type of pop and shift is the value that is removed from the array
const shiftArray = teams.shift();
console.log("shiftArray:", shiftArray);


var fruits =["banana","orange"];
var newLength = fruits.push(["apple","mango"]);
console.log(newLength);


/**Check the element is present or not */
// indexof()
const rcbIndex = teams.indexOf("rcb");
console.log("rcbIndex",rcbIndex);//1
// 1 represents element is present in array and -1 represent element is not present in the array
const gtIndex = teams.indexOf("gt");
console.log("rcbIndex",gtIndex);//-1


// includes()- gives boolean value (true) if element is present in array and (false) if element is not present in the array
const gtIncludes = teams.includes("gt");
console.log("rcbIndex",gtIncludes);//false


// slice() - trim the array but don't affect the original array
// here (2) defines how many no. of elements we want to remove and positive number indicates that it will trim from the starting
// giving negative number means it will retain last that much of element (-2) retain last two elements in the array and else everthing will be removed
console.log(teams);
console.log(teams.slice(2));
console.log(teams.slice(-1));
console.log(teams);//original array didn't change

//splice(indexno., how many elements you want to delete, element you want to add )- used to add element and remove element from the array at the same time

teams.splice(2,0,"gt");
console.log(teams);//gt is added at 2nd index


// concat()
const teams2 = ["india","pak","aus","nz","bangladesh"];

const mergedTeams = teams.concat(teams2);
console.log(mergedTeams);


