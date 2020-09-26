$(document).ready(function () {
  // Set dynamic date in header
  let currentHourMoment = parseInt(moment().format("HH"));
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
  var saveBtnCount = 1;
  var current;
  //Populate time blocks
  function displaySchedule() {
    for (let i = 1; i < 9; i++) {
      var currentRow = $("<div class='row'>");
      var currentHour = $("<div class='col-1 hour time-block'>");
      if (AM) {
        currentHour.text(displayTime + "AM");
      } else {
        currentHour.text(displayTime + "PM");
      }
      var currentDescription = $("<input class='col-10 description'>");
      if (
        (displayTime < currentHourMoment && AM == true) ||
        (displayTime + 12 < currentHourMoment && AM == false)
      ) {
        currentDescription.addClass("past");
      } else if (
        (displayTime > currentHourMoment && AM == true) ||
        (displayTime + 12 > currentHourMoment && AM == false)
      ) {
        currentDescription.addClass("future");
      } else {
        currentDescription.addClass("present");
      }
      var currentSave = $("<div class='col-1 saveBtn'>");
      currentSave.data("value", i);

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
  }
  displaySchedule();

  // function getData() {
  //   var time = $(this).attr("data-number");
  //   console.log(time);
  // }
  // getData();
  //Color code
  //1. convert display time to military time
  // console.log(militaryTimeArray);

  // //Update colors when
  var text = $("textarea");
  var SaveBtn = $(".saveBtn");

  $(".saveBtn").on("click", function () {
    var btnSave = $(this).data("value");
    console.log(btnSave);
    // localStorage.setItem(btnSave, textSave);
  });
  //   //Store data
  //   $("avebtton");onabort("clikd", function)
  //   this.value
});
