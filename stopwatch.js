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
  const timeElement = document.querySelector('#time')
  timeElement.innerText = '00:00:00.00'
  document.getElementById("laptime").innerHTML = message;
  temporaryTime = 0
  lapCounter = 0
  message = ""
}

function lapTimer() {
  lapCounter++
  message += 'ラップ' + lapCounter + '&emsp;' + convertToTime(currentTime) + '<br>'
  document.getElementById("laptime").innerHTML = message;
}

function rewritingTime () {
  currentTime = Date.now() + temporaryTime - startTime
  const timeElement = document.querySelector('#time')
  timeElement.innerText = convertToTime(currentTime)
}

function convertToTime(time) {
  const h = String(Math.floor(time / (60 * 60 * 1000))).padStart(2, '0')
  const m = String(Math.floor(time / (60 * 1000)) % 60).padStart(2, '0')
  const s = String(Math.floor(time / 1000) % 60).padStart(2, '0')
  const ms = String(Math.floor((time % 1000) / 10)).padStart(2, '0')
  return h + ':' + m + ':' + s + '.' + ms
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

