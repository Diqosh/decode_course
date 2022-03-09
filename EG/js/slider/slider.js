
$(document).ready(function (){

    // $('.slider').slick({
    //
    //     arrows: false,
    //     slidesToShow: 6,
    //     adaptiveHeight: true,
    //     asNavFor: ".slider_big",
    //
    //     vertical: true,
    //     draggable: false,
    //     swipe: false,
    //
    //
    //
    // },),
    $('.slider_big').slick({

        // arrows: false,

        slidesToShow: 1,
        dots: true,
        // adaptiveHeight: true,
        // asNavFor: ".slider",


        // draggable: false,
        // swipe: false,
        autoplay: true,
        autoplaySpeed: 4000,

    },)

});

let sliders = document.querySelector(".slider").children;
// console.log(sliders)
// for (let i = 0; i < sliders.length; i++) {
//     (function () {
//         setTimeout(function () {
//             // sliders[i].classList.toggle("slick-active")
//             console.log(i)
//
//         }, 2000)
//     })()
//
// }

let little_slider = () =>{
    let i =0
    setInterval(function (){
        if(i === 0){
            sliders[6].classList.remove("slick-current")
        }
        if(i > 0){
            sliders[i-1].classList.toggle("slick-current")
        }
        sliders[i].classList.toggle("slick-current")
        i += 1;
        console.log(i)
        if(i === 7){
            i=0
        }
    },4000)
}
little_slider()


// active dots product
let dots = document.querySelectorAll(".product__dots")

dots.forEach((elem) => {
    elem.addEventListener("click", function (){
        elem.children[1].classList.toggle('active')
    })
})
