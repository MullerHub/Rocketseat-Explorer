let student = prompt(
  `digite o nome do aluno, caso você sejá o aluno digite seu nome`
)

let nota1 = prompt(`Digite a nota da primeira prova`)
let nota2 = prompt(`Digite a nota da segunda prova`)
let nota3 = prompt(`Digite a nota da terceira prova`)
let nota4 = prompt(`Digite a nota da quarta prova`)
let contadorDeAlunos = 1

let notas = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

do {
  alert(`Olá ` + student + ` sua nota foi de ` + notas)
  contadorDeAlunos += 1
} while (contadorDeAlunos < 4)

/* Falta fazer o mesmo codigo para outros quatro alunos
  Falta colocar mensagem de parabens (se passar de 7) ou de apoio se for menor
*/
