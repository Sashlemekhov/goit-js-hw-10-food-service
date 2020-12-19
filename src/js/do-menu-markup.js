import menuData from './menu.json';
import menuTemplate from '../templates/menu.hbs';

const menuListRef = document.querySelector('.js-menu');
const markup = menuTemplate(menuData);

menuListRef.insertAdjacentHTML('beforeend', markup);

