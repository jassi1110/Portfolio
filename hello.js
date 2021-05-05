console.log("Hello")
window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("Jassi");
var navbar = document.querySelector(`.navigation`)
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= 40) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }