document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUser = localStorage.getItem("registeredUser");
    let storedPass = localStorage.getItem("registeredPass");

    if (username === storedUser && password === storedPass) {
        localStorage.setItem("loggedInUser", username); // Mark user as logged in
        window.location.href = "categories.html"; // Redirect to remedies page
    } else {
        alert("Invalid username or password!");
    }
});
