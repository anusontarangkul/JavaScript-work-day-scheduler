$(document).ready(function () {
  // Set dynamic date in header
  var currentDayElement = $("#currentDay");

  let updateTime = function () {
    let currentTime = moment().format("MMM Do YYYY");
    currentDayElement.text(currentTime);
  };
  updateTime();
  setInterval(updateTime, 6000);

  var displayTime = 9;
  var AM = true;
  var militaryTimeArray = [];
  //Populate time blocks
  for (let i = 1; i < 9; i++) {
    var currentRow = $("<div class='row'>");
    var currentHour = $("<div class='col-1 hour time-block'>");
    if (AM) {
      currentHour.text(displayTime + "AM");
      militaryTimeArray.push(displayTime);
    } else {
      currentHour.text(displayTime + "PM");
      militaryTimeArray.push(displayTime + 12);
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

  //Color code
  //1. convert display time to military time
  console.log(militaryTimeArray);

  // //Update colors when time past
  let updateCalendarColor = function () {
    let currentTime = parseInt(moment().format("HH"));
  };
  updateCalendarColor();
  setInterval(updateCalendarColor, 1000);
});
