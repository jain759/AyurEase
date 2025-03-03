document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let storedUser = localStorage.getItem("registeredUser");
    let storedPass = localStorage.getItem("registeredPass");

    if (username === storedUser && password === storedPass) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "category.html"; 
    } else {
        alert("Invalid username or password!");
    }
});
