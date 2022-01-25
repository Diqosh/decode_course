'use strict'

let burgerButton = document.getElementsByClassName("burger__button")[0],
    hiddenMenu = document.getElementsByClassName("hidden-menu__wrapper")[0],
    exitMenu = document.getElementsByClassName("hidden-menu__exit")[0],
    openMenu = function (){
    hiddenMenu.classList.add('active')

    },
    closeMenu = function (){
    hiddenMenu.classList.remove("active")
    }

console.log(hiddenMenu)
burgerButton.addEventListener('click',openMenu )
exitMenu.addEventListener('click', closeMenu)