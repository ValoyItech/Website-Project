// Initialize AOS
AOS.init({
    duration: 1000,
    once: false
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Image Map
const imageMap = {
    'booking': 'images/booking.jpg',
    'appointment': 'images/appointment.jpg',
    'analytics': 'images/analytics.jpg',
    'web': 'images/web.jpg',
    'office': 'images/office.jpg',
    'cyber': 'images/cyber.jpg',
    'network': 'images/network.jpg',
    'soft': 'images/soft.jpg'
};

// Slideshow Animation Control
const slider = document.querySelector('.slider');
let isPaused = false;

// Fixed animateSlider function
function animateSlider() {
    if (!isPaused && slider) {
        const firstImage = slider.firstElementChild;
        if (!firstImage) return;
        
        const slideWidth = firstImage.offsetWidth + 20;
        const currentPosition = parseInt(getComputedStyle(slider).transform.split(',')[4] || 0);
        
        if (currentPosition <= -slideWidth * (slider.children.length/2)) {
            slider.style.transform = 'translateX(0)';
        } else {
            slider.style.transform = `translateX(${currentPosition - 1}px)`;
        }
    }
    requestAnimationFrame(animateSlider);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    // Initialize animations
    AOS.refresh();

    // Hamburger Menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
        hamburger.classList.toggle("toggle");
        document.body.classList.toggle("no-scroll");
    });

    // Close menu on link click
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("nav-active");
            hamburger.classList.remove("toggle");
            document.body.classList.remove("no-scroll");
        });
    });

    // Start slider animation
    if (slider) {
        slider.addEventListener('mouseenter', () => isPaused = true);
        slider.addEventListener('mouseleave', () => isPaused = false);
        animateSlider();
    }
});

// Scroll-aware Navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (!navbar) return;
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
        document.body.classList.remove('no-scroll');
    }
});

// Single showImage function
function showImage(imageKey) {
    const imageSrc = imageMap[imageKey];
    if (!imageSrc) {
        console.error("Image key not found:", imageKey);
        return;
    }

    const displayImage = document.getElementById("display-image");
    if (displayImage) {
        displayImage.src = imageSrc;
    } else {
        console.error("Display image element not found.");
    }
}

const videos = [
    "https://www.youtube.com/embed/9r_10w9ncTo?si=pTvvwM2sk1EI-WKX&autoplay=1&rel=0&modestbranding=1", // New video starts first
        "https://www.youtube.com/embed/x3E2jGchp7I?si=iSXUfzcIX1DaWalf&autoplay=1&rel=0&modestbranding=1",
        "https://www.youtube.com/embed/qNNeb0ONmLQ?si=QiPajMEHos4Jg_8x&autoplay=1&rel=0&modestbranding=1"
];

let currentIndex = 0;
const videoFrame = document.getElementById("video-frame");

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? videos.length - 1 : currentIndex - 1;
    videoFrame.src = videos[currentIndex];
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex === videos.length - 1) ? 0 : currentIndex + 1;
    videoFrame.src = videos[currentIndex];
});
