const info = document.querySelector('.info')
const arrow = document.querySelector('.icon-down-1')
let block = ""
let counter = 0

arrow.style.animation = 'animateArrow 2s 5s infinite'
arrow.addEventListener('click',() => {
        if (counter === 0) {block = "start"} 
        else {block = "center"}
        counter++

        info.scrollIntoView({behavior: "smooth", block: block})
})

const photoText = document.querySelectorAll('.photo__text')
photoText.forEach((photoText, index ) => {
    photoText.style.animation = `fadeInText 1s ease-out forwards ${index / 2 + 1.5}s`
})
