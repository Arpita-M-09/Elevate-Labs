// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent (demo).");
});

// Dark mode CSS dynamically injected
const style = document.createElement('style');
style.innerHTML = `
.dark-mode {
    background: #121212;
    color: #f5f5f5;
}
.dark-mode .navbar {
    background: #333;
}
.dark-mode .project-card {
    background: #1e1e1e;
}
`;
document.head.appendChild(style);
