// const movieObj = {
//     title : 'The Avengers',
//     year : 2012,
//     getDetails(){
//         console.log(`
//             Title : ${this.title}
//             Year : ${this.year}
//             `);
//     },
// };

function movie(title, year){
    const movieObj = {
        title : title,
        year : year,
        getDetails(){
            console.log(`
                Title : ${this.title}
                Year : ${this.year}
                `);
        },
    };
    return movieObj;
}

const movie1 = movie("The Avengers", "2012");
console.log(movie1);
movie1.getDetails();

const movie2 = movie("Avatar", "2018");
console.log(movie2);
movie2.getDetails();

// constructor Function

function Movie(title,year){
    this.title = title;
    this.year = year;

    this.getDetails= function(){
        console.log(`
            Title : ${this.title}
            Year : ${this.year}
            `);
    };
}

// new keyword - to invoke the Movie constructor function
const movie3 = new Movie("The Avengers", "2012");
console.log(movie3);
movie3.getDetails();