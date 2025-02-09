// Initialize AOS
AOS.init({
    duration: 1000,
    once: false
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Image Display Function
const imageMap = {
    'booking': 'images/booking.jpg',
    'appointment': 'images/appointment.jpg',
    'analytics': 'images/analytics.jpg',
    'web': 'images/web.jpg',          // Add the path for web image
    'office': 'images/office.jpg',    // Add the path for office image
    'cyber': 'images/cyber.jpg',      // Add the path for cyber image
    'network': 'images/network.jpg',  // Add the path for network image
    'soft': 'images/soft.jpg'         // Add the path for hardware & software image
};

// Slideshow Animation Control
const slider = document.querySelector('.slider');
let isPaused = false;

slider.addEventListener('mouseenter', () => isPaused = true);
slider.addEventListener('mouseleave', () => isPaused = false);

function animateSlider() {
    if (!isPaused) {
        const currentPosition = parseInt(getComputedStyle(slider).transform.split(',')[4] || 0);
        slider.style.transform = `translateX(${currentPosition - 1}px)`;
    }
    requestAnimationFrame(animateSlider);
}
animateSlider();

function showImage(imageKey) {
    const imageSrc = imageMap[imageKey]; // Get the image URL from the map
    if (!imageSrc) {
        console.error("Image key not found:", imageKey);
        return;
    }

    // Assuming you have a modal or a container to display the image
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");

    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
    } else {
        console.error("Modal or Image Element not found");
    }
}

// Function to change the displayed image
function showImage(imageKey) {
    const imageSrc = imageMap[imageKey]; // Get image URL from the map
    if (!imageSrc) {
        console.error("Image key not found:", imageKey);
        return;
    }

    // Find the image container in the HTML and update its source
    let displayImage = document.getElementById("display-image");
    if (displayImage) {
        displayImage.src = imageSrc;
    } else {
        console.error("Display image element not found.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: false
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
        hamburger.classList.toggle("toggle");
    });

    // Close menu when a link is clicked (for mobile UX)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("nav-active");
            hamburger.classList.remove("toggle");
        });
    });
});

// Scroll-aware Navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
    }
});

// Add this to your existing hamburger click handler
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
    }
});

// Update hamburger toggle logic
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        // Toggle menu state
        navLinks.classList.toggle("nav-active");
        hamburger.classList.toggle("toggle");
        
        // Prevent body scroll when menu is open
        document.body.classList.toggle("no-scroll");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".navbar") && navLinks.classList.contains("nav-active")) {
            navLinks.classList.remove("nav-active");
            hamburger.classList.remove("toggle");
            document.body.classList.remove("no-scroll");
        }
    });
});