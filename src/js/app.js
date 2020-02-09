import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

library.add(faBars, faEnvelope, faGithub, faLinkedin);
dom.watch();

const topNav = document.querySelector('#top-nav');
const menuButton = topNav.querySelector('i');
const menu = topNav.querySelector('ul');
const sectionLinks = menu.querySelectorAll('li');

for(let link of sectionLinks) {
    link.addEventListener('click', event => {
        document.querySelector(`section#${link.innerText.toLowerCase()} span.anchor`).scrollIntoView({behavior: "smooth"});
    })
}

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
