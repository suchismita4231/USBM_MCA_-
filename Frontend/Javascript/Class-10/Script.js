document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    document.getElementById("error-message").textContent = '';
    document.getElementById("success-message").textContent = '';

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        document.getElementById("error-message").textContent = "All fields are required.";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("error-message").textContent = "Passwords do not match.";
        return;
    }


    document.getElementById("success-message").textContent = "Signup successful!";
   
    document.getElementById("signupForm").reset();
});
