


function activate(){
    document.getElementById('burger').classList.add('active');
    console.log("asd")
}

function deactivate(e){
    e.stopPropagation();
    document.getElementById('burger').classList.remove("active")
    console.log()
}


