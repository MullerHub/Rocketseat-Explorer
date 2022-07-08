// DOM  -- Document Object Model  --
const play = document.querySelector('.play')
const stop = document.querySelector('.pause')
const mais = document.querySelector('.increase')
const menos = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let resetTimer = '0'
let contagem
//                     Audio
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFire = document.querySelector('.fire')

const forestAudio = new Audio('./sounds/Floresta.wav')
const rainAudio = new Audio('./sounds/Chuva.wav')
const fireAudio = new Audio('./sounds/Lareira.wav')
const coffeeAudio = new Audio('./sounds/Cafeteria.wav')

forestAudio.loop = true
rainAudio.loop = true
fireAudio.loop = true
coffeeAudio.loop = true

// Event-driven
// callback
// funções

let actualAudioPLay

function isPlayAudio(audio) {
  const isPlayAudio = actualAudioPLay === audio

  if (isPlayAudio) {
    audio.pause
    actualAudioPLay = false
    return true
  }
  return false
}

function updateTimerDisplay(minutes, seconds) {
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

function countdown() {
  console.log(countdown)
  // setTimeout é uma propriedade para trabalhar com o tempo/numeros
  contagem = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function addFiveMinutes() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)
  if (minutes >= 55) {
    updateTimerDisplay(59, seconds)
    alert('não é possivel adicionar mais que 60 minutos')
    return
  } else {
    updateTimerDisplay(String(minutes + 5), seconds)
  }
}

function removeFiveMinutes() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)
  if (minutes <= 05) {
    alert('Não é possivel retirar 05 minutos do timer')
  } else {
    updateTimerDisplay(String(minutes - 5), seconds)
  }
}

function desligaAudios() {
  buttonFire.classList.remove('select')
  buttonRain.classList.remove('select')
  buttonForest.classList.remove('select')
  buttonCoffee.classList.remove('select')
}

//chamar os dados
play.addEventListener('click', function () {
  countdown()
  setInterval(() => {}, contagem) /* else {
                       clearTimeout(contagem)    Parar o contador
                       } */
})

stop.addEventListener('click', function () {
  clearTimeout(contagem)
})

mais.addEventListener('click', function () {
  addFiveMinutes()
})

menos.addEventListener('click', function () {
  removeFiveMinutes()
})

buttonForest.addEventListener('click', function () {
  desligaAudios()
  buttonForest.classList.toggle('select')

  if (isPlayAudio(forestAudio)) {
    return
  }
  if (actualAudioPLay) {
    actualAudioPLay.pause()
  }
  forestAudio.play()
  actualAudioPLay = forestAudio
})

buttonRain.addEventListener('click', function () {
  desligaAudios()
  buttonRain.classList.toggle('select')

  if (isPlayAudio(rainAudio)) {
    return
  }
  if (actualAudioPLay) {
    actualAudioPLay.pause()
  }
  rainAudio.play()
  actualAudioPLay = rainAudio
})

buttonCoffee.addEventListener('click', function () {
  desligaAudios()
  buttonCoffee.classList.toggle('select')

  if (isPlayAudio(coffeeAudio)) {
    return
  }
  if (actualAudioPLay) {
    actualAudioPLay.pause()
  }
  coffeeAudio.play()
  actualAudioPLay = coffeeAudio
})

buttonFire.addEventListener('click', function () {
  desligaAudios()
  buttonFire.classList.toggle('select')

  if (isPlayAudio(fireAudio)) {
    return
  }
  if (actualAudioPLay) {
    actualAudioPLay.pause()
  }
  fireAudio.play()
  actualAudioPLay = fireAudio
})
