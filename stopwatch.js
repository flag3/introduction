let startTime = 0
let endTime = 0
let time = 0
let stat = "stop"

const timer = () => {
  if (stat == "stop") {
    startTime = Date.now()
    const stringElement = document.querySelector('#start')
    stringElement.innerText = 'ストップ'
    stat = "start"
  } else if (stat === "start") {
    endTime = Date.now()
    time = (endTime - startTime) / 1000
    const timeElement = document.querySelector('#time')
    timeElement.innerText = '時間: ' + time + '秒'
    const stringElement = document.querySelector('#start')
    stringElement.innerText = 'スタート'
    stat = "stop"
  } 
}

