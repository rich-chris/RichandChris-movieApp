"use strict";

const mainURL = "https://wandering-copper-sight.glitch.me/movies";
var newMovie = {};
// newMovie.title = '';
// newMovie.year = '';
// newMovie.rating = '';
var movieCardID;
var movieCardTitle;
var movieCardGenre;
var movieCardRating;
var movieCardYear;
var i;
var movieData;
var attArray;
var searchedMovieTitle;
var randNum;


loadPage()
renderMovies()


//render server data onto webpage
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
        .then(response => response)
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
        .then(data => renderMovies(data));
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
    let html2 = '';
    for (i = 0; i < data.length; i++) {
        movieData = data[i];
        movieCardTitle = movieData.title;
        movieCardYear = movieData.year;
        movieCardRating = movieData.rating;
        movieCardGenre = movieData.genre;
        movieCardID = movieData.id;
        attArray = [movieCardTitle, movieCardGenre, movieCardYear, movieCardRating]
        randNum = Math.floor(Math.random() * (10- 1 + 1)) + 1;

        html += `<div class="media-element ${movieCardID}">
                    <img class="image" id="cardimage"
                            src="img/poster${randNum}.png"/>
                    <p class="movie-title-scroller edit-movie-button datap"><span class="movie-title-bold bolded">Title</span>: ` + movieCardTitle + `</p>
                    <p class="movie-genre-scroller edit-movie-button datap"><span class="movie-genre-bold bolded">Genre</span>: ` + movieCardGenre + `</p>
                    <p class="movie-year-scroller edit-movie-button datap"><span class="movie-title-bold bolded">Release</span>: ` + movieCardYear + `</p>
                    <p class="movie-rating-scroller edit-movie-button datap"><span class="movie-title-bold bolded">Rating</span>: ` + movieCardRating + `</p>
                    <div class="movie-management-btns">
                        <i class="fa-solid fa-trash-can open-delete-movie-modal " id="${movieCardID}"></i>
                        <i class="fa-solid fa-pen-to-square open-edit-movie-modal" id="${movieCardID}" data-title="${movieCardTitle}" data-genre="${movieCardGenre}" data-year="${movieCardYear}" data-rating="${movieCardRating}"></i>
                    </div>
                </div>         
`
        $('.snaps-inline').html(html);

    }
    //id tying to both edit modal and initial edit icon
    html2 += `<button type="submit" class="btn submit-edit" id="submit-edit">Submit</button>
<button type="submit" class="btn close">Close</button>`
    $('.edit-buttons').html(html2);


    $('.open-edit-movie-modal').click(function () {
        $('#edit-movie-modal').css('display', 'block');
        $('#submit-edit').attr('id', `${this.id}`);
        $('#edit-title').attr('value', `${this.dataset.title}`);
        $('#edit-genre').attr('value', `${this.dataset.genre}`);
        $('#edit-rating').attr('value', `${this.dataset.rating}`);
        $('#edit-year').attr('value', `${this.dataset.year}`);
        $('.modal-backdrop').css('display', 'block');


    });
    $('.close').click(function () {
        $('#edit-movie-modal').css('display', 'none');
        $('#add-movie-modal').css('display', 'none');
        $('.modal-backdrop').css('display', 'none');
        $('#movie-description-modal').css('display', 'none');

    });
    $('.open-add-movie-modal').click(function () {
        $('#add-movie-modal').css('display', 'block');
        $('.modal-backdrop').css('display', 'block');
    });
    $(".add-navlink").click(function () {
        $('#add-movie-modal').css('display', 'block');
        $('.modal-backdrop').css('display', 'block');
    });

    $('.open-delete-movie-modal').click(function () {
        deleteMovieList(this.id)
    });
    $('#submit-edit').click(function () {
        movieCardTitle = $('#edit-title').val();
        movieCardGenre = $('#edit-genre').val();
        movieCardYear = $('#edit-year').val();
        movieCardRating = $('#edit-rating').val();
        editMovieList(`${this.id}`, `${movieCardTitle}`, `${movieCardGenre}`, `${movieCardYear}`, `${movieCardRating}`)
        $('#edit-movie-modal').css('display', 'none');
        $('.modal-backdrop').css('display', 'none');

    });


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
        $('#add-movie-modal').css('display', 'none');
        $('.modal-backdrop').css('display', 'none');

    });


});

//search through data on server
function filter_movies() {
    let input = document.getElementById('form-area-search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('media-element');
    for (var i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "";
        }
    }
}

//omdb api search
document.getElementById('form-area-search').addEventListener('keyup', filter_movies);


document.onkeydown = function (e){
    if (e.keyCode === 13) {
        document.getElementById('form-area-new').addEventListener('change', movieAPI)
        searchedMovieTitle = document.getElementById('form-area-new').value

    }
}

//fetch omdb api
function movieAPI(){
    fetch(`https://www.omdbapi.com/?apikey=${OMDB_KEY}&t=${searchedMovieTitle}`)
        .then(response => response.json())
        .then(data => {
            newMovie.title = data.Title;
            newMovie.rating = data.imdbRating;
            newMovie.year = data.Year;
            newMovie.genre = data.Genre;
            newMovie.poster = data.Poster
            addMovieList()
        })


}
