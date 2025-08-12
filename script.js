document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Error message elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    let valid = true;

    // Name Validation
    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = "Name can only contain letters and spaces";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation (Regex)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email address";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Message Validation
    if (message === "") {
        messageError.textContent = "Message is required";
        valid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    // If all fields are valid
    if (valid) {
        successMessage.textContent = "Form submitted successfully!";
        
        // Clear form fields
        document.getElementById("contactForm").reset();

        // Hide success after a few seconds
        setTimeout(() => {
            successMessage.textContent = "";
        }, 3000);
    } else {
        successMessage.textContent = "";
    }
});
