import { myApiFunction } from './load_movies';
import { initTyped } from './plugins/init_typed';

initTyped();

const input = document.querySelector('#form');

input.addEventListener('submit', (event) => {
  event.preventDefault();
  myApiFunction();
});





