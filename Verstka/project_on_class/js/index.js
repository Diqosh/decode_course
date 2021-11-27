const aside = document.getElementById("aside")

function openAside() {
    aside.classList.add('active')

}

function closeAside() {
    aside.classList.remove("active")
}

function openSecondAside(id) {
    document.getElementById(id).classList.add('active')
}

function backAside(id) {
    document.getElementById(id).classList.remove('active')
}

function toggleCollapse(e){
    let element = e.target

    if(element.classList[e.target.classList.length - 1] === "active") {
        element.classList.remove("active")
        element.nextElementSibling.style.height =  "0px"
    }

    else {
        element.classList.add("active")
        element.nextElementSibling.style.height = element.nextElementSibling.scrollHeight + "px"
    }


}