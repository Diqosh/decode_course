let body = document.getElementsByTagName('body')[0],
    dots = document.querySelectorAll('.product__dots')

    activate = function (...args) {
        args.forEach(
            elem =>{
                elem.classList.toggle("active");
            }
        )

        body.classList.toggle("lock");

    }

    dots.forEach(elem =>{
        elem.addEventListener('click', function (){

            settings = elem.querySelector('.product__settings')
            settings.classList.toggle('active')
        })
    })





function deleteGame(id){
    axios.delete(`/api/games/${id}`).then(res =>{
        getGames()
    })
}

function getGames(){


    axios.get('/api/games').then(res =>{
        showGames(res.data)
    })
}

console.log(burger)

const GamesDiv = document.querySelector('.products__main')
function showGames(games) {
    let gamesHTML = ""
    for (let i = 0; i < games.length; i++) {
        gamesHTML += `
            <div class="products__item">
                <div class="product__image">

                    <img src="images/products_image/1.png" alt="">

                    <button class="add_basket"><img
                                src="images/header/plus-solid.svg" alt=""></button>

                </div>

                <div class="product__text-wrapper">
                    <div class="product__title">
                        ${games[i].title}
                    </div>
                    <div class="product__dev">

                        <a href=""> test dev</a>
                    </div>
                </div>
                <div class="product__settings-wrapper">

                    <span>${games[i].price}</span>
                    <div class="product__dots">
                        <img src="images/products_image/dots.svg" alt="">



                        <div class="product__settings">
                            <div class="product__edit">
                                <a href="">Edit</a>
                            </div>
                            <div class="product__delete" onclick="deleteGame('${games[i]._id}')">
                                <a href="">Delete</a>
                            </div>
                        </div>



                    </div>


                </div>

            </div>
           
        `
        if(games.length > 0) GamesDiv.innerHTML = gamesHTML
    }
}

// dev_menu_btn.addEventListener('click', function (){
//     activate(dev_menu)
// } );
// console.log(dev_menu)