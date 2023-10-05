let btnMenu = document.getElementById('btn-menu') 
let menu = document.getElementById('menu-mobile')
let closeButton = document.querySelector('.btn-close')
let overlay = document.getElementById('overlay-menu')
let navOptions = document.querySelectorAll('.option-mobile') 

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open-menu')
})

closeButton.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})

navOptions.forEach((option) => {
    option.addEventListener('click', ()=>{
        menu.classList.remove('open-menu')
    })
})