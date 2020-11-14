function date(dateInfo) {
  const data = {
    date: new Date(dateInfo),
    measures: {
      years: 'FullYear',
      months: 'Month',
      days: 'Date',
      hours: 'Hours',
      minutes: 'Minutes',
    },
    set: 'set',
    get: 'get',

    add(number, measure) {
      this.date[this.set + this.measures[measure]](number + this.date[this.get + this.measures[measure]]());
      return data;
    },

    subtract(number, measure) {
      this.date[this.set + this.measures[measure]](-number + this.date[this.get + this.measures[measure]]());
      return data;
    },

    value() {
      return this.date.toLocaleString('ru-RU');
    },
  }
  return data;
}

const dayX = date('2020-11-01 10:45');
dayX.add(3, 'hours').add(30, 'minutes').add(10, 'years').subtract(1, 'months');
console.log(dayX.value());
