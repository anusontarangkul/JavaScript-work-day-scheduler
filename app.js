$(document).ready(function () {
  // Set dynamic date in header
  var currentDayElement = $("#currentDay");

  let updateTime = function () {
    let currentTime = moment().format("MMM Do YYYY");
    currentDayElement.text(currentTime);
  };
  updateTime();
  setInterval(updateTime, 1000);

  var displayTime = 9;
  var AM = true;
  //Populate time blocks
  for (let i = 1; i < 9; i++) {
    var currentRow = $("<div class='row'>");
    var currentHour = $("<div class='col-1 hour time-block'>");
    if (AM) {
      currentHour.text(displayTime + "AM");
    } else {
      currentHour.text(displayTime + "PM");
    }
    var currentDescription = $("<input class='col-10 past description'>");
    var currentSave = $("<div class='col-1 saveBtn'>");
    $(".container").append(currentRow);
    currentRow.append(currentHour);
    currentRow.append(currentDescription);
    currentRow.append(currentSave);
    displayTime++;
    if (displayTime > 12) {
      displayTime = 1;
      AM = false;
    }
  }

  //Add hour to left row
  for (let i = 1; i < 9; i++) {}

  // //Update colors when time past
  let updateCalendarColor = function () {
    let currentTime = parseInt(moment().format("HH"));
  };
  updateCalendarColor();
  setInterval(updateCalendarColor, 1000);
});
