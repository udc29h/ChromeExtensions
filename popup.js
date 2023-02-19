let seconds = 60;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    seconds--;
    if (seconds === 0) {
      clearInterval(intervalId);
    }
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const timerDisplay = document.querySelector('#timer');
  timerDisplay.textContent = `${seconds} seconds`;
}

function resetTimer() {
  clearInterval(intervalId);
  seconds = 60;
  updateTimer();
}

function pauseTimer() {
  clearInterval(intervalId);
}

document.querySelector('#reset').addEventListener('click', resetTimer);
document.querySelector('#pause').addEventListener('click', pauseTimer);

startTimer();
