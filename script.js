const itemsQuestions = document.querySelectorAll('.item')

itemsQuestions.forEach( item => {
    item.addEventListener("click", () => {
        
        checkActive()
        
        item.classList.add('active')
    })
})



function checkActive() {
    const active = document.querySelector('.active')
    if (active) active.classList.remove('active')
}