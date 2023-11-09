const form = document.getElementById("registrationForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && emailRegex.test(email) && username && password && dob) {
        // You can add more complex password strength checks here
        confirmation.style.display = "block";
        form.style.display = "none";
    } else {
        alert("Please fill in all fields with valid information.");
    }
});

