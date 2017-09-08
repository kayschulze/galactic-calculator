import { GalacticCalculator } from "./../js/galactic-calculator.js";

describe("GalacticCalculator", function() {
  // let day = 7;
  // let month = 7;
  // let year = 1978;
  // let birthday = new Date();
  // birthday.setDate(day);
  // birthday.setMonth(month);
  // birthday.setFullYear(year);
  //
  // beforeEach(function() {
  //   human = new GalacticCalculator(birthday);
  // });

  it('should find the number of seconds between a date and now', function() {
    let day = 7;
    let month = 7;
    let year = 1978;
    let birthday = new Date();
    birthday.setDate(day);
    birthday.setMonth(month);
    birthday.setFullYear(year);
    let human = new GalacticCalculator(birthday);

    let resultSeconds = (Date.now() - birthday.getTime()) * 0.001;

    expect(human.calculateSeconds()).toEqual(resultSeconds);
  });

  it('should calculate the number of days of a life', function() {
    let day = 7;
    let month = 7;
    let year = 1978;
    let birthday = new Date();
    birthday.setDate(day);
    birthday.setMonth(month);
    birthday.setFullYear(year);
    let human = new GalacticCalculator(birthday);

    let seconds = (Date.now() - birthday.getTime()) * 0.001;
    let resultDays = Math.floor(seconds / 86400);

    expect(human.calculateDays()).toEqual(resultDays);
  });
});
