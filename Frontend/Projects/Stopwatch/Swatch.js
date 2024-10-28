let time = 0;
let running = false;
let interval;

const display = document.getElementById('display');

function updateDisplay() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            time++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    running = false;
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    running = false;
    clearInterval(interval);
    time = 0;
    updateDisplay();
});
