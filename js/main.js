"use strict";

const mainURL = "https://wandering-copper-sight.glitch.me/movies";

var movieTitle;
var movieRating;
var movieYear;

var newMovie = {};
newMovie.title = movieTitle;
newMovie.year = movieYear;
newMovie.rating = movieRating;


renderMovies()

function renderMovies() {
    fetch(mainURL)
        .then(response => response.json())
        .then(data => console.log((data)))
        .catch(error => console.log(error))
}


// addMovieList()
function addMovieList() {
    const options = {
        newMovie,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch(mainURL, options)
        .then(response => console.log(response))
        .then(data => console.log(data))
        .catch(error => console.error(error));

}

// deleteMovieList()
function deleteMovieList(id) {
    fetch(mainURL + "/" + id,{
        method:'DELETE'
    }).then(response=>{  response.json()})
        .then(data=> (data)
    );
}



// editMovieList()
function editMovieList(id, title, year, rating){
    fetch(mainURL + "/" + id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title ,
            year: year,
            rating: rating
        })

    }).then(response => response.json())
        .then(data => data)

}