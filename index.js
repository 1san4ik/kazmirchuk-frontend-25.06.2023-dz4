const num1 = prompt('Введіть перше число')
const num2 = prompt('Введіть друге число')

alert('Користувач ввів: ' + num1 + ' і ' + num2 + '\n' +
  num1 + ' + ' + num2 + ' = ' + (Number(num1) + Number(num2)) + '\n' +
  num1 + ' - ' + num2 + ' = ' + (Number(num1) - Number(num2)) + '\n' +
  num1 + ' * ' + num2 + ' = ' + (Number(num1) * Number(num2)) + '\n' +
  num1 + ' / ' + num2 + ' = ' + (Number(num1) / Number(num2))
)