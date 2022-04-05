const cursorTag = document.querySelector("div.cursors")
const balls = Array.from(cursorTag.querySelectorAll("div"));
let ballMessage = cursorTag.querySelector("div span");
let movieCarousel = document.querySelector(".movie-carousel");

//TODO MOVEMENT FUNCTIONALITY
//starting aim
let aimX = 0;
let aimY = 0;

// loop through balls to give different positions
balls.forEach((ball, index) => {
    //add mouse movement effect
//grab where mouse starts & where we want it to go
    let currentX = 0;
    let currentY = 0;
    let speed = 0.3 - index * 0.015;



    function animate (){
        // the difference between current mouse position and where im aiming to go + a speed multiplier
        currentX += (aimX - currentX) * speed;
        currentY += (aimY - currentY) * speed;

        //gives updated "current position" metrics
        ball.style.left = `${currentX}px`;
        // console.log(ball)
        ball.style.top = `${currentY}px`;
        // console.log("hthththththththt")
        //RAF calls animate every sec based on your fps
        requestAnimationFrame(animate);
    }
    animate();
})



//function to add mouse movement animation




//Attaches div in .cursor to mouse
function mouseMoveFunc(e){
    aimX = `${e.pageX}`;
    aimY = `${e.pageY}`;
    // console.log(`${e.pageX}`)
}
movieCarousel.addEventListener("mousemove", mouseMoveFunc);








