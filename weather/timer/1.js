'use strict'
let startBtn = document.getElementById('start'),
    resetBtn = document.getElementById('reset'),
    stopBtn = document.getElementById('stop'),
    rotate = document.querySelector('.wrapper_arrow'),
    inter,
    time = document.querySelector('.time'),
    degree = 0,
    millisecond = 0
    time.innerHTML = "0: 0: 0"
    
function createBtn(text) {
    if (text === 'stop') {
        stopBtn = document.createElement('button')
        stopBtn.id = text
        stopBtn.innerText = text
        stopBtn.addEventListener('click', stop)
    }else if(text === 'start'){
        startBtn = document.createElement('button')
        startBtn.id = text
        startBtn.innerText = text
        startBtn.addEventListener('click', start)
    }
}



let start = function () {
    let start = Date.now()
    inter = setInterval(() => {
        millisecond = (Date.now() - start)

        let second = Math.floor(millisecond / 1000)
        let minute = Math.floor(second/ 60)
        time.innerHTML = `${minute}: ${second%60}: ${Math.floor((Math.floor(millisecond) % 1000)/10)}`

        degree += 0.06;
        rotate.style.transform = `rotate(${degree}deg)`
    }, 10)

    createBtn('stop')
    startBtn.replaceWith(stopBtn)


}

let reset = function () {
    time.innerHTML = "0: 0"



    rotate.style.transform = `rotate(0deg)`
    degree = 0
    createBtn('start')

    if (stopBtn !== null){
        stopBtn.replaceWith(startBtn)
    }

    clearInterval(inter)



}

let stop = function () {

    createBtn('start')
    stopBtn.replaceWith(startBtn)

    clearInterval(inter)


}

startBtn.addEventListener('click', start)
resetBtn.addEventListener('click', reset)
