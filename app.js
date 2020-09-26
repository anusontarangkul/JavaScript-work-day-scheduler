var currentDateElement = $("#current-date");
var currentDateMoment = moment().format("MMM Do YYYY");

var currentDate = currentDateElement.text(currentDateMoment);
currentDate.addClass("head-p");
