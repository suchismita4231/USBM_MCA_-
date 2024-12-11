let blinkingInterval;

const textElement = document.getElementById('bText');

document.getElementById('start').addEventListener('click', () => {
    if (!blinkingInterval) {
        blinkingInterval = setInterval(() => {
            textElement.classList.toggle('hidden');
        }, 500); 
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(blinkingInterval);
    blinkingInterval = null;
    textElement.classList.remove('hidden');
});
