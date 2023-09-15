let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gusseSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault(e);
    const guess = parseInt(userInput.value);
    vailidateGuess(guess);
  });
}

const vailidateGuess = (guess) => {
  if (isNaN(guess)) {
    alert('Please enter a number!');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter number between 1 and 100');
  } else {
    preGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage('You won the game!');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('Number is too low!');
  } else if (guess < randomNumber) {
    displayMessage('Number is too big!');
  }
};

const displayGuess = (guess) => {
  userInput.value = '';
  gusseSlot.innerHTML += `${guess},`;
  numGuess = numGuess + 1;
  remaining.innerHTML = `${11 - numGuess}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const newGame = () => {
  const newGamebtn = document.querySelector('#newGame');
  newGamebtn.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    gusseSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
};
const endGame = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};
