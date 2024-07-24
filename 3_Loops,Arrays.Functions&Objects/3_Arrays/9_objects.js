const student = {
    name : "Gouarv",
    age : 24,
    hobby : "coding",
    show : function(){
        console.log('This is the student details section');
    },
    address : 'palampur'
};

console.log(student);

// accessing in object using (.)

console.log(student.name);
console.log(student["hobby"]);

student.show();


const obj = {
    a:1,
    b:2,
    c:3
};
for(const key in obj){
    console.log(key);
}
