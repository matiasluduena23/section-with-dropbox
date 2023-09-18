const space = document.createElement('br');
const span = document.querySelector('.line');

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        span.appendChild(space);
        closeNavOnResize()
    }
});

function closeNavOnResize(){
    document.querySelectorAll('.active').forEach(e => e.classList.remove('active'))
    const link = document.querySelector('.hamburger');
        closeMenu(link)
}


const ariaExpanded = (linkClass, optionClass) => {
    const nav = document.querySelector(optionClass)
    const link = document.querySelector(linkClass);

    link.addEventListener('click', ()=> {
        const isOpened = link.getAttribute('aria-expanded') === 'true';
        if(isOpened ? closeMenu(link) : openMenu(link));
        
        nav.classList.toggle('active')
    });
}

ariaExpanded('.hamburger','.primary-navigation' )
ariaExpanded('.item-feature','.option-feature' )
ariaExpanded('.item-company','.option-company' )



function openMenu(link){
    link.setAttribute('aria-expanded', 'true' )
}

function closeMenu(link){
    link.setAttribute('aria-expanded', 'false' )
}
