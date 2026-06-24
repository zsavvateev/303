console.log("Привет! Скрипт подключен и работает.");

document.getElementById("update-date").textContent =
    new Date().toLocaleDateString();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l =>
            l.classList.remove("active"));

        link.classList.add("active");
    });
});

const burgerBtn =
    document.getElementById("burger-btn");

const nav =
    document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});