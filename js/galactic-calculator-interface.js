import { GalacticCalculator } from "./../js/galactic-calculator.js";

$(function() {
  $("#userInput").submit(function(e) {
    e.preventDefault();
    let date = new Date();
    date = $("#birthDate").setDate();

    let newHuman = new GalacticCalculator(date);

    let seconds = newHuman.calculateSeconds();
    let days = newHuman.calculateDays();
    let years = newHuman.calculateEarthYears();

    $("#secondsOutput").text("Seconds:  " + seconds);
    $("#daysOutput").text("Days:  " + days);
    $("#yearsOutput").text("Years:  " + years);
  });
});
