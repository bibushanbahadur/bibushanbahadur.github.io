const cvBTN = document.querySelector('.btn');
const githubIcon = document.querySelector('.githubIcon');
const linkedinIcon = document.querySelector('.linkedinIcon');
const foodBtn = document.querySelector('.foodBtn');
const guessTheNumberBtn = document.querySelector('.guessTheNumberBtn');
const forkifyBtn = document.querySelector('.forkifyBtn');

// to download CV
cvBTN.addEventListener('click', function (e) {
  e.preventDefault();
  open('cv.txt');
});

// To open github page

// To open LinkedIn page

// To open Websites

foodBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://food-delivery-pg.netlify.app/');
});

guessTheNumberBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://guessthenumber-pg.netlify.app/');
});

forkifyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://forkify-prasanga.netlify.app/');
});
