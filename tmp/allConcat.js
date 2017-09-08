import { GalacticCalculator } from "./../js/galactic-calculator.js";

$(function() {
  $("#userInput").submit(function(e) {
    e.preventDefault();
    let date = Date.parse($("#birthDate").val());

    let newHuman = new GalacticCalculator(date);

    $("#secondsOutput").text("Seconds:  " + seconds);
    $("#daysOutput").text("Days:  " + seconds);
    $("#yearsOutput").text("Years:  " + seconds);
  });
});
