document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const slideMenu = document.getElementById("slideMenu");
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const body = document.body;
    let lastScrollY = window.scrollY;

    // Scroll behavior
    window.addEventListener("scroll", () => {
        header.classList.toggle("hidden", window.scrollY > lastScrollY);
        lastScrollY = window.scrollY;
    });

    // Hamburger menu toggle
    hamburgerMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        slideMenu.classList.toggle("active");
        body.classList.toggle("menu-active");
        hamburgerMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!slideMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
            slideMenu.classList.remove("active");
            body.classList.remove("menu-active");
            hamburgerMenu.classList.remove("active");
        }
    });

    // Initialize animations
    AOS.init({ duration: 1000, once: true });
});

// Initialize EmailJS with your public key
(function() {
    emailjs.init("2kWmZWDlgqbipEELd"); // Use your EmailJS Public Key here
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Send form data to EmailJS
    emailjs.sendForm("service_xn1x4hk", "template_dd67mff", this)
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
});


