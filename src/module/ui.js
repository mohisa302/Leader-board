const scores = document.querySelector('.scores-container');
export const display = (data) => {
  scores.innerHTML = '';
  data.forEach((element) => {
    const score = document.createElement('li');
    score.classList.add('score-element');
    score.innerHTML = `${element.user} : ${element.score}`;
    scores.appendChild(score);
  });
};
