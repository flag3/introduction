let startTime = 0
let endTime = 0
let time = 0
let stat = "stop"
let intervalID = null

function startTimer () {
  startTime = Date.now()
  const stringElement = document.querySelector('#start')
  stringElement.innerText = 'ストップ'
}

function stopTimer () {
  const stringElement = document.querySelector('#start')
  stringElement.innerText = 'スタート'
}

function rewritingTime () {
  endTime = Date.now()
  time = (endTime - startTime) / 1000
  const timeElement = document.querySelector('#time')
  timeElement.innerText = '時間: ' + time + '秒'
}

const timer = () => {
  if (stat === "stop") {
    intervalID = setInterval(rewritingTime, 1)
    startTimer()
    stat = "start"
  } else if (stat === "start") {
    clearInterval(intervalID)
    intervalID = null
    stopTimer()
    stat = "stop"
  } 
}

