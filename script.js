// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Header Auto Hide on Scroll
  let prevScrollPos = window.pageYOffset;
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
  });
  
  // Sidebar Navigation Toggle
  const hamburger = document.getElementById("hamburgerMenu");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click from closing immediately
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
});

// Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.style.left = "-250px";
    }
});
  
  // Simple Hero Slider
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const slideInterval = 5000; // 5 seconds
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // Start slider
  showSlide(currentSlide);
  setInterval(nextSlide, slideInterval);
  
  // Close sidebar when a menu link is clicked
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.style.left = "-250px";
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('missionCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particlesArray = [];
    const numberOfParticles = 300;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 8 + 5; // Guaranteed large size (min 5, max 13)
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
            if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
        }
        draw() {
            ctx.fillStyle = "rgba(255, 0, 0, 0.9)";
            ctx.shadowColor = "rgba(255, 0, 0, 1)";
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    init();
    animate();
});


  
  document.addEventListener("DOMContentLoaded", function(){
    // Canvas Animation (same as before)
    const canvas = document.getElementById('missionCanvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    let particlesArray = [];
    const numberOfParticles = 50;
    
    class Particle {
      constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if(this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }
      draw(){
        ctx.fillStyle = "#e91e63";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    function initParticles(){
      particlesArray = [];
      for(let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particle());
      }
    }
    
    function animateParticles(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }
    
    initParticles();
    animateParticles();
    
    // JavaScript Typewriter Effect for Mission Text
    const missionTextElement = document.getElementById('missionText');
    const fullText = missionTextElement.innerHTML;
    missionTextElement.innerHTML = ""; // Clear the content
    let index = 0;
    
    function typeWriter() {
      if (index < fullText.length) {
        missionTextElement.innerHTML += fullText.charAt(index);
        index++;
        setTimeout(typeWriter, 40); // Adjust speed (40ms per character)
      }
    }
    
    typeWriter();
  });

  
