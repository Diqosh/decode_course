'use strict'
let student = {
    name: 'Dimash',
    age: 19,
    gpa: 3.7,
    address: {
        country: "Kazakhstan",
        city: "Almaty"
    }
}
let arr = [1, 2, 'asdf', student]
let students = [
    {
        name: 'Dimashka',
        age: 19,
        gpa: 3.7,
        address: {
            country: "Kazakhstan",
            city: "Almaty"
        },
        decode: true
    },
    {
        name: 'Zyia',
        age: 11,
        gpa: 3.7,
        address: {
            country: "Kazakhstan",
            city: "Almaty"
        },
        decode: true
    },
    {
        name: 'Anonymous',
        age: 19,
        gpa: 3.4,
        address: {
            country: "Kazakhstan",
            city: "Almaty"
        },
        decode: false
    },
    {
        name: 'tralala',
        age: 13,
        gpa: 3.4,
        address: {
            country: "Kazakhstan",
            city: "Almaty"
        },
        decode: false
    }
]

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (let item of arr) {
//     console.log(item)
// }

// arr.forEach(function(item){
//     console.log(item)
// })

// arr.forEach((item) => {
//     console.log(item)
// })

const studentsDIV = document.getElementById("students")
let studentsHTMl = ""

// students.forEach((item, i) => {
//     studentsHTMl += `
//         <div class="students-item">
//             <div>${i + xo}</div>
//             <div>${item.name}</div>
//             <div>${item.age}</div>
//             <div>${item.gpa}</div>
//         </div>
//     `
// })

function showStudents(cur) {
    studentsDIV.innerHTML = cur.map((item, i) =>
        `
        <div class="students-item">
            <div>${i + 1}</div>
            <div>${item.name}</div>
            <div>${item.age}</div>
            <div>${item.gpa}</div>
            <div><button onclick=del(${i})>Detete</button><button onclick=edit(${i})>Edit</button></div>
        </div>
        <div class="students-item form">
            <div></div>
            <input type="text" value="${item.name}">
            <input type="text" value="${item.age}">
            <input type="text" value="${item.gpa}">
            <div><button onclick=save(${i})>Save</button></div>
        </div>
    `
    ).join(' ')
}

let f = document.getElementById("search")

f.addEventListener('click' ,(e)=>{
    console.log(e.target)
})



function setStorage() {
    localStorage.setItem("students", JSON.stringify(students))
}

if (localStorage.getItem("students")) {
    students = JSON.parse(localStorage.getItem("students"))
} else {
    setStorage()
}

function compareAge(a, b) {
    if (a.age < b.age) {
        return -1
    } else if (a.age > b.age) {
        return 1
    }
    return 0
}

const a = document.querySelector('.students-header')
a.setAttribute("data-set-name", 'asd')

let i = 1

function compareName( a, b) {

        if (a.name > b.name) {
            return -1
        } else if (a.name < b.name) {
            return 1
        }


}

function compareGPA(a, b) {
    if (a.gpa < b.gpa) {
        return -1
    } else if (a.gpa > b.gpa) {
        return 1
    }
    return 0
}

function sort(str) {
    if (str === "name") {
        students.sort(compareName)
    }
    if (str === "age") {
        students.sort(compareAge)
    }
    if (str === "gpa") {
        students.sort(compareGPA)
    }

    console.log(students)
    showStudents(students)
}

function save(i) {
    let current_btn_edit = document.querySelector(`button[onclick="save(${i})"]`)
    let form = current_btn_edit.parentElement.parentElement;
    let cur_name = form.querySelector("input:nth-child(2)").value
    let cur_age = form.querySelector("input:nth-child(3)").value
    let cur_gpa = form.querySelector("input:nth-child(4)").value
    students[i].name = cur_name
    students[i].age = cur_age
    students[i].gpa = cur_gpa
    showStudents(students)
    setStorage()
}

function edit(i) {
    let current_btn_edit = document.querySelector(`button[onclick="edit(${i})"]`)
    let form = current_btn_edit.parentElement.parentElement.nextElementSibling;
    form.style.height = form.scrollHeight + "px"


}


function del(i) {
    students.splice(i, 1);
    showStudents(students)
}

showStudents(students)

let name = document.querySelector('input[placeholder="Name"]')
let age = document.querySelector('input[placeholder="Age"]')
let gpa = document.querySelector('input[placeholder="Gpa"]')

function addStudent() {
    students.push({
        name: name.value,
        age: age.value,
        gpa: gpa.value
    })
    showStudents(students)
    name.value = ''
    age.value = ''
    gpa.value = ''
    setStorage()
}

function search() {
    let a = document.getElementById("search").value
    let searched_students = []
    students.forEach(item => {

        if (a === '') {
            showStudents(students)
        }
        if (typeof (a) === "string") {
            if (item.name.includes(a)) {
                searched_students.push(item)
            }
        } else if (typeof (a) === "number") {
            if (0 < parseInt(a) <= 4) {
                if (item.gpa.toString().includes(a)) {
                    searched_students.push(item)
                }
            } else {
                if (item.age === parseInt(a)) {
                    searched_students.push(item)
                }
            }
        }
    })
    showStudents(searched_students)
}


