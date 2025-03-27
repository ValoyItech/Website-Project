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


document.addEventListener("DOMContentLoaded", function () {
    // Canvas setup
    const canvas = document.getElementById('canvasBackground');
    const ctx = canvas.getContext('2d');
    
    // Generate particles
    let particles = generateParticles(300);
    
    function generateParticles(num) {
        const particles = [];
        for (let i = 0; i < num; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3, // Vary particle size
                speedX: (Math.random() - 0.5) * 0.2, // Random speed
                speedY: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() // Vary brightness
            });
        }
        return particles;
    }

    // Resize canvas on window resize
    function resizeCanvas() {
        const homeSection = document.getElementById('home');
        canvas.width = homeSection.offsetWidth;
        canvas.height = homeSection.offsetHeight;
        particles = generateParticles(300); // Refresh particles
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initialize canvas size

    // Animation loop
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Semi-transparent background for motion blur

        ctx.fillStyle = '#ffffff'; // Particle color
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();

            // Update particle position
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Bounce on edges
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }

            // Flicker effect
            particle.opacity = Math.random() * 0.2 + 0.5;
        });

        requestAnimationFrame(animate);
    }

    animate();
});

document.addEventListener("DOMContentLoaded", function () {
    function typeEffect(element, text, speed = 50) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    let visionMission = document.getElementById("vision-text");
    if (visionMission) {
        let text = "At ValoyItech, we envision a world where small businesses are empowered with reliable IT services that allow them to thrive in the digital age. Our mission is to help businesses of all sizes, but especially small ones, stay connected, expand their reach, and harness the power of technology to drive growth and success. We believe in creating scalable IT solutions that cater to the unique needs of small businesses. Whether it's through efficient networking, robust cybersecurity, or cutting-edge web design, we are committed to providing services that enhance connectivity, increase productivity, and ensure long-term success in an increasingly competitive environment. By helping businesses embrace technology, we aim to foster a community of thriving enterprises capable of accessing wider audiences, improving operational efficiency, and staying ahead in their industries.";
        visionMission.innerHTML = ""; // Clear initial content
        typeEffect(visionMission, text);
    }
});

