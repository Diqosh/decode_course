'use strict'


//1)
function showThis(){
    console.log(this)
}//window if use strict else undefined

//2)

const obj = {
    a : 20,
    b: 15,
    sum: function (){
        console.log(this)
        //print all obj
    }
}
//3
// новый экземпляр
function User(name, id){
    this.name = name
    this.id = id
    this.human = true
    this.hello = () =>{
        console.log(`Hello ${this.name}`)
    }
}
const ivan = new User('Ivan', 24)


//4

function sayName(surname){
    console.log(this)
    console.log(this.name + surname)
}

const user = {
    name: 'John'
}
// sayName.call(user, 'Smith')
// sayName.apply(user, ['Smith'])

function count(num){
    return this*num
}
const double = count.bind(2)
// console.log(double(13))

//5)
let btn = document.querySelector('button')
btn.addEventListener('click', function (){
    console.log(this)
})//if anonymous  function this will undefined

//ньюанс
const obj1 = {
    num: 5,
    sayNumber: function (){
        const say = () => {
            console.log(this)
        }
        say()
    }// anonymous  function call parent this
}








