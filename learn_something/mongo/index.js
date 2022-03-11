const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/m_db')
    .then(()=>{
        console.log('mongo db connected')
    })
    .catch((e)=>{
        console.log('mongo db not connected', e)
    })

require("./models/person.model")
const Person = mongoose.model('persons')
const person = new Person({
    name: "Dimashka",
    age: 24,
    phones: [12341234],
    isMaried: true
})

Person.find({name: {'$in': ['pers0']}})
    .limit(2)
    .sort('age')
    .then(persons =>{
        console.log(JSON.stringify(persons, null, 2))
        const p_id = persons[0]
        // Person.find({_id: p_id._id}).remove().then( _ => console.log('success'))

    });

// Person.find({age: 24})
//     .then(persons =>{
//         console.log(JSON.stringify(persons, null, 2))
//     });

// [{name: "pers1"}, {name: "pers2"}, {name: "pers3"}].forEach(p =>{
//     new Person(p).save()
// })
// person.save()
//     .then((user)=>{
//         console.log(user)
//     })
//     .catch((e)=>{
//         console.log(e)
//     })