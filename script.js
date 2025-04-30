// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let errors = [];

    // Simple validation
    if (name.value.trim() === "") {
        errors.push("Name is required.");
    }

    if (!validateEmail(email.value)) {
        errors.push("Please enter a valid email.");
    }

    if (message.value.trim() === "") {
        errors.push("Message cannot be empty.");
    }

    // Show errors or submit
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Message sent successfully!");
        form.reset(); // Optional: clear the form after successful submission
    }
    });

    // Helper function to validate email format
    function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
    }

    // Back-to-Top Button Functionality
    const backToTopButton = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block"; // Show button when scrolled 300px
        } else {
            backToTopButton.style.display = "none"; // Hide button when at the top
        }
    });
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
            top: targetElement.offsetTop - 50,  // Adjusting the scroll position for header
            behavior: 'smooth'
            });
        });
    });
});