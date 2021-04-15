const menu = document.querySelector('nav.menu-mobile')
document.addEventListener('click', e => {
    el = e.target
    if(el.classList.contains('btn-menu-mobile')){
        if(menu.classList.contains('aparece')){
            menu.classList.add('some')
            menu.classList.remove('aparece')
            return
        }
        menu.classList.add('aparece')
        menu.classList.remove('some')
    return
    }
})