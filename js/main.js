"use strict";

const mainURL = "https://wandering-copper-sight.glitch.me/movies";
var newMovie = {};
newMovie.title = '';
newMovie.year = '';
newMovie.rating = '';


loadPage()
renderMovies()

function renderMovies() {
    fetch(mainURL)
        .then(response => response.json())
        .then(data => createCard(data))
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
    fetch(mainURL + "/" + id, {
        method: 'DELETE'
    }).then(response => {
        response.json()
    })
        .then(data => (data)
        );
}


// editMovieList()
function editMovieList(id, title, year, rating) {
    fetch(mainURL + "/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            year: year,
            rating: rating
        })

    }).then(response => response.json())
        .then(data => data)

}

//creates the individual movie cards
function createCard(data) {
    let html = '';
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        let movieData = data[i]
        let movieCardTitle = movieData.title;
        let movieCardYear = movieData.year;
        let movieCardRating = movieData.rating;

    }

}

//loading page
function loadPage() {
    document.querySelector(".content").style.display = "none"
    fetch(mainURL)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".loader").style.display = "none"
            document.querySelector(".content").style.display = "block"
        });
}


$(document).ready(function () {
    $('.add-movie-to-db').click(function () {
        newMovie.title = $('#add-title').val();
        newMovie.year = $('#add-year').val();
        newMovie.rating = $('#add-rating').val();
        newMovie.genre = $('#add-genre').val();
        addMovieList()
        renderMovies()
    });

});