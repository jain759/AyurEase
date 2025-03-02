document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let newUsername = document.getElementById("signup-username").value;
    let newPassword = document.getElementById("signup-password").value;

    if (newUsername && newPassword) {
        localStorage.setItem("registeredUser", newUsername);
        localStorage.setItem("registeredPass", newPassword);
        alert("Signup successful! Redirecting to login.");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please fill in all fields.");
    }
});
