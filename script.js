const inputField = document.querySelector('.input-field');
const inputBtn = document.querySelector('.start-timer');
const timerClock = document.querySelector('.timer-clock');

// Create the timer logic
const timerLogic = function () {
  let i = inputField.value;
  let t = i * 60;

  setInterval(() => {
    // Format Minute and Second
    let min = String(Math.trunc(t / 60)).padStart(2, 0);
    let sec = String(t % 60).padStart(2, 0);
    // Decrease by 1 second
    t--;
    // Stop countdown
    if (t < 0) {
      timerClock.textContent = "Time's UP";
      return;
    };
    // Display Timer in browser window
    timerClock.textContent = '';
    timerClock.insertAdjacentText('afterbegin', `${min}:${sec}`);
    inputBtn.innerHTML = 'Stop Timer';
  }, 1000);
};
inputBtn.addEventListener('click', function () {
  // Call the funtion
  timerLogic();
});

