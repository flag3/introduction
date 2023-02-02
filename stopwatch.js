let startTime = 0
let endTime = 0
let time = 0
let time2 = 0
let stat = "stop"
let intervalID = null

function startTimer () {
  startTime = Date.now()
  intervalID = setInterval(rewritingTime, 1)
  const startElement = document.querySelector('#start')
  startElement.innerText = 'ストップ'
  const resetElement = document.querySelector('#reset')
  resetElement.innerText = 'ラップ'
  stat = "start"
}

function stopTimer () {
  const startElement = document.querySelector('#start')
  startElement.innerText = 'スタート'
  clearInterval(intervalID)
  intervalID = null
  time2 = time
  stat = "stop"
  const resetElement = document.querySelector('#reset')
  resetElement.innerText = 'リセット'
}

function rewritingTime () {
  endTime = Date.now()
  time = time2 + endTime - startTime
  const timeElement = document.querySelector('#time')
  timeElement.innerText = '時間: ' + time / 1000 + '秒'
}

function resetTimer() {
  time2 = 0
  const timeElement = document.querySelector('#time')
  timeElement.innerText = '時間: 0秒'
}

const timerStart = () => {
  if (stat === "stop") {
    startTimer()
  } else if (stat === "start") {
    stopTimer()
  } 
}

const timerReset = () => {
  if (stat === "stop") {
    resetTimer()
  } else if (stat === "start") {
    console.log("未実装")
  }
}

