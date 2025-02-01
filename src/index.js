import { home } from './home/home';
import { menu } from './menu/menu';
import { about } from './about/about';

import './global.css';

const obj = {
    'home': home,
    'menu': menu,
    'about': about,
}

const content = document.querySelector('#content');
const pages = document.querySelectorAll('button');

pages.forEach(p => {
    p.addEventListener('click', e => {
        content.textContent = '';
        content.appendChild(obj[e.target.id]);
    })
})

content.appendChild(home);