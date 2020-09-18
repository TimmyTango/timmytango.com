import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, faEnvelope, faGithub, faLinkedin);
dom.watch();

function toggleImageExpansion(event) {
    if (window.innerWidth > 576) {
        const img = event.target;
        if (img) {
            img.classList.toggle('expand');
            img.parentNode.classList.toggle('visible');
            document.body.classList.toggle('freeze');
        }
    }
}
const images = document.querySelectorAll('#projects img');

for (let img of images) {
    img.addEventListener('click', toggleImageExpansion);
}
