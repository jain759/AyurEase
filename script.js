function sendMessage() {
    let input = document.getElementById("chat-input");
    let message = input.value;
    if (message.trim() !== "") {
        let chatBox = document.getElementById("chat-box");
        let newMessage = document.createElement("p");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        input.value = "";
    }
}
