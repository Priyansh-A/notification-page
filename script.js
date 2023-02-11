let mark = document.querySelector('.mark')
let card = document.querySelector('.card')
mark.forEach.addEventListener('click', ()=>{
    card.classList.toggle('unread')
})