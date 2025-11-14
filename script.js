// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Join Now button popup
document.querySelector(".join-btn").addEventListener("click", () => {
    alert("Thank you for your interest! Membership details coming soon.");
});
