$(document).ready(function () {
  // Set dynamic date in header
  var currentDayElement = $("#currentDay");
  var currentDayMoment = moment().format("MMM Do YYYY");
  currentDayElement.text(currentDayMoment);
  test;
});
