document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;

    if (newUsername && newPassword) {
        localStorage.setItem("registeredUser", newUsername);
        localStorage.setItem("registeredPass", newPassword);
        alert("Signup successful! Redirecting to login.");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please fill in all fields.");
    }
});
