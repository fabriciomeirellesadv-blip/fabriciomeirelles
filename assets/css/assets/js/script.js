// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("active");

    });


    nav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

        });

    });

}


// =========================================================
// HEADER SCROLL EFFECT
// =========================================================

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", function () {

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

        function (entries) {

            entries.forEach(function (entry) {

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


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("active");

    });

}
