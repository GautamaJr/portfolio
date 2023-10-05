document.addEventListener('DOMContentLoaded', () => {
    let readMoreBtn = document.querySelector('.read-more')
    let setTextElement = document.querySelector('.set-text')

    readMoreBtn.addEventListener('click', () => {
        setTextElement.classList.add('expand-text')        
    })
})