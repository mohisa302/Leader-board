import { addScore, getScore } from './api.js';

const form = document.querySelector('.add-container');
const btn = document.querySelector('.refresh-btn');
const alertContainer = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name');
  const score = document.querySelector('.score');
  addScore(name.value, score.value);
  alertContainer.classList.add('add');
  setTimeout(() => {
    alertContainer.classList.remove('add');
  }, 5000);
  name.value = '';
  score.value = '';
});

btn.addEventListener('click', () => {
  getScore();
});

window.addEventListener('load', () => {
  getScore();
});
