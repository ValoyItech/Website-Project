document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const slideMenu = document.getElementById("slideMenu");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    let lastScrollY = window.scrollY;

    // Hide/Show header on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            header.classList.add("hidden"); // Hide header when scrolling down
        } else {
            header.classList.remove("hidden"); // Show header when scrolling up
        }
        lastScrollY = window.scrollY;
    });

    // Hamburger menu toggle
    hamburgerMenu.addEventListener("click", function () {
        slideMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!slideMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            slideMenu.classList.remove("active");
        }
    });
});