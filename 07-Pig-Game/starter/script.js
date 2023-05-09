'use strict';

// Elements
const diceEL = document.querySelector('.dice');
const playerScoresEL = document.querySelectorAll('.score');
const playerCurrentScoresEL = document.querySelectorAll('.current-score');
const rollTheDiceBtnEL = document.querySelector('.btn--roll');
const holdBtnEL = document.querySelector('.btn--hold');
const newGameBtnEL = document.querySelector('.btn--new');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

// Game stuff
const pointsToWin = 10;
let activePlayer = 0;
let currentScore = 0;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let playing = true;

// Hide the dice
diceEL.classList.add('hidden');

// Dice rolling and display dice
const rollTheDice = function () {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled dice :: ${diceRoll}`);
  return diceRoll;
};

// Display dice depending on the roll
const displayDice = function (roll) {
  diceEL.src = `dice-${roll}.png`;
};

// Set score values to 0 for all players
const setPlayersScoreToZero = function () {
  for (let i = 0; i < playerScoresEL.length; i++) {
    playerScoresEL[i].textContent = 0;
  }
};

// Set current score values to 0 for all players
const setCurrentScoreToZero = function () {
  for (let i = 0; i < playerCurrentScoresEL.length; i++) {
    playerCurrentScoresEL[i].textContent = 0;
  }
};

// Add roll value to current score
const addRollValueToCurrentScore = function (rollValue, player) {
  currentScore += rollValue;
  document.querySelector(`#current--${player}`).textContent = currentScore;
};

// Add current score to player score
const addCurrentScoreToPlayerScore = function (player) {
  let currentScore = Number(
    document.querySelector(`#current--${player}`).textContent
  );
  if (player === 0) {
    scorePlayerOne += currentScore;
    document.querySelector(`#score--${player}`).textContent = scorePlayerOne;
  } else {
    scorePlayerTwo += currentScore;
    document.querySelector(`#score--${player}`).textContent = scorePlayerTwo;
  }
};

// Switching players function
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Check if a player wins
const checkIfPlayerWins = function (player) {
  let playerPoints = Number(
    document.querySelector(`#score--${player}`).textContent
  );
  if (playerPoints >= pointsToWin) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }
};

// Start game by set players score to 0
setPlayersScoreToZero();

//Clicking on roll the dice btn
rollTheDiceBtnEL.addEventListener('click', function () {
  if (playing) {
    diceEL.classList.remove('hidden');
    let rollValue = rollTheDice();
    displayDice(rollValue);
    if (rollValue !== 1) {
      addRollValueToCurrentScore(rollValue, activePlayer);
    } else {
      setCurrentScoreToZero();
      currentScore = 0;
      switchPlayer(activePlayer);
    }
  }
});

// Clicking hold and add current score to player score, switch player
holdBtnEL.addEventListener('click', function () {
  if (playing) {
    addCurrentScoreToPlayerScore(activePlayer);
    if (!checkIfPlayerWins(activePlayer)) {
      setCurrentScoreToZero();
      currentScore = 0;
      switchPlayer(activePlayer);
    } else {
      playing = false;
      console.log(playing);
      console.log(`Player ${activePlayer + 1} Won!`);
    }
  }
});

// Click on new game btn
newGameBtnEL.addEventListener('click', function () {
  setPlayersScoreToZero();
  setCurrentScoreToZero();
  diceEL.classList.add('hidden');
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  activePlayer = 0;
});
