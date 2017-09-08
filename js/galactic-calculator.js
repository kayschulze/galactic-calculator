//Intialize Instance of class
export class GalacticCalculator {
  constructor(birthday) {
    this.birthday = birthday;
    //this.birthtime = birthtime;
  }

//Calculate days of life
  calculateDays() {
    const secondsInADay = 86400;
    let seconds = this.calculateSeconds();
    let daysCount = seconds / secondsInADay;
    daysCount = Math.floor(daysCount);

    return daysCount;
  }

//Calculate seconds of life
  calculateSeconds() {
    const millisecondsToSeconds = 0.001;
    let totalmilliseconds = Date.now() - this.birthday.getTime();
    let secondsCount = totalmilliseconds * millisecondsToSeconds;

    return secondsCount;
  }

}
