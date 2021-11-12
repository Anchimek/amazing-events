const mainNav = document.querySelector('.main-nav')
const menuBtn = document.querySelector('.burger')
        

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active')
    mainNav.classList.toggle('is-active')
    
    const navLinks = document.querySelectorAll('.main-nav li')
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `fadeInText .5s ease forwards ${index / 7 + .3}s`
        }
    })
})

let heart = document.querySelectorAll('.icon-heart-empty')

heart.forEach( item => { 
    item.addEventListener('click', () => {
        if (item.classList == 'icon-heart-empty'){
            item.classList.toggle('icon-heart-1'); 
        } else {
            item.classList.remove('icon-heart-1'); 
            item.classList.add('icon-heart-empty'); 
        }
    } 
    )}
)

const shareIcon = document.querySelectorAll('.icon-forward-outline') 

shareIcon.forEach( item => {
    const share = document.querySelector('.share')
    item.addEventListener('click', () => {
        share.classList.toggle('show')
    })

    const exit = document.querySelector('.exit')
    exit.addEventListener('click', () => {
        share.classList.remove('show')
    })
})


gsap.registerPlugin(ScrollTrigger)
const sections = document.querySelectorAll('section')
const headers = document.querySelectorAll('h1')

sections.forEach( section => {
    gsap.fromTo(section.children, {y: '+=50', opacity: 0}, {y: 0, opacity: 1,  duration: 1.5, ease: 'easeInOut', scrollTrigger: {
        trigger: section,
        start: 'top 40%',
        scroller: 'article'
    }})
})

headers.forEach( h1 => {
    gsap.fromTo(headers, {x: '+=50', opacity: 0}, {x: 0, opacity: 1, duration: 1.5, ease: 'easeInOut' })
})