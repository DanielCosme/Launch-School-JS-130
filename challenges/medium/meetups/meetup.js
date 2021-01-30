class Meetup {
  constructor(year, month) {
    this.year = year; 
    this.month = month - 1;
    this.days = new Date(this.year, this.month + 1, 0).getDate();
  }

  day(weekday, descriptor) {
    let weekdayToMatch = weekday.slice(0, 3).toLowerCase();
    let matches = [];

    for (let day = 1 ; day <= this.days  ; day++) {
      let tmpDate = new Date(this.year, this.month, day);
      let [weekday,, dDay] = tmpDate.toDateString().split(' ');

      if (weekday.toLowerCase() === weekdayToMatch) {
        matches.push(new Date(this.year, this.month, dDay));
      }
    }

    return this.getMatch(matches, descriptor);
  }

  getMatch(arr, desc) {
    switch (desc.toLowerCase()) {
      case 'first': return arr[0];
      case 'second': return arr[1];
      case 'third': return arr[2];
      case 'fourth': return arr[3];
      case 'fifth': return arr[4] ? arr[4] : null;
      case 'last': return arr[arr.length - 1];
      case 'teenth': 
        return arr.find(date => {
          let [,, day] = date.toDateString().split(' ');

          for (let teenth = 13 ; teenth < 20 ; teenth++) {
            if (Number(day) === teenth) { return true } 
          }
        })
      default: return null;
    }
  }
}

module.exports = Meetup;

