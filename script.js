// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Firebase Config (Replace with your own Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const chatRef = ref(db, "messages");

// Send Message Function
document.getElementById("sendBtn").addEventListener("click", function () {
    const message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        push(chatRef, { text: message });
        document.getElementById("messageInput").value = "";
    }
});

// Load Messages in Real-Time
onChildAdded(chatRef, (snapshot) => {
    const message = snapshot.val().text;
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    document.getElementById("messages").appendChild(messageElement);
});
