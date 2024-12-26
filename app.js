const body = document.body;
const timerDisplay = document.createElement('div');
timerDisplay.style.fontSize = '2em';
timerDisplay.textContent = '0';
const startButton = document.createElement('button');
startButton.textContent = 'Старт';
const stopButton = document.createElement('button');
stopButton.textContent = 'Стоп';
const resetButton = document.createElement('button');
resetButton.textContent = 'Сброс';
body.appendChild(timerDisplay);
body.appendChild(startButton);
body.appendChild(stopButton);
body.appendChild(resetButton);
let timer = null;
let count = 0;
startButton.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            count++;
            timerDisplay.textContent = count;
        }, 1000);
    }
});
stopButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});
resetButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    count = 0;
    timerDisplay.textContent = '0';
});
