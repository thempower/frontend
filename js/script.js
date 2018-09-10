//top menu script
// creating let

let topMenu = document.querySelector(".topmenu");
let topMenuIcons = document.querySelectorAll(".topmenu ul li a i");
let position = window.scrollY;

// function increasing opacity and change email color
function increaseOpacity() {
    if (position > 1) {

        topMenu.style.backgroundColor = "rgba(0, 0, 0, .5)";
        topMenu.style.color = "#00CC9A";


    } else {


        // topMenu.style.backgroundColor = "rgba(0, 0, 0, 1";
        // topMenu.style.color = "#00CC9A";


    }
    topMenu.style.backgroundColor = "rgba(0, 0, 0, .8)";
    topMenu.style.color = "#00CC9A";
}
//calling function
window.addEventListener('scroll', increaseOpacity)


//scroll to
// let scroll = document.querySelector("#scroll");
// let features = document.querySelector(".features");

// scroll.addEventListener("click", function () {

//     window.scrollTo(0, 1000);

//     // this changes the scrolling behavior to "smooth"
//     window.scrollTo({
//         top: 1000,
//         behavior: "instant"
//     });

//     // 
// }, );

// Scroll to JQUERY
//Scroll to features

$("#scroll").click(function () {
    $('html, body').animate({
        scrollTop: $(".features").offset().top
    }, 1000);

});
//scroll to top
$("#scrollToTop").click(function () {
    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 1000);

});