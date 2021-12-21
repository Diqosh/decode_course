'use strict'
console.log('Запрос данных...')
const req = new Promise(function (resolve, reject){

    setTimeout(() =>{
        console.log("Подготовка данных...")

        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
    }, 2000)
})

// req.then((product)=>{
//
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//
//             product.status = 'order'
//             resolve(product)
//
//         }, 2000)
//     })
//
//
//     req2.then(data => console.log(data))
//
// })
req.then((product)=>{

    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            product.status = 'order'
            resolve(product)

        }, 2000)
    })
}).then(data => console.log(data))
.catch(()=>{
    console.log("Error")
}).finally(()=>{
    console.log('Finally')
})

