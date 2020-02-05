const topNav = document.getElementById('top-nav');
const menuButton = topNav.querySelector('i');
const menu = topNav.querySelector('ul');

menuButton.addEventListener('click', event => {
    event.stopPropagation();

    if (menu.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
})

function openMenu() {
    menu.classList.add('active');
    document.addEventListener('click', closeMenu);
}

function closeMenu() {
    menu.classList.remove('active');
    document.removeEventListener('click', closeMenu);
}