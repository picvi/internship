function date(dateInfo) {
  const data = {
    date: new Date(dateInfo),

    add(numbers, stringData) {
      switch (stringData) {
        case 'minutes':
          this.date.setMinutes(this.date.getMinutes() + numbers)
          break
        case 'hours':
          this.date.setHours(this.date.getHours() + numbers)
          break
        case 'days':
          this.date.setDate(this.date.getDate() + numbers)
          break
        case 'months':
          this.date.setMonth(this.date.getMonth() + numbers + 1)
          break
        case 'years':
          this.date.setFullYear(this.date.getFullYear() + numbers)
          break
      }
      return data;
    }, 

    subtract(numbers, stringData) {
      switch (stringData) {
        case 'minutes':
          this.date.setMinutes(this.date.getMinutes() - numbers)
          break
        case 'hours':
          this.date.setHours(this.date.getHours() - numbers)
          break
        case 'days':
          this.date.setDate(this.date.getDate() - numbers)
          break
        case 'months':
          this.date.setMonth(this.date.getMonth() - numbers + 1)
          break
        case 'years':
          this.date.setFullYear(this.date.getFullYear() - numbers)
          break
      }
      return this
    },
  }
  return data;
}

const dayX = date('2020-11-01 13:45');
console.log(dayX.subtract(30, 'days').add(10, 'years'));