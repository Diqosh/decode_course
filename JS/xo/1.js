'use strict'
let boxes = document.querySelectorAll('.box'),
    btn = document.getElementById('reset')

btn.addEventListener('click', () => {
    boxes.forEach((item) => {
        item.innerHTML = ""
        item.addEventListener('click', set)
    })
})

let arr = [[], [], []];

let zero_or_x = 0

function checkWin(elem) {
    arr = [[], [], []];
    arr[0].push(boxes[0].innerHTML, boxes[1].innerHTML, boxes[2].innerHTML)
    arr[1].push(boxes[3].innerHTML, boxes[4].innerHTML, boxes[5].innerHTML)
    arr[2].push(boxes[6].innerHTML, boxes[7].innerHTML, boxes[8].innerHTML)
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] && arr[i][0] === elem) {  //chek rows
            alert(elem)
        }
    }
    for (let i = 0; i < 3; i++) {
        if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] && arr[0][i] === elem) {  //chek columns
            alert(elem)
        }
    }


    if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] === elem) {  // l dioganal
        alert(elem)
    }

    if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] && arr[0][2] === elem) {  // r dioganal
        alert(elem)
    }


}

let set = function(e) {
    if (zero_or_x % 2 === 0) {
        e.target.innerHTML = "X"
        zero_or_x++
        checkWin("X")
    } else {
        e.target.innerHTML = "0"
        zero_or_x++
        checkWin("0")
    }
    e.target.removeEventListener('click', set)

}


boxes.forEach((item) => {
    item.addEventListener('click', set)
})