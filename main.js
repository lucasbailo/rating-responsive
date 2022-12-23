
var buttons_container = document.getElementsByName("buttons_container")

var submit = document.querySelector("[data-button]")

var place_rating = document.querySelector("[data-rating]")

var mainPage = document.querySelector("[data-mainPage]")

var thanksPage = document.querySelector("[data-thanksPage]")

var redo = document.querySelector("[data-redo]")




submit.addEventListener('click', () => {
    getRating ()
    changePage ()
})


function getRating () {
    let checkbox = document.querySelector('input[name="rating"]:checked');
    let rating = checkbox.value
    console.log(rating)
    place_rating.innerText = rating
}

function changePage () {
    mainPage.style.display = "none"
    thanksPage.style.display = "block"

}

redo.addEventListener('click', () => {
    mainPage.style.display = "block"
    thanksPage.style.display = "none"
})