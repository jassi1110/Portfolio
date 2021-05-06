// For Sticky Navbar
window.onscroll = function () { myFunction() };
var navbar = document.querySelector(`.navigation`)
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= 40) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
} 


const navLi = document.querySelectorAll(`.highlight`)
let xyz = document.querySelectorAll(`.navbar .butns a`)

navLi.forEach(element => {
    element.addEventListener("click", ()=>{
        xyz.forEach(index =>{
            index.classList.remove(`line`)
            element.classList.add(`line`)
        })

    })
});