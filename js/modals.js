//Add Movies
const addMovieOpenBtn = document.querySelector(".open-add-movie-modal");
const addMovieCloseBtn = document.querySelector(".add-movie-close-btn");
const addMovieModal = document.querySelector("#add-movie-modal"); //The actual Modal For Adding Movies

// Edit Movies
const openEditMovieModal = document.querySelector(".open-edit-movie-modal"); // Edit icon in scroller
const submitEditBtn = document.querySelector(".submit-edit-btn"); // submit btn inside edit modal
const editMovieCloseBtn = document.querySelector(".edit-movie-close-btn"); // close btn inside edit modal
const editMovieModal = document.querySelector("#edit-movie-modal"); //The actual Modal For editing Movies

//Delete Movies
const openDeleteMovieModal = document.querySelector(".open-edit-movie-modal"); // Edit icon in scroller

//Edit, Delete & Movie Description
// const movieInfoModal = document.querySelector("#movie-info-modal");
// const edit = document.querySelector(".add-movie-close-btn");


//TODO: Open Add Movie Modal
let addMovieToModalFunc = () => addMovieModal.showModal();
let closeAddMovieToModalFunc = () => addMovieModal.close();

addMovieOpenBtn.addEventListener("click", addMovieToModalFunc);
addMovieCloseBtn.addEventListener("click", closeAddMovieToModalFunc);

//TODO: Open Edit Movie Modal
let openEditModal = () => editMovieModal.showModal();
let closeEditMovieToModalFunc = () => editMovieModal.close();

openEditMovieModal.addEventListener("click", openEditModal);
editMovieCloseBtn.addEventListener("click", closeEditMovieToModalFunc);


//TODO: Open Movie Information Modal
