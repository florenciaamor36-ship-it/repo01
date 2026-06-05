document.addEventListener("DOMContentLoaded", () => {
    console.log("App iniciada");
    checkStatus();
});

async function checkStatus() {
    const statusIndicator = document.getElementById("status-indicator");
    try {
        const response = await fetch("/api/agent/status");
        const data = await response.json();
        statusIndicator.textContent = "Online";
        statusIndicator.style.color = "#4caf50";
    } catch (error) {
        statusIndicator.textContent = "Offline";
        statusIndicator.style.color = "#f44336";
    }
}
