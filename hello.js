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

// For highlighting section in the Navbar
const sections = document.querySelectorAll(`section`)
const navLi = document.querySelectorAll(`.navbar .butns`)

window.addEventListener('scroll' ,()=>{
let current = ''
sections.forEach(section =>{
    const secTop = section.offsetTop
    if(pageYOffset>secTop){
        current = section.getAttribute(`id`)
    }
})
console.log(current)
})