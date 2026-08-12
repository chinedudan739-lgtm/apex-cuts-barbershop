// ================================
// APEX CUTS - JAVASCRIPT
// ================================

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("mobile-active");

    if (nav.classList.contains("mobile-active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("mobile-active");
        menuBtn.textContent = "☰";

    });

});


// HEADER EFFECT WHEN SCROLLING

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5, 5, 5, 0.98)";
        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.35)";

    } else {

        header.style.background = "rgba(5, 5, 5, 0.95)";
        header.style.boxShadow = "none";

    }

});


// FADE-IN ANIMATION

const cards = document.querySelectorAll(
    ".service-card, .barber-card, .gallery-item, .review-card"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


// CURRENT YEAR

const footer = document.querySelector(".footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        `© ${year} Apex Cuts Barbershop. Demo website created for portfolio purposes.`;

}