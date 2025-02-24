
// Simulating a basic chat
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
        const messageElement = document.createElement("p");
        messageElement.textContent = `You: ${message}`;
        messagesDiv.appendChild(messageElement);
        messageInput.value = "";
    }
}
