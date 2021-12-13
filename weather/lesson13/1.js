'use strict'
// function getData() {
//
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 2000)
//     })
//
//
// }

// async function testPromise(){
//     const a = await getData();
//     console.log(a)
// }

// function getData() {
//
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 2000)
//     })
//
//
// }
//
//
//
// async function testPromise(){
//     const a = await getData();
//     console.log(a)
// }
//
// testPromise()
//


// Array.prototype.customForEach = function (cb){
//
//
//
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i])
//     }
//
// }
//
//
// const arr = [1, 2, 3, 4, 5];
//
//
//
// arr.customForEach(function (item){
//     console.log(item)
// })



// (async  function  getData(){
//     const data = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=e9fb9a35dc124ef4a44113239210712&q=Almaty&days=7&aqi=no&alerts=no')
//     function showAlert(text){
//         alert(text)
//     }
//
//
//
//     setTimeout(()=>showAlert("text"), 1000)
//
//     let n = 0
//     const inter = setInterval(()=>{
//         document.write(n)
//         n++;
//     }, 2000)
//
//     setTimeout(()=>{
//         clearInterval(inter)
//     }, 5000)
//
// })()
// function start(a){
//     console.log(a)
// }
// let btn = document.querySelector('button')
//
// a = function (e){
//     console.log(e.target)
// }
//
// btn.addEventListener('click', a)
function show(){
    console.log(this)
}
show()