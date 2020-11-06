function calculator(aa, bb, operator = '+') {
  const a = parseInt(aa);
  const b = parseInt(bb);
    if (+a && b) {
      switch (operator) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
      case 'pow':
        return Math.pow(a, b)
      default:
        console.log('Введен неизвестный оператор')
      }
    } else {
      console.log('Введен неверный формат данных')
  }
}

console.log(calculator('4px', 4, '+'))