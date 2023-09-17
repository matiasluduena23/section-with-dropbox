const space = document.createElement('br');
const span = document.querySelector('.line');

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        span.appendChild(space);
    }
});


const itemFeature = document.querySelector('.item-feature')
const optionFeature = document.querySelector('.option-feature')

itemFeature.addEventListener('click', ()=> {
    optionFeature.classList.toggle('active')

;})

const itemCompany = document.querySelector('.item-company')
const optionCompany = document.querySelector('.option-company')

itemCompany.addEventListener('click', ()=> {
    optionCompany.classList.toggle('active')
})

