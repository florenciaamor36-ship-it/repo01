import { GoogleGenerativeAI } from "@google/generative-ai";

const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const messagesContainer = document.getElementById("messages");
const sendBtn = document.getElementById("send-btn");

let useClientSide = false;
let clientAI = null;

// Inicializar cliente local si hay una key guardada
const savedKey = localStorage.getItem("GEMINI_API_KEY");
if (savedKey) {
    initClientSide(savedKey);
}

function initClientSide(key) {
    try {
        clientAI = new GoogleGenerativeAI(key);
        useClientSide = true;
        console.log("Gemini Client-Side inicializado");
    } catch (e) {
        console.error("Error inicializando Gemini local:", e);
    }
}

chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();

    if (!message) return;

    addMessage(message, "user");
    userInput.value = "";
    sendBtn.disabled = true;

    try {
        let responseText = "";

        // Intentar primero con el servidor si no estamos forzando modo cliente
        if (!useClientSide) {
            try {
                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message })
                });
                const result = await response.json();
                if (result.success && result.data && result.data.response) {
                    responseText = result.data.response;
                }
            } catch (err) {
                console.warn("Servidor no disponible, intentando modo cliente si es posible...");
            }
        }

        // Si el servidor falló o estamos en modo cliente
        if (!responseText && clientAI) {
            const model = clientAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(message);
            responseText = result.response.text();
        }

        if (responseText) {
            addMessage(responseText, "bot");
        } else {
            const errorMsg = clientAI
                ? "Lo siento, hubo un error al procesar tu solicitud."
                : "Error de conexión. Por favor, configura tu API Key en los ajustes para usar el modo cliente.";
            addMessage(errorMsg, "bot");
        }
    } catch (error) {
        console.error("Error:", error);
        addMessage("Error al comunicarse con Gemini. Revisa tu conexión o API Key.", "bot");
    } finally {
        sendBtn.disabled = false;
    }
});

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    const chatWindow = document.getElementById("chat-window");
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Escuchar cambios en la API Key desde app.js (settings)
window.addEventListener("apiKeyUpdated", (e) => {
    initClientSide(e.detail.key);
});
