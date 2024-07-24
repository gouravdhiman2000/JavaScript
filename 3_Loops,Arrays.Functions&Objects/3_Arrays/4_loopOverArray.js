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

for (let i = 0; i < students.length; i++ ){
    console.log(students[i]);
    // i+1 - because index is starting from the zero , 0+1 = 1
    console.log(`Roll no ${i+1}: ${students[i]}`);
}