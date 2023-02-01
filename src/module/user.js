import { addScore, getScore } from './api.js';

const form = document.querySelector('.add-container');
const btn = document.querySelector('.refresh-btn');
const alertContainer = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;
  addScore(name, score);
  alertContainer.classList.add('add');
  setTimeout(() => {
    alertContainer.classList.remove('add');
  }, 5000);
  name.innerhtml = '';
  score.innerhtml = '';
});

btn.addEventListener('click', () => {
  getScore();
});

window.addEventListener('load', () => {
  getScore();
});
