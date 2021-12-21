//setTimeout SetInterval


let btn = document.querySelector('button'),
    cnt = 0,
    intervalId;



function  printText(text){
    console.log(text)
    cnt++
    if (cnt === 3){
        clearInterval(intervalId)
    }
}
let printHello = () =>{
    intervalId = setInterval(printText, 500, 'Hello')
}                   //works  0ms if printText works time > 500

let id = setTimeout(function log(){
    console.log('Hello')
    id = setTimeout(log, 500)
})  //works exactly function time + 500



btn.addEventListener('click', printHello)
