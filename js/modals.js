//Add Movies
const addMovieOpenBtn = document.querySelector(".open-add-movie-modal");
const addMovieCloseBtn = document.querySelector(".add-movie-close-btn");
const addMovieModal = document.querySelector("#add-movie-modal"); //The actual Modal For Adding Movies

<<<<<<< HEAD
// Edit Movies
const openEditMovieModal = document.querySelector(".open-edit-movie-modal"); // Edit icon in scroller
const submitEditBtn = document.querySelector(".submit-edit-btn"); // submit btn inside edit modal
const editMovieCloseBtn = document.querySelector(".edit-movie-close-btn"); // close btn inside edit modal
const editMovieModal = document.querySelector("#edit-movie-modal"); //The actual Modal For editing Movies

//Movie Description Modal
const movieDescriptionModal = document.querySelector("#movie-description-modal"); // Movie description modal
let mediaElements = Array.from(document.querySelectorAll(".media-element img")); // image container in horizontal
// scroller
const closeMovieDescriptionBtn = document.querySelector(".fa-xmark"); // "x" button to close movie description modal

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

//TODO: Open Movie Description Modal
let openDescriptionModalFunc = () => movieDescriptionModal.showModal();
let closeDescriptionModalFunc = () => movieDescriptionModal.close();

for(let elements of mediaElements) {
    elements.addEventListener("click",openDescriptionModalFunc);
}

closeMovieDescriptionBtn.addEventListener("click",closeDescriptionModalFunc);


infoBtn = document.querySelector("btn")
arrayOfMovies = ["movie1","movie2","movie3"];

for(let i = 0;i < arrayOfMovies.length;i++)
infoBtn.addEventListener("click",()=>{
    console.log("hello")
})
=======
// // Edit Movies
// const openEditMovieModal = document.querySelector(".open-edit-movie-modal"); // Edit icon in scroller
// const submitEditBtn = document.querySelector(".submit-edit-btn"); // submit btn inside edit modal
// const editMovieCloseBtn = document.querySelector(".edit-movie-close-btn"); // close btn inside edit modal
// const editMovieModal = document.querySelector("#edit-movie-modal"); //The actual Modal For editing Movies
//
// //Movie Description Modal
// const movieDescriptionModal = document.querySelector("#movie-description-modal"); // Movie description modal
// let mediaElements = Array.from(document.querySelectorAll(".media-element img")); // image container in horizontal
// // scroller
// const closeMovieDescriptionBtn = document.querySelector(".fa-xmark"); // "x" button to close movie description modal
//
// //TODO: Open Add Movie Modal
// let addMovieToModalFunc = () => addMovieModal.showModal();
// let closeAddMovieToModalFunc = () => addMovieModal.close();
//
// addMovieOpenBtn.addEventListener("click", addMovieToModalFunc);
// addMovieCloseBtn.addEventListener("click", closeAddMovieToModalFunc);
//
// // TODO: Open Edit Movie Modal
// // let openEditModal = () => editMovieModal.showModal();
// // let closeEditMovieToModalFunc = () => editMovieModal.close();
// //
// // openEditMovieModal.addEventListener("click", openEditModal);
// // editMovieCloseBtn.addEventListener("click", closeEditMovieToModalFunc);
//
// //TODO: Open Movie Description Modal
// let openDescriptionModalFunc = () => movieDescriptionModal.showModal();
// let closeDescriptionModalFunc = () => movieDescriptionModal.close();
//
// for(let elements of mediaElements) {
//     elements.addEventListener("click",openDescriptionModalFunc);
// }
//
// closeMovieDescriptionBtn.addEventListener("click",closeDescriptionModalFunc);
>>>>>>> 1fe52d7d8394758acc1056f69d5d58123cb2f8be
