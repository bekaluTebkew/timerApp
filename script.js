//BY THE WAY I'VE CLEANED UP YOUR JANKY CSS AS WELL CHECK IT OUT YOU MIGHT LEARN SOMETHING
// AM JUST ASSIGNING THE DOM ELEMENTS TO VARIABLES FOR EASY ACCESS
const inputField = document.querySelector(".input-field");
const inputBtn = document.querySelector(".start-timer");
const timerClock = document.querySelector(".timer-clock");

const hourDOM = document.querySelector(".second");
const minuteDOM = document.querySelector(".minute");
const secondDOM = document.querySelector(".hour");

const startTimer = document.querySelector(".start-timer");
const pauseTimer = document.querySelector(".Pause-timer");
const stopTimer = document.querySelector(".Stop-timer");

let totalTimeInSeconds;

const realTimerLogic = function () {
  // HERE AM TAKING THE INPUT VALUES AND STORING THEM INTO THESE VARIABLES

  let x = hourDOM.value;
  let y = minuteDOM.value;
  let z = secondDOM.value;
  // AND HERE AM CONVERTING THE TIME INTO SECONDS FOR EASIER MANIPULATION

  totalTimeInSeconds = x * 3600 + y * 60 + z;

  // THIS IS THE FUNCTION WHICH COUNTS DOWN THE TIME BY ONE SECOND

  setInterval(() => {
    // NOW PAY ATTENTION HERE CUZ THIS IS WHERE THE MAGIC HAPPENS AM PREPARING THE STRINGS TO BE DISPLAYED BY USING SIMPLE MATH

    const second = `${totalTimeInSeconds % (3600 / 60)}`.padStart(2, 0);

    const hour = `${
      totalTimeInSeconds > 3600
        ? `${Math.trunc(totalTimeInSeconds / 3600)}`
        : "0"
    }`.padStart(2, 0);
    // FORMATTING THE MINUTE IS A LITTLE BIT COMPLICATED BUT U SHOULD BE ABLE TO UNDERSTAND IT AND FIX SOME OF IT (I MESSED UP HERE I ADMIT); IF NOT CONTACT ME

    let minute;
    if (Math.trunc(totalTimeInSeconds / 3600) < 1) {
      minute = `${Math.trunc(totalTimeInSeconds / 60)}`.padStart(2, 0);
    }

    if (Math.trunc(totalTimeInSeconds / 3600) >= 1) {
      minute = `${Math.trunc(totalTimeInSeconds / 60 / 2)}`.padStart(2, 0);
    }
    // THE TIMER TURNS RED WHEN IT REACHES 5 SECONDS

    if (totalTimeInSeconds === 5) {
      timerClock.style.color = "red";
    }
    // THE TIMER RETURNS(SHORTS-CIRCUITS IN PROFESSIONAL TERM) IF THE TIME REACHES ZERO AND THE REST OF THE CODE WON'T BE EXECUTED

    if (totalTimeInSeconds === -1) {
      return;
    }
    // IF THE TIMER DOESN'T GET TO ZERO THIS IS WHAT HAPPENS
    // FIRST THE totalTimeInSeconds DECREASES BY 1 SECOND EVERY SECOND

    totalTimeInSeconds--;
    // SECOND THE TIMER IS CLEARED

    timerClock.textContent = "";
    // THIRD THE TIMER DISPLAYS THE FORMATTED HOUR , MINUTE , SECOND IN THE BROWSER WINDOW

    timerClock.insertAdjacentText("afterbegin", `${hour}:${minute}:${second}`);
  }, 1000);
};

// FINALLY WE CALL THE FUNCTION INSIDE THE EVENT LISTENER LIKE U CAN SEE BELOW

startTimer.addEventListener("click", function () {
  realTimerLogic();
});

// -------------------------------------OLD CODE----------------------------

// // Create the timer logic
// const timerLogic = function () {
//   let i = inputField.value;
//   let t = i * 60;

//   setInterval(() => {
//     // Format Minute and Second
//     let min = String(Math.trunc(t / 60)).padStart(2, 0);
//     let sec = String(t % 60).padStart(2, 0);
//     // Decrease by 1 second
//     t--;
//     // Stop countdown
//     if (t < 0) {
//       timerClock.textContent = "Time's UP";
//       return;
//     };
//     // Display Timer in browser window
//     timerClock.textContent = '';
//     timerClock.insertAdjacentText('afterbegin', `${min}:${sec}`);

//   }, 1000);
// };
// inputBtn.addEventListener('click', function () {
//   // Call the funtion
//   // timerLogic();
// });
