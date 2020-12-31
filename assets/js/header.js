if (window.onresize()) {
    menu.display = 'none'

}

function abreMenu() {
    let menu = document.querySelector('nav.menu-mobile').style
    if (menu.display == 'block') {
        menu.display = 'none'
    } else {
        menu.display = 'block'

    }
}