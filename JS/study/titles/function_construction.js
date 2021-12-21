'use strict'

function User(name, id){
    this.name = name
    this.id = id
    this.human = true
    this.hello = () =>{
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function () {
    console.log(`${this.name} exit`)
}

const ivan = new User('Ivan', 24)
console.log(ivan)
ivan.exit()



