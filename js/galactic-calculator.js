//Intialize Instance of class
export class GalacticCalculator {
  constructor(birthday) {
    this.birthday = birthday;
    this.secondsCount = 0;
    this.daysCount = 0;
    this.earthYears = 0;
    //this.birthtime = birthtime;
  }

//Calculate days of life
  calculateDays() {
    const secondsInADay = 86400;
    let seconds = this.calculateSeconds();
    this.daysCount = seconds / secondsInADay;
    this.daysCount = Math.floor(this.daysCount);

    return this.daysCount;
  }

//Calculate seconds of life
  calculateSeconds() {
    const millisecondsToSeconds = 0.001;
    let totalmilliseconds = Date.now() - this.birthday.getTime();
    this.secondsCount = totalmilliseconds * millisecondsToSeconds;

    return this.secondsCount;
  }

//Calculate earth years
  calculateEarthYears() {
    const daysInYear = 365.25;
    this.earthYears = this.calculateDays() / daysInYear;
    this.earthYears = this.earthYears.toFixed(2);

    return this.earthYears;
  }

//Calculate years based on specific planets
  calculatePlanetYears(planetFactor) {
    let planetYears = this.earthYears / planetFactor;
    planetYears = planetYears.toFixed(2);

    return planetYears;
  }
}
