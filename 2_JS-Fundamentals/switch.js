/**Syntax of switch */
/*
switch(exporession){
    case a:
        //code to be executed if a is true
        break;

    case b:
        //code to be executed if b is true
        break;

    default:
        //code to be executed if neither a nor b is true
}

*/

const fruits = prompt("Enter the fruits name");

switch (fruits) {
    case "apple":
        console.log("Hey its Apple");
        break;

    case "Kiwi":
        console.log("Hey its Kiwi");
        break;
    
    default:
        console.log("Oh No its neither Apple nor Kiwi");
        break;

}

console.log("Outside Switch");