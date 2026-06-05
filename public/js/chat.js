const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const messagesContainer = document.getElementById("messages");
const sendBtn = document.getElementById("send-btn");

chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();

    if (!message) return;

    // Add user message to UI
    addMessage(message, "user");
    userInput.value = "";

    // Disable button while loading
    sendBtn.disabled = true;

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        const result = await response.json();

        if (result.success && result.data && result.data.response) {
            addMessage(result.data.response, "bot");
        } else {
            addMessage(result.message || "Lo siento, hubo un error al procesar tu solicitud.", "bot");
        }
    } catch (error) {
        console.error("Error:", error);
        addMessage("Error de conexión con el servidor.", "bot");
    } finally {
        sendBtn.disabled = false;
    }
});

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    const chatWindow = document.getElementById("chat-window");
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
