const aprilBatch =['Tina','MAdhur'];
const mayBatch = ['Rahul','Deepak', 'Shalini'];
const juneBatch = ['Saba','Gourav','Kesahav','Shivani'];
const julyBatch = [];

// create a function that will take two arguements (batch,student) whenever the function is call that this particular student to the batch

// function addStudent(batch, student){
//     batch.push(student);
//     console.log(batch);
// }

// addStudent(aprilBatch, 'kaku');
// addStudent(mayBatch, 'Anku');
// if we waant to add more students into the batch we have to call the function again and again for that we use rest operator

// Rest operator- represented by(...)
// it is used to pass the remaining arguments to the function as an array
// rest operator is used to collect all arguments to a function into an array, allowing for a function to have access to every element without losing any content

function addStudent (batch, ...students){
    for ( let i of students){
        batch.push(i);
    }
    console.log(batch);
}

addStudent(aprilBatch, "gourav","keshav","ritu");

// Spread Operator (...) - expand and copying
// Spread operator is used to spread the array elements into the function arguments

// adding the students of aprilBatch to the newBatch

const newBatch = [...mayBatch];
// shallow copying - changes made to the original one would not affect the new one
console.log(newBatch);

mayBatch.push("newStudent");
console.log(mayBatch);
console.log(newBatch);

// Another use of spread operator is Concatenate
const mergedBatch = [...mayBatch, ...juneBatch];
console.log(mergedBatch);