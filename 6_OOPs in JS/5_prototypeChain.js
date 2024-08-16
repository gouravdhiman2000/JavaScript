const car = {
    name : 'BMW',
};

console.log(car.__proto__);

// another of checking the prototype of any object
console.log(Object.getPrototypeOf(car));


function Movie(title){
    this.title = title;
    // this.getDetails = function (){
    //     console.log(`Title : ${this.title}`);
    // };
}

Movie.prototype.getDetails = function (){
    console.log(`Title : ${this.title}`);
};


const movie1 = new Movie('The Avengers');

movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie('End Game');
console.log(movie2);




function Person(name){
    this.name = name;
}

Person.prototype.age = 30;

const john = new Person("John");

john.__proto__.age = 40;

console.log(john.age);
console.log(Person.prototype.age);