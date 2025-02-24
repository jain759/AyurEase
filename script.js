document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("messageInput");
    const messagesContainer = document.getElementById("messages");

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement("p");
            messageElement.textContent = messageText;
            messagesContainer.appendChild(messageElement);
            messageInput.value = "";
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

    document.querySelector("button").addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

