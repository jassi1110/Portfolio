console.log("Hello")
window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("Jassi");
var navbar = document.querySelector(`.navigation`)
var sticky = navbar.offsetTop;
function myFunction() {
if (window.pageYOffset <= 45) {
    navbar.classList.remove("sticky");
} 
else {
    navbar.classList.add("sticky")
}
}