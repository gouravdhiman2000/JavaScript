const movie = {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    cast: {
        main_lead:'Tim Robbins', others:'Morgan Freeman'
    },
    genres: ["Drama"],
    rating: 9.2,

    getDeatails: function(){
        console.log(`Title: ${movie.title}, Year: ${movie.year}, Director: ${movie.director}, Cast: ${movie.cast}, Genres : ${movie.genres}, Rating : ${movie.rating}`);
    },
    getMoviedetails: function(detail){
        console.log(movie[detail]);
    }
};

console.log(movie.title);
movie.getDeatails();

console.log(movie.cast.main_lead);

const details = "title";
movie.getMoviedetails(details);