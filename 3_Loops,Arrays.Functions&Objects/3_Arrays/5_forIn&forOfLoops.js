/**Loop over Array */

const students =[
    'tina',
    'raj',
    'bobby',
    'seema',
    'sunny',
    'sita',
    'alex',
    'sham',
    'gourav',
    'keshav'
];

// for (let i = 0; i < students.length; i++ ){
//     console.log(students[i]);
//     // i+1 - because index is starting from the zero , 0+1 = 1
//     console.log(`Roll no ${i+1}: ${students[i]}`);
// }


//for .. in loop is equivalent to above loop - used when we want the index of an element from the array
for (let i in students){
    // add + infront of i because in for in loop i is considered as string and out put of roll no. will be 01, 11, 21, 31 so on..
    // to convert string to no. we add (+) in front of i
    console.log(`Roll no ${+i+1}: ${students[i]}`);
}


//for .. of loop - used when we want the element of the array
for(let name of students){
    console.log(students);
}