'use strict'
let startBtn = document.getElementById('start'),
    resetBtn = document.getElementById('reset'),
    stopBtn = document.getElementById('stop'),
    rotate = document.querySelector('.wrapper_arrow'),
    inter,
    time = document.querySelector('.time'),
    degree = 0,
    second

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
        second = Math.floor((Date.now() - start)/1000)


        time.innerHTML = `${Math.floor(second/60)}: ${second % 60}`

        degree += 6;
        rotate.style.transform = `rotate(${degree}deg)`
    }, 1000)

    createBtn('stop')
    startBtn.replaceWith(stopBtn)

    startBtn.removeEventListener("click", start)
}

let reset = function () {
    time.innerHTML = "0: 0"



    rotate.style.transform = `rotate(0deg)`
    degree = 0
    setTimeout(() => {
        clearInterval(inter)
    }, 0)
    createBtn('start')
    stopBtn.replaceWith(startBtn)

}

let stop = function () {

    createBtn('start')
    stopBtn.replaceWith(startBtn)

    setTimeout(() => {
        clearInterval(inter)
    }, 0)
    startBtn.addEventListener('click', start)
}

startBtn.addEventListener('click', start)
resetBtn.addEventListener('click', reset)
