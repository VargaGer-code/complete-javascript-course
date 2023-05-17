'use strict';

// Selecting player elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const winnerName = document.querySelector('.winnersname');

// Selecting dice, btn elements
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const randomizeStartingPlayer = function () {
  return Math.floor(Math.random() * 2);
};

// Declare variables and than assign values to them in the init function
let scores, currentScore, activePlayer, playing, pointsToWin;

// Starting conditions
const init = function () {
  pointsToWin = 10;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = randomizeStartingPlayer();
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  //winnerName.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');

  // Player element depends on starting player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Switch backgrounds
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

init();

// Rolling the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 2. Check if rolle 1: if true, switch player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

// Clicking on btn hold
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active players score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check score if >= winningScore
    if (scores[activePlayer] >= pointsToWin) {
      // Finish game
      playing = false;
      diceEl.classList.add('hidden');
      winnerName.textContent = `Player ${activePlayer + 1} win!`;
      winnerName.classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch players
      switchPlayer();
    }
  }
});

// Starting newGame
btnNew.addEventListener('click', init);
