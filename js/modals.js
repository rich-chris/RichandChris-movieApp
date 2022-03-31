//Add Movies
const addMovieOpenBtn = document.querySelector(".open-add-movie-modal");
const addMovieCloseBtn = document.querySelector(".add-movie-close-btn");
const addMovieModal = document.querySelector("#add-movie-modal"); //The actual Modal For Adding Movies

// Edit Movies
const editMovieOpenBtn = document.querySelector(".open-edit-movie-modal");
const editMovieCloseBtn = document.querySelector(".edit-movie-close-btn");
const editMovieModal = document.querySelector("#edit-movie-modal"); //The actual Modal For editing Movies




//TODO: Open Add Movie Modal
let addMovieToModalFunc = () => addMovieModal.showModal();
let closeAddMovieToModalFunc = () => addMovieModal.close();

addMovieOpenBtn.addEventListener("click", addMovieToModalFunc);
addMovieCloseBtn.addEventListener("click", closeAddMovieToModalFunc);

//TODO: Open Edit Movie Modal
let editMovieToModalFunc = () => editMovieModal.showModal();
let closeEditMovieToModalFunc = () => editMovieModal.close();

editMovieOpenBtn.addEventListener("click", editMovieToModalFunc);
editMovieCloseBtn.addEventListener("click", closeEditMovieToModalFunc);