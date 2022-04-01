"use strict";

const mainURL = "https://wandering-copper-sight.glitch.me/movies";
var newMovie = {};
// newMovie.title = '';
// newMovie.year = '';
// newMovie.rating = '';
var movieCardID;
var i;


loadPage()
renderMovies()

function renderMovies() {
    fetch(mainURL)
        .then(response => response.json())
        .then(data => createCard(data))
        .catch(error => console.log(error))
}

//add a movie
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
        .then(data => renderMovies(data))
        .catch(error => console.error(error));

}

//delete a movie
function deleteMovieList(id) {
    fetch(mainURL + "/" + id, {
        method: 'DELETE'
    }).then(response => {
        response.json()
    })
        .then(data => (data)
        );
}

// edit a movie
function editMovieList(id, title, genre, year, rating) {
    fetch(mainURL + "/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            year: year,
            rating: rating,
            genre: genre
        })

    }).then(response => response.json())
        .then(data => data)

}

//creates the individual movie cards
function createCard(data) {
    let html = '';
    console.log(data)
    for (i = 0; i < data.length; i++) {
        let movieData = data[i];
        let movieCardTitle = movieData.title;
        let movieCardYear = movieData.year;
        let movieCardRating = movieData.rating;
        let movieCardGenre = movieData.genre;
         movieCardID = movieData.id;

        html += `<div class="media-element ${movieCardID}">
                    <img class="image"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/158090/trek.png"/>
                    <i class="fa-solid fa-circle-xmark"></i>
                    <p class="movie-title-scroller edit-movie-button">Title: ` + movieCardTitle + `</p>
                    <p class="movie-title-scroller edit-movie-button">Genre: ` + movieCardGenre + `</p>
                    <p class="movie-title-scroller edit-movie-button">Year: ` + movieCardYear + `</p>
                    <p class="movie-title-scroller edit-movie-button">Rating: ` + movieCardRating + `</p>
                    <div class="movie-management-btns">
                        <i class="fa-solid fa-trash-can open-delete-movie-modal " id="${movieCardID}"></i>
                        <i class="fa-solid fa-pen-to-square open-edit-movie-modal"></i>
                    </div>

                </div>         
`

        $('.snaps-inline').html(html);


        $('.open-edit-movie-modal').click(function () {
            $('#edit-movie-modal').css('display', 'block')
        });
        $('.close').click(function () {
            $('#edit-movie-modal').css('display', 'none');
            $('#add-movie-modal').css('display', 'none');
        });
        $('.open-add-movie-modal').click(function () {
            $('#add-movie-modal').css('display', 'block')
        });
        $('.open-delete-movie-modal').click(function () {
            console.log('hi')
            console.log(this.id)
            deleteMovieList(this.id)
            renderMovies()
        });


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

//add movie to the database
$(document).ready(function () {
    $('.add-movie-to-db').click(function () {
        newMovie.title = $('#add-title').val();
        newMovie.year = $('#add-year').val();
        newMovie.rating = $('#add-rating').val();
        newMovie.genre = $('#add-genre').val();
        addMovieList()

    });
    $('.open-delete-movie-modal').click(function () {



    });


});


