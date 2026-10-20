// =========================
// CURRENT YEAR
// =========================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================
// MOBILE NAVIGATION
// =========================

const navbarMenu = document.getElementById("navbarMenu");

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (
            navbarMenu &&
            navbarMenu.classList.contains("show")
        ) {

            const collapseInstance =
                bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            collapseInstance.hide();
        }

    });

});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const pageSections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "home";

    const scrollPosition = window.scrollY + 150;

    pageSections.forEach((section) => {

        if (scrollPosition >= section.offsetTop) {
            currentSection = section.id;
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, " +
    ".experience-card, .project-card, .education-card, " +
    ".contact-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    currentObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}