"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".number").textContent = secretNumber;

let currentScore = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(document.querySelector(".guess").value);

  // When no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number :(";

    // When wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct! :D";
    highScore = currentScore;
    document.querySelector(".highscore").textContent = highScore;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When guess is bigger than secret number
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent = "Secret number is lower";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent = "You lost :(";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is lower than secret number
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent =
        "Secret number is higher";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;

      // When plyer is out of guesses
    } else {
      document.querySelector(".message").textContent = "You lost :(";
      document.querySelector(".score").textContent = 0;
    }
  }
});
