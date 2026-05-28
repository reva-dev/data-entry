const navLink = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const menuLinks = document.querySelectorAll(".nav-menu a");
const form = document.querySelector("#contact-form");
const formHint = document.querySelector("#formHint");

hamburger.addEventListener("click", () => {
    navLink.classList.toggle("active");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => navLink.classList.remove("active"));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formHint.textContent = "Thank you! Your message has been recorded.";
    form.reset();
});
