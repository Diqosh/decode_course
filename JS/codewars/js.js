'use strict'

function validParentheses(parens) {
    let myList = []
    for (let i = 0; i < parens.length; i++) {
        if(parens[i] === '('){
            myList.push('(')
        }else{
            if(myList.length === 0){
                return false
            }
            myList.pop()
        }
    }
    return myList.length === 0;

}


let a = "(())((()())())"
console.log(validParentheses(a))