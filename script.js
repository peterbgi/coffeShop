const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const closeicon = document.getElementById("closeicon");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("right-[0]")
});

closeicon.addEventListener('click', () => {
    navMenu.classList.toggle("right-[0]")
});

navLink.forEach(l => {
    l.addEventListener('click', () => {
        navMenu.classList.toggle("right-[0]")
    });
});