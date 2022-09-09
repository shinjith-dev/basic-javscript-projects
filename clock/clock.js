//Elements
const timeCont = document.getElementById("time-cont");
const dateCont = document.getElementById("date-cont");

//variables
let second = 0,
  minute = 0,
  hour = 1,
  session = "AM",
  time = "01:00:00 AM";
let week = "Monday",
  day = 1,
  month = "January",
  year = 2001,
  today = "Monday, 01 January 2001";

//week day
const weekDay = () => {
  switch (week) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursaday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Unknown";
  }
};

//month name
const monthName = () => {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "Unknown";
  }
};

//main function
const clock = () => {
  getDateTime();
  time = formatTime();
  timeCont.innerText = time;
  today = formatDate();
  dateCont.innerText = today;
  //update values on each second change
  window.setTimeout(clock, 1000);
};

const getDateTime = () => {
  const date = new Date();
  //time
  second = date.getSeconds();
  minute = date.getMinutes();
  hour = date.getHours();
  if (hour == 12) session = "PM";
  if (hour > 12) hour -= 12;
  //date
  week = date.getDay();
  day = date.getDate();
  month = date.getMonth();
  year = date.getFullYear();
};

const formatTime = () => {
  return (
    format(hour, 2) +
    ":" +
    format(minute, 2) +
    ":" +
    format(second, 2) +
    " " +
    session
  );
};

const formatDate = () => {
  return weekDay() + ", " + day + " " + monthName() + " " + year;
};

//to pad number with 0
const format = (number, length) => {
  if (number < Math.pow(10, length - 1)) return "0" + number;
  else if (number > Math.pow(10, length)) return "00";
  else return number;
};

clock();
