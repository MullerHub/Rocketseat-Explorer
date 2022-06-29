let number1 = prompt('digite um numero')
let number2 = prompt('digite o segundo numero')

let nome = alert('A soma dos numeros é ' + (Number(number1) + Number(number2)))

nome = alert('A subtração dos numeros é ' + (Number(number1) - Number(number2)))

nome = alert('A divisão dos numeros é ' + Number(number1) / Number(number2))

nome = alert(
  `A multiplicação dos numeros é ` + Number(number1) * Number(number2)
)

nome = alert(
  `o restante do resultado dos numeros é ` + (Number(number1) % Number(number2))
)

if (number1 == number2) {
  alert('os numeros são iguais')
} else {
  alert('os numeros não são iguais')
}
/*
if (nome % 2==0) {
  alert('A soma dos numero é par')
} else {
  alert('A soma dos numero é par')
}
*/
