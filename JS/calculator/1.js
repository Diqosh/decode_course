'use strict'
let nums = document.querySelectorAll('.num'),
    operations = document.querySelectorAll('.operation'),
    win = document.getElementsByClassName('window-to-num')[0],
    equal = document.querySelector('.equal')
let totalstr = "";

function get_str(side, str, index){
    let i
    if(side === "right"){
        for (i = index + 1; i < str.length; i++) {
            if(isNaN(str[i])){
                return str.slice(index + 1, i)
            }
        }
        return str.slice(index + 1, i)
    }else if(side === "left"){
        for (i = index - 1; i >= 0; i--) {
            if(isNaN(str[i])){
                return str.slice(i + 1, index )
            }
        }
        return str.slice(i + 1, index )
    }
}

function calc(){
    let str = totalstr;
    while (str.indexOf('*') !== -1){


        let i = str.indexOf('*')
        let right_num = get_str("right", str, i)
        let left_num = get_str("left", str, i)
        let result = Number(right_num) * Number(left_num)
        console.log(left_num+"*"+right_num)
        let repl =  left_num+"*"+right_num
        console.log(str)
        str = str.replace(repl, result + "")


    }
    while (str.indexOf('/') !== -1){

        let i = str.indexOf('/')
        let right_num = get_str("right", str, i)
        let left_num = get_str("left", str, i)
        let result = Number(left_num) / Number(right_num)
        console.log(left_num+"/"+right_num)
        let repl =  left_num+"/"+right_num
        console.log(str)
        str = str.replace(repl, result + "")

    }
    while (str.indexOf('+') !== -1){


        let i = str.indexOf('+')
        let right_num = get_str("right", str, i)
        let left_num = get_str("left", str, i)
        let result = Number(right_num) + Number(left_num)
        console.log(left_num+"+"+right_num)
        let repl =  left_num+"+"+right_num
        console.log(str)
        str = str.replace(repl, result + "")


    }
    while (str.indexOf('-') !== -1){


        let i = str.indexOf('-')
        let right_num = get_str("right", str, i)
        let left_num = get_str("left", str, i)
        let result = Number(right_num) - Number(left_num)
        console.log(left_num+"-"+right_num)
        let repl =  left_num+"-"+right_num
        console.log(str)
        str = str.replace(repl, result + "")


    }
    win.innerHTML = str
}

equal.addEventListener('click', calc)



function print_to_win(num){
    win.innerHTML = num
    totalstr += num
}
function print_str(operation){
    if (isNaN(totalstr[totalstr.length - 1])){
        totalstr = totalstr.slice(0, -1)
        totalstr += operation
        return
    }
    totalstr += operation

}

nums.forEach((item) =>{
    item.addEventListener('click', function() {print_to_win(item.innerHTML)})
})

operations.forEach((item) =>{//question
    item.addEventListener('click', function() {print_str(item.innerHTML)})
})



const user = {
    id: 1,
    name: "almas",
    age: 25
}

const {name, age} = user;
console.log(name, age)
