// Aula 01

let nome = prompt('qual seu nome?')
alert('Olá, ' + nome)

//---------------------------------------------------------------------------------------------------------------

// Aula 02

alert('Nós iremos somas dois numeros')
let numberOne = prompt('digite um numero')
let numberTwo = prompt('digite um segundo numero')
let result = number(numberOne) + number(numberTwo)
alert('Resultado final ' + result)

/* ---------------------------------------------------------------------------------------------------------------

  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas */

let result1 = prompt('Advinhe o número que estou pensando? Está entre 0 e 10')
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while (Number(result1) != randomNumber) {
  result1 = prompt('Erro, tente novamente:')
  xAttempts++
}

alert(
  `Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`,
)
//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------
