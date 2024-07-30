/**IIFE - immediately invoked function expression */
// basically it is a anonymous function
(function (a,b){
    console.log("IIFE");
    console.log(a ** b);
}) (4,2);


// In JS, IIFE can be returned from a function , but it will be executed as soon as the main function is called. We can't store the IIFE can call it later like other functions

// Through IIFE, we can create a private scope for our code, preventing variables and functions from polluting the global namaespace. This encapsulation helps maintain code integrity, improves modularity ,amd reduces the chances of naming conflicts with other scripts or libraries

var x = 10;
(function () {
    console.log(x);
})();

function main(){
    return (function(){
        console.log("IIFE- hello user");
    }) ();
}
const result = main();


const user = (function (){
    const userData ={
        userName :"Gourav",
        userAge : 24,
    }
    function getName(){
        console.log(userData.userName);
    }

    function updateAge(age){
        console.log(userData.userAge + age);
    }

    return {getName, updateAge};

}) ();

console.log(user);
console.log(user.userData);//undefined
user.getName();//Gourav
user.updateAge(3);//27