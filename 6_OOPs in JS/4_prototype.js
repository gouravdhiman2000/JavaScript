function Movie(title){
    this.title = title;
}

const movie1 = new Movie('The Avengers');

movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie('End Game');
console.log(movie2);

console.log(movie2.__proto__);
console.log(movie2.__proto__.__proto__);


function Game(name, platform){
    this.name = name;
    this.platform = platform;
}

const fifa = new Game("FIFA 23", "Playstation");
console.log(fifa.__proto__ === Game.prototype);

console.log(fifa.__proto__.__proto__ === Object.prototype);