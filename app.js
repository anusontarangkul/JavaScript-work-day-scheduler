$(document).ready(function () {
  // Set dynamic date in header
  let currentHourMoment = parseInt(moment().format("HH"));
  var currentDayElement = $("#currentDay");

  var AM = true;
  var containerElement = $(".container");

  let updateTime = function () {
    let currentTime = moment().format("MMM Do YYYY");
    currentDayElement.text(currentTime);
  };

  //Populate time blocks
  function displaySchedule() {
    containerElement.empty();
    var displayTime = 9;
    for (let i = 1; i < 9; i++) {
      var currentRow = $("<div class='row'>");
      var currentHour = $("<div class='col-1 hour time-block'>");
      if (AM) {
        currentHour.text(displayTime + "AM");
      } else {
        currentHour.text(displayTime + "PM");
      }
      var currentDescription = $("<input class='col-10 description'>");
      currentDescription.addClass("description-" + i);
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
      currentSave.data("count", i);
      currentSave.append(
        "<img class='save-img' src='https://img.icons8.com/wired/64/000000/save.png'/>"
      );

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

  //Save tasks
  $(".saveBtn").on("click", function () {
    var btnSave = $(this).data("count");
    switch (btnSave) {
      case 1:
        var form = $(".description-1").val();
        localStorage.setItem("9am", JSON.stringify(form));
        break;
      case 2:
        var form = $(".description-2").val();
        localStorage.setItem("10am", JSON.stringify(form));
        break;
      case 3:
        var form = $(".description-3").val();
        localStorage.setItem("11am", JSON.stringify(form));
        break;
      case 4:
        var form = $(".description-4").val();
        localStorage.setItem("12pm", JSON.stringify(form));
        break;
      case 5:
        var form = $(".description-5").val();
        localStorage.setItem("1pm", JSON.stringify(form));
        break;
      case 6:
        var form = $(".description-6").val();
        localStorage.setItem("2pm", JSON.stringify(form));
        break;
      case 7:
        var form = $(".description-7").val();
        localStorage.setItem("3pm", JSON.stringify(form));
        break;
      case 8:
        var form = $(".description-8").val();
        localStorage.setItem("4pm", JSON.stringify(form));
        break;
    }
  });

  //Load from local storage
  function loadStorage() {
    $(".description-1").val(JSON.parse(window.localStorage.getItem("9am")));
    $(".description-2").val(JSON.parse(window.localStorage.getItem("10am")));
    $(".description-3").val(JSON.parse(window.localStorage.getItem("11am")));
    $(".description-4").val(JSON.parse(window.localStorage.getItem("12pm")));
    $(".description-5").val(JSON.parse(window.localStorage.getItem("1pm")));
    $(".description-6").val(JSON.parse(window.localStorage.getItem("2pm")));
    $(".description-7").val(JSON.parse(window.localStorage.getItem("3pm")));
    $(".description-8").val(JSON.parse(window.localStorage.getItem("4pm")));
  }
  updateTime();
  setInterval(updateTime, 6000);
  displaySchedule();
  setInterval(updateTime, 60000);
  loadStorage();
});
