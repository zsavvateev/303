console.log("Привет! Скрипт подключен и работает.");

document.getElementById("update-date").textContent =
    new Date().toLocaleDateString();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(l => {
            l.classList.remove("active");
        });

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

const toggleBtn =
    document.getElementById("toggle-btn");

const extraInfo =
    document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {

    extraInfo.classList.toggle("expanded");

    toggleBtn.textContent =
        extraInfo.classList.contains("expanded")
        ? "Скрыть"
        : "Показать больше";
});

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add(
        "dark-theme"
    );
}

const themeToggle =
    document.getElementById(
        "theme-toggle"
    );

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-theme"
        );

        const isDark =
            document.body.classList.contains(
                "dark-theme"
            );

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );
    }
);

const form =
    document.getElementById(
        "contact-form"
    );

form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const nameInput =
            document.getElementById("name");

        const emailInput =
            document.getElementById("email");

        const nameError =
            document.getElementById(
                "name-error"
            );

        const emailError =
            document.getElementById(
                "email-error"
            );

        let isValid = true;

        if (
            nameInput.value.trim() === ""
        ) {
            nameError.textContent =
                "Введите имя";

            isValid = false;
        } else {
            nameError.textContent = "";
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailPattern.test(
                emailInput.value.trim()
            )
        ) {
            emailError.textContent =
                "Введите корректный email";

            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (isValid) {

            alert(
                "Форма заполнена верно!"
            );

            form.reset();
        }
    }
);
const projects = [

    {
        id: 1,
        title: "Личный сайт-портфолио",
        category: "frontend",
        description:
            "Адаптивный сайт на HTML, CSS и JavaScript."
    },

    {
        id: 2,
        title: "Сайт медицинской комиссии",
        category: "frontend",
        description:
            "Информационный сайт для медицинских работников."
    },

    {
        id: 3,
        title: "Дизайн интернет-магазина",
        category: "design",
        description:
            "Разработка макета интернет-магазина."
    },

    {
        id: 4,
        title: "Учебный проект по JavaScript",
        category: "education",
        description:
            "Практическая работа по изучению JavaScript."
    },

    {
        id: 5,
        title: "Адаптивный лендинг",
        category: "frontend",
        description:
            "Одностраничный сайт с использованием Grid."
    }

];

function createCard(project) {
    return `
        <article
            class="project-card"
            data-category="${project.category}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </article>
    `;
}

function renderProjects(list) {
    const container =
        document.getElementById("projects-grid");

    container.innerHTML =
        list.map(createCard).join("");
}

renderProjects(projects);

const filterButtons =
    document.querySelectorAll(
        ".filters button"
    );

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        filterButtons.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        const filter =
            btn.dataset.filter;

        const filtered =
            filter === "all"
            ? projects
            : projects.filter(
                p =>
                p.category === filter
            );

        renderProjects(filtered);
    });

});

const searchInput =
    document.getElementById(
        "search-input"
    );

searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
            .trim()
            .toLowerCase();

        const filtered =
            projects.filter(
                p =>
                p.title
                .toLowerCase()
                .includes(query)
            );

        renderProjects(filtered);
    }
);