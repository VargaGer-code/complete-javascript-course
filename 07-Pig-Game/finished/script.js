"use strict";

// Selecting elemets
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const score0EL = document.querySelector("#score--00");
const score1EL = document.querySelector("#score--01");
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");

// Startin conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

// Rolling the dice
btnRoll.addEventListener("click", function () {
  // Generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  // Check for rolled 1: if true, switch player
});
