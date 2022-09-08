//setting elements
const startBtn = document.getElementById("btn-start");
const resetBtn = document.getElementById("btn-reset");
let timeField = document.getElementById("time-cont");

//variables
let [milliSecond, second, minute, hour] = [0, 0, 0, 0];
let time = "00:00:00:00";
let startBtnState = "start";
let stopWatchId = null;
let resetBtnVisible = false;
timeField.innerText = time;

//event listners for button
startBtn.addEventListener("click", (e) => {
  startBtnState === "start" ? watchStart() : watchPause();
  toggleStartBtn(startBtnState === "start" ? "start" : "stop");
});

resetBtn.addEventListener("click", () => {
  watchReset();
  toggleReset();
  startBtnState = "pause";
  toggleStartBtn(startBtnState === "start" ? "start" : "stop");
});

//Functions
//to change start buttons' state
const toggleStartBtn = (currentState) => {
  if (currentState === "start") {
    startBtnState = "pause";
    startBtn.children[0].classList.add("d-none");
    startBtn.children[1].classList.remove("d-none");
    startBtn.children[2].innerHTML = startBtnState;
  } else {
    startBtnState = "start";
    startBtn.children[0].classList.remove("d-none");
    startBtn.children[1].classList.add("d-none");
    startBtn.children[2].innerHTML = startBtnState;
  }
};

//to toggle reset buttons' visibility
const toggleReset = () => {
  resetBtnVisible
    ? resetBtn.classList.remove("d-none")
    : resetBtn.classList.add("d-none");
};

//to start stopwatch
const watchStart = () => {
  resetBtnVisible = true;
  toggleReset();
  stopWatchId = window.setInterval(() => {
    milliSecond += 1;
    if (milliSecond > 99) {
      milliSecond = 0;
      second += 1;
    }
    if (second > 59) {
      second = 0;
      minute += 1;
    }
    if (minute > 59) {
      minute = 0;
      hour += 1;
    }
    formatTime();
  }, 10);
};

//to pause stopwatch
const watchPause = () => {
  window.clearInterval(stopWatchId);
};

//to reset stopwach
const watchReset = () => {
  watchPause();
  [milliSecond, second, minute, hour] = [0, 0, 0, 0];
  time = "00:00:00:00";
  timeField.innerText = time;
  resetBtnVisible = false;
  toggleReset();
};

//to format time
const formatTime = () => {
  time =
    format(hour, 2) +
    ":" +
    format(minute, 2) +
    ":" +
    format(second, 2) +
    ":" +
    format(milliSecond, 2);
  timeField.innerText = time;
};

//to pad number with 0
const format = (number) => {
  if (number < 10) return "0" + number;
  else if (number > 99) return "00";
  else return number;
};
