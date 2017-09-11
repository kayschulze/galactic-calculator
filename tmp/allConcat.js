import { GalacticCalculator } from "./../js/galactic-calculator.js";

$(function() {
  $("#userInput").submit(function(e) {
    e.preventDefault();
    let date = $("#birthDate").val();
    let newDate = new Date(date);
    let newHuman = new GalacticCalculator(newDate);

    let seconds = newHuman.calculateSeconds();
    let days = newHuman.calculateDays();
    let years = newHuman.calculateEarthYears();

    $("#timeOutput").text("This is how long you've lived:");
    $("#secondsOutput").text("Total Seconds:  " + seconds);
    $("#daysOutput").text("Total Days:  " + days);
    $("#yearsOutput").text("Total Years:  " + years);

    let ageOnPlanets = newHuman.getPlanetYearsArray();
    $("#planetsOutput").text("Your lifetime on other planets:");
    $("#mercuryAge").text("Mercury Years:  " + ageOnPlanets[0]);
    $("#venusAge").text("Venus Years:  " + ageOnPlanets[1]);
    $("#marsAge").text("Mars Years:  " + ageOnPlanets[2]);
    $("#jupiterAge").text("Jupiter Years:  " + ageOnPlanets[3]);

    let lifeExpectancyList = newHuman.lifeExpectancyByACountryList();
    let countries = ["United States", "Monoco", "Iceland", "Israel", "Italy", "Canada", "Dominican Republic", "Egypt", "Guatemala"];

    $("#expectancyTable").text("How many years longer can you expect to live based on your country of origin?");

    $("#expectancyTable").append("<div class='row'>");
    $("#expectancyTable").append("<div class='col-md-2'></div>");
    $("#expectancyTable").append("<div class='col-md-2'>Earth</div>");
    $("#expectancyTable").append("<div class='col-md-2'>Mercury</div>");
    $("#expectancyTable").append("<div class='col-md-2'>Venus</div>");
    $("#expectancyTable").append("<div class='col-md-2'>Mars</div>");
    $("#expectancyTable").append("<div class='col-md-2'>Jupiter</div></div>");

    for (let i = 0; i < lifeExpectancyList.length; i++) {
      $("#expectancyTable").append("<div class='row'>");
        $("#expectancyTable").append("<div class='col-md-2'>" + countries[i] +'</div>');
        for (let j = 0; j < 5; j++) {
          $("#expectancyTable").append("<div class='col-md-2'>" + lifeExpectancyList[i][j] +'</div>');
        }
      $("#expectancyTable").append('</div>');
    }
  });
});
