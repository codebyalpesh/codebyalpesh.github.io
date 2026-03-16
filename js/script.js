/* ============================= */
/* TYPING ANIMATION */
/* ============================= */

const words = [
    "Senior Frontend Developer",
    "HTML CSS JavaScript Expert",
    "WordPress & HubSpot Developer",
    "UI Systems Builder"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[i];

    if (isDeleting) { j-- } else { j++ }

    document.getElementById("typing").textContent = currentWord.substring(0, j);

    if (!isDeleting && j === currentWord.length) {

        isDeleting = true;
        setTimeout(type, 1500);
        return;

    }

    if (isDeleting && j === 0) {

        isDeleting = false;
        i++;

        if (i === words.length) {
            i = 0;
        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();

/* ============================= */
/* SCROLL REVEAL */
/* ============================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

/* ============================= */
/* NAVBAR SCROLL EFFECT */
/* ============================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* ============================= */
/* ACTIVE NAV LINK */
/* ============================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ============================= */
/* MOBILE MENU AUTO CLOSE */
/* ============================= */

const navLinksMobile = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinksMobile.forEach(link => {

    link.addEventListener("click", () => {

        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });

        bsCollapse.hide();

    });

});

/* ============================= */
/* SCROLL PROGRESS BAR */
/* ============================= */

const progressBar = document.querySelector(".progress-bar-top");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});