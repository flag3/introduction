let startTime = 0
let currentTime = 0
let temporaryTime = 0
let timeStatus = "stop"
let intervalID = null
let lapCounter = 0
let message = ""

function startTimer () {
  intervalID = setInterval(rewritingTime, 1)
  const startElement = document.querySelector('#start')
  startElement.innerText = 'ストップ'
  const resetElement = document.querySelector('#reset')
  resetElement.innerText = 'ラップ'
  startTime = Date.now()
  timeStatus = "start"
}

function stopTimer () {
  clearInterval(intervalID)
  intervalID = null
  const startElement = document.querySelector('#start')
  startElement.innerText = 'スタート'
  const resetElement = document.querySelector('#reset')
  resetElement.innerText = 'リセット'
  temporaryTime = currentTime
  timeStatus = "stop"
}

function resetTimer() {
  temporaryTime = 0
  const timeElement = document.querySelector('#time')
  timeElement.innerText = '時間: ' + temporaryTime + '秒'
  lapCounter = 0
  message = ""
  document.getElementById("laptime").innerHTML = message;
}

function lapTimer() {
  lapCounter++
  message += 'ラップ' + lapCounter + '&emsp;' + currentTime / 1000 + '秒<br>'
  document.getElementById("laptime").innerHTML = message;
}

function rewritingTime () {
  currentTime = Date.now() + temporaryTime - startTime
  const timeElement = document.querySelector('#time')
  timeElement.innerText = '時間: ' + currentTime / 1000 + '秒'
}

const timerStart = () => {
  if (timeStatus === "stop") {
    startTimer()
  } else if (timeStatus === "start") {
    stopTimer()
  } 
}

const timerReset = () => {
  if (timeStatus === "stop") {
    resetTimer()
  } else if (timeStatus === "start") {
    lapTimer()
  }
}

