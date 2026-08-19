// =========================
// MOBILE MENU
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (!menuToggle || !nav) {
        return;
    }

    // Abrir / fechar menu
    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        nav.classList.toggle("active");

    });


    // Fechar menu ao clicar em qualquer link
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

        });

    });

});

// =========================================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


// =========================================================
// HEADER SCROLL EFFECT
// =========================================================

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


// =========================================================
// REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".section, .card, .step, .number-item"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

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

} else {

    revealElements.forEach(element => {

        element.classList.add("active");

    });

}
