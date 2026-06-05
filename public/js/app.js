document.addEventListener("DOMContentLoaded", () => {
    console.log("App iniciada");
    checkStatus();
    setupSettings();
});

async function checkStatus() {
    const statusIndicator = document.getElementById("status-indicator");
    try {
        const response = await fetch("/api/agent/status");
        const data = await response.json();
        statusIndicator.textContent = "Online (Server)";
        statusIndicator.style.color = "#4caf50";
    } catch (error) {
        if (localStorage.getItem("GEMINI_API_KEY")) {
            statusIndicator.textContent = "Online (Local)";
            statusIndicator.style.color = "#4caf50";
        } else {
            statusIndicator.textContent = "Offline";
            statusIndicator.style.color = "#f44336";
        }
    }
}

function setupSettings() {
    const modal = document.getElementById("settings-modal");
    const btn = document.getElementById("settings-btn");
    const closeBtn = document.getElementById("close-settings");
    const saveBtn = document.getElementById("save-settings");
    const apiKeyInput = document.getElementById("api-key-input");

    // Cargar key guardada
    apiKeyInput.value = localStorage.getItem("GEMINI_API_KEY") || "";

    btn.onclick = () => modal.style.display = "flex";
    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    saveBtn.onclick = () => {
        const key = apiKeyInput.value.trim();
        if (key) {
            localStorage.setItem("GEMINI_API_KEY", key);
            modal.style.display = "none";

            // Notificar a chat.js que la key cambió
            window.dispatchEvent(new CustomEvent("apiKeyUpdated", { detail: { key } }));
            checkStatus();
        } else {
            localStorage.removeItem("GEMINI_API_KEY");
            checkStatus();
            alert("API Key eliminada. Se intentará usar el servidor.");
        }
    };
}
