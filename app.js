$(document).ready(function () {
  // Set dynamic date in header
  var currentDayElement = $("#currentDay");

  let updateTime = function () {
    let currentTime = moment().format("MMM Do YYYY");
    currentDayElement.text(currentTime);
  };
  updateTime();
  setInterval(updateTime, 1000);

  //1 hour block calendar

  // //Update colors when time past
  let updateCalendarColor = function () {
    let currentTime = parseInt(moment().format("HH"));
  };
  updateCalendarColor();
  setInterval(updateCalendarColor, 1000);
});
