'use strict';
document.querySelector('h1').textContent = 'Lets Start The Game!.😎';
document.querySelector('.message').textContent = 'Start Guessing!.😏';
document.querySelector('.between').textContent =
  'Guess The Number Between 1 and 20🙃';
//document.querySelector('.number').textContent = 18;
document.querySelector('.guess').value = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  if (!guessNumber) {
    DisplayMessage('No Number!');
  }
  //win
  else if (secretNumber === guessNumber) {
    DisplayMessage('You Guessd A Corect Number!🤩');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (secretNumber !== guessNumber) {
    if (score > 1) {
      DisplayMessage(
        secretNumber > guessNumber
          ? 'You Guessd A Low Number!🥴'
          : 'You Guessd A Heigh Number!😮'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      DisplayMessage('You Losse the Game😔');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});
const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click', function () {
  location.reload();
});
function DisplayMessage(message) {
  document.querySelector('.message').textContent = message;
}
