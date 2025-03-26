"use strict";
let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
function updateDisplay() {
    if (minutesDisplay && secondsDisplay) {
        minutesDisplay.textContent = minutes.toString().padStart(2, "0");
        secondsDisplay.textContent = seconds.toString().padStart(2, "0");
    }
}
function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    updateDisplay();
}
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (seconds === 0 && minutes === 0)
                resetTimer();
            else if (seconds === 0 && minutes !== 0) {
                minutes--;
                seconds = 59;
            }
            else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }
}
if (startButton && resetButton) {
    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);
}
updateDisplay();
