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

const scrollHeader = () => {
    const sticky = document.getElementById("sticky")

    if (this.scrollY >= 150) {
        sticky.classList.remove("lg:top-[-100%]")
        sticky.classList.add("bg-black/80")
    }else {
        sticky.classList.add("lg:top-[-100%]")
        sticky.classList.remove("bg-black/80")
    }
};

window.addEventListener("scroll", scrollHeader)