let timer;
let isRunning = false;
let lapCount = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function lapReset() {
  if (isRunning) {
    const lapsList = document.getElementById('laps');
    const lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsList.insertBefore(lapItem, lapsList.firstChild);
    lapCount++;
  } else {
    document.getElementById('display').textContent = '00:00:00';
    lapCount = 1;
    document.getElementById('laps').innerHTML = '';
  }
}

function reset() {
  clearInterval(timer); // Clear any running timer
  isRunning = false; // Set isRunning to false
  document.getElementById('startStop').textContent = 'Start'; // Reset the button text
  document.getElementById('display').textContent = '00:00:00'; // Reset the display
  lapCount = 1; // Reset lap count
  document.getElementById('laps').innerHTML = ''; // Clear lap list
}
  
function updateDisplay() {
  const display = document.getElementById('display');
  let currentTime = display.textContent;
  let timeArray = currentTime.split(':');
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  let seconds = parseInt(timeArray[2]);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  display.textContent =
    (hours < 10 ? '0' : '') + hours + ':' +
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds;
}
