'use strict'

function duplicateCount(text){
    const mySet = new Set()
    text = text.toLowerCase()
    let cnt = 0
    for (let i = 0; i < text.length; i++) {
        mySet.add(text[i]);

    }

    mySet.forEach((item)=>{

        let regex = new RegExp(item, 'g')

        if (text.match(regex).length > 1)
            cnt++

    })
    return cnt
}


let a = "aasds"
console.log(duplicateCount(a))