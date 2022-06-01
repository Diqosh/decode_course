const fs = require('fs')
const path = require('path')

//create dir
// fs.mkdir(path.join(__dirname, 'notes'), (err) =>{
//     if (err) throw err
//
//     console.log('Directory was created')
// })

//create and write file
// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     "Hello world",
//     err =>{
//         if(err) throw err
//         console.log('file was created')
//
//     }
// )

//append text to file
// fs.appendFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     "Hello world data",
//     err =>{
//         if(err) throw err
//         console.log('file was changed')
//
//     }
// )

// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     (err, data) =>{
//         if(err) throw err
//         // console.log(Buffer.from(data).toString())
//         console.log(data)
//     }
// )

// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if (err) throw err
//         console.log('file was renamed')
//     }
//
// )