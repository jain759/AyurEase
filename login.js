document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let storedUser = localStorage.getItem("registeredUser");
    let storedPass = localStorage.getItem("registeredPass");

    if (username === storedUser && password === storedPass) {
        localStorage.setItem("loggedInUser", username); // Mark user as logged in
        window.location.href = "category.html"; // Redirect to remedies page
    } else {
        alert("Invalid username or password!");
    }
});
