"use strict";

const mainURL = "https://wandering-copper-sight.glitch.me/movies"

var newMovie = {};
newMovie.title = "";
newMovie.year = "";
newMovie.rating = "";


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
function deleteMovieList() {
    fetch(mainURL + "/",{
        method:'DELETE'
    }).then(response=>{  response.json()})
        .then(data=> (data)
    );
}

