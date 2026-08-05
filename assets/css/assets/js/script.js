

// =========================
// MOBILE MENU
// =========================


const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


if(menuToggle){

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}



// Fechar menu ao clicar em um link


const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});





// =========================
// HEADER SCROLL EFFECT
// =========================


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


});





// =========================
// REVEAL ANIMATION
// =========================


const revealElements = document.querySelectorAll(
    ".section, .card, .step, .number-item"
);



const observer = new IntersectionObserver(
    
    entries => {


        entries.forEach(entry => {


            if(entry.isIntersecting){

                entry.target.classList.add("reveal-active");

            }


        });


    },

    {

        threshold: 0.15

    }


);



revealElements.forEach(element => {


    element.classList.add("reveal");

    observer.observe(element);


});
