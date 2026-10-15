// Mobile navigation
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
    });
});

// Highlight the current section in the navigation.
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
    let current = "home";
    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    links.forEach(function (link) {
        const active = link.getAttribute("href") === "#" + current;
        link.classList.toggle("active", active);
    });
}
window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// Keep the footer year current.
document.getElementById("year").textContent = new Date().getFullYear();

// Contact CTA: opens the visitor's email application.
// Replace this placeholder address in index.html before publishing.
const emailLink = document.getElementById("email-link");
emailLink.addEventListener("click", function (event) {
    if (emailLink.href.includes("YOUR_EMAIL@example.com")) {
        event.preventDefault();
        alert("Before publishing, replace YOUR_EMAIL@example.com in index.html with your email address.");
    }
});
