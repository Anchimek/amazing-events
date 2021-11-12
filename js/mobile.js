document.addEventListener('DOMContentLoaded', () =>{
    let resizer = new ResizeObserver(addClass)
    resizer.observe(document.querySelector('#wrapper'))
})

function addClass(entries) {
    let left = document.querySelector('.left')
    let right = document.querySelector('.right')
    let photo2 = document.querySelector('.photo2')

    if(entries[0].contentRect.width < 1023){
        left.classList.add('mobile')
        right.style.display = 'none'
        photo2.classList.add('mobile')
    } else {
        left.classList.remove('mobile')
        right.style.display = 'block'
        photo2.classList.remove('mobile')
    }
}

