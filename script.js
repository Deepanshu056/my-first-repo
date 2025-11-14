document.addEventListener("DOMContentLoaded", () => {

    // AOS init
    if (typeof AOS !== "undefined") {
        AOS.init({ duration: 900, once: true });
    }

    // GSAP
    if (typeof gsap !== "undefined") {
        gsap.from(".hero-content h1", { opacity: 0, y: 50, duration: 1 });
        gsap.from(".hero-content p", { opacity: 0, y: 50, delay: 0.3 });
        gsap.from(".hero-btn", { opacity: 0, scale: 0.9, delay: 0.6 });
    }

    // Smooth scroll
    document.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Enroll alert
    document.querySelector(".enroll-btn")?.addEventListener("click", () => {
        alert("Enrollment submitted! Our team will contact you.");
    });

    // Mobile menu
    const menu = document.querySelector(".mobile-menu");
    document.querySelector(".menu-btn")?.addEventListener("click", () => menu.style.right = "0");
    document.querySelector(".close-menu")?.addEventListener("click", () => menu.style.right = "-100%");

    // Dark / Light Mode
    const modeBtn = document.querySelector(".mode-toggle");
    modeBtn?.addEventListener("click", () => {
        document.body.classList.toggle("light");
        const icon = modeBtn.querySelector("i");
        icon.classList.replace(
            document.body.classList.contains("light") ? "fa-moon" : "fa-sun",
            document.body.classList.contains("light") ? "fa-sun" : "fa-moon"
        );
    });
});