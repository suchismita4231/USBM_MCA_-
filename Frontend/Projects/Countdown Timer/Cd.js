let countdownInterval;
let timeLeft;

document.getElementById('start').addEventListener('click', () => {
    const inputTime = document.getElementById('inputTime').value;
    timeLeft = parseInt(inputTime, 10);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    clearInterval(countdownInterval); // Clear any existing interval
    updateDisplay();

    countdownInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        } else {
            timeLeft--;
            updateDisplay();
        }
    }, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(countdownInterval);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(countdownInterval);
    timeLeft = 0;
    updateDisplay();
    document.getElementById('inputTime').value = '';
});

function updateDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
