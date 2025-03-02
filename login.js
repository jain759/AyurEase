document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (username && password) {
        localStorage.setItem("loggedInUser", username); // Store login state
        window.location.href = "category.html"; // Redirect to remedies page
    } else {
        alert("Invalid username or password!");
    }
});
