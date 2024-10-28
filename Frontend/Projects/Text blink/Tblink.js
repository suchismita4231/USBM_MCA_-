let blinkingInterval;

const textElement = document.getElementById('bText');

document.getElementById('start').addEventListener('click', () => {
    if (!blinkingInterval) {
        blinkingInterval = setInterval(() => {
            textElement.classList.toggle('hidden');
        }, 500); // Adjust the interval for blink speed (500ms)
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(blinkingInterval);
    blinkingInterval = null;
    textElement.classList.remove('hidden'); // Ensure text is visible when stopped
});
