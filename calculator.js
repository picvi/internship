function calculator(aa, bb, operator = '+') {
  const a = Number(aa);
  const b = Number(bb)
    if (Number(aa, bb)) {
      Number(a, b)
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
console.log(calculator('2', 4, 'pow'))