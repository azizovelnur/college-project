const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const headerBtn = document.querySelector('.header-main__btn');
const closePopupBtn = document.querySelector('.popup__close')


headerBtn.addEventListener('click',  (e) => {
    e.preventDefault();
    popup.classList.add('active');
    popupForm.classList.add('active');
    body.classList.toggle("noscroll")
})

closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('active')
    popupForm.classList.remove('active')
    body.classList.remove("noscroll");
})


// document.addEventListener('click', (e) => {
//     if(e.target === popup) {
//         popup.classList.remove('active')
//         popupForm.classList.remove('active')
//         body.classList.remove("noscroll");
//     }
// })