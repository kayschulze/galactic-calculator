//Intialize Instance of class
export class GalacticCalculator {
  constructor(birthday) {
    this.birthday = birthday;
    this.secondsCount = 0;
    this.daysCount = 0;
    this.earthYears = 0;
  }

  determineLifeExpectancy(countryExpectancy, factor) {
    let expectancy = (countryExpectancy - this.earthYears) / factor;

    if (expectancy > 0) {
      return expectancy.toFixed(2);
    }
    else {
      return "Livin' On Borrowed Time."
    }
  }

  lifeExpectancyByPlanetList(countryExpectancy) {
    let expectancyByPlanet = [];
    const earthFactor = 1;
    const mercuryFactor = 0.24;
    const venusFactor = 0.62;
    const marsFactor = 1.88;
    const jupiterFactor = 11.86;

    expectancyByPlanet.push(this.determineLifeExpectancy(countryExpectancy, earthFactor)).toFixed(2);
    expectancyByPlanet.push(this.determineLifeExpectancy(countryExpectancy, mercuryFactor)).toFixed(2);
    expectancyByPlanet.push(this.determineLifeExpectancy(countryExpectancy, venusFactor)).toFixed(2);
    expectancyByPlanet.push(this.determineLifeExpectancy(countryExpectancy, marsFactor)).toFixed(2);
    expectancyByPlanet.push(this.determineLifeExpectancy(countryExpectancy, jupiterFactor)).toFixed(2);

    return expectancyByPlanet;
  }

//Calculate seconds of life.
  calculateSeconds() {
    const millisecondsToSeconds = 0.001;
    let totalmilliseconds = Date.now() - this.birthday.getTime();
    this.secondsCount = totalmilliseconds * millisecondsToSeconds;

    return this.secondsCount;
  }

//Calculate days of life.
  calculateDays() {
    const secondsInADay = 86400;
    let seconds = this.calculateSeconds();
    this.daysCount = seconds / secondsInADay;
    this.daysCount = Math.floor(this.daysCount);

    return this.daysCount;
  }

//Calculate years based on specific planets
  calculatePlanetYears(planetFactor) {
    let planetYears = this.earthYears / planetFactor;
    planetYears = planetYears.toFixed(2);

    return planetYears;
  }

//Calculate earth years
  calculateEarthYears() {
    const daysInYear = 365.25;
    this.earthYears = this.calculateDays() / daysInYear;
    this.earthYears = this.earthYears.toFixed(2);

    return this.earthYears;
  }

  lifeExpectancyByACountryList() {
    let yearsLeftbyCountryList = [];
    const unitedStatesExpectancy = 79.80;
    const monocoExpectancy = 89.50;
    const icelandExpectancy = 83.00;
    const israelExpectancy = 82.40;
    const italyExpectancy = 82.20;
    const canadaExpectancy = 81.90;
    const dominicanExpectancy = 78.10;
    const egyptExpectancy = 72.70;
    const guatemalaExpectancy = 72.30;

    this.calculateEarthYears();
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(unitedStatesExpectancy));
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(monocoExpectancy));
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(icelandExpectancy));
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(israelExpectancy));
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(italyExpectancy));
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(canadaExpectancy));
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(dominicanExpectancy));
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(egyptExpectancy));
    yearsLeftbyCountryList.push(this.lifeExpectancyByPlanetList(guatemalaExpectancy));

    return yearsLeftbyCountryList;
  }

//Calculate an array of planet years
  getPlanetYearsArray() {
    let planetYearsArray = [];
    const earthFactor = 1;
    const mercuryFactor = 0.24;
    const venusFactor = 0.62;
    const marsFactor = 1.88;
    const jupiterFactor = 11.86;
    this.calculateEarthYears();

    planetYearsArray.push(this.calculatePlanetYears(mercuryFactor));
    planetYearsArray.push(this.calculatePlanetYears(venusFactor));
    planetYearsArray.push(this.calculatePlanetYears(marsFactor));
    planetYearsArray.push(this.calculatePlanetYears(jupiterFactor));

    return planetYearsArray;
  }
}
