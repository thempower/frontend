// creating let
let topMenu = document.querySelector(".topmenu");
let topMenuIcons = document.querySelectorAll(".topmenu ul li a i");
// function increasing opacity and change email color
function increaseOpacity() {
    topMenu.style.backgroundColor = "rgba(0, 0, 0, .8)";
    topMenu.style.color = "#00CC9A";
}
//calling function
window.addEventListener('scroll', increaseOpacity)