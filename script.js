"use strict";

// Declaring variables
const playGame = document.querySelector(".play");
const resetGame = document.querySelector(".reset");

const dice = document.querySelector(".dice");

const player0text = document.querySelector(".text1");
const player1text = document.querySelector(".text2");

const player0image = document.querySelector(".img1");
const player1image = document.querySelector(".img2");

let playgingGame = true;

const winner = document.querySelector(".winner--text");

let player0, player1;

// writing Functions
const init = function () {
  if (playgingGame) {
    player0 = Math.trunc(Math.random() * 6) + 1;
    player1 = Math.trunc(Math.random() * 6) + 1;

    // displaying the generated number
    // player0text.textContent = player0;
    // player1text.textContent = player1;

    // displaying the image
    // player0image.src =`images/dice${player0}.png`;
    player0image.setAttribute("src", `./images/dice${player0}.png`);
    player1image.src = `./images/dice${player1}.png`;

    // Declaring a winner
    if (player0 > player1) {
      winner.textContent = "Player 1 wins !";
    } else if (player0 === player1) {
      winner.textContent = "Draw. Play again";
    } else {
      winner.textContent = "Player 2 wins !";
    }
  }
};

// const reset = function () {
//   winner.classList.add("hidden");
//   player0image.classList.add("hidden");
//   player1image.classList.add("hidden");

//   playgingGame = true;
//   init
// };

// Calling DOM activities
playGame.addEventListener("click", init);
// resetGame.addEventListener("click", reset);
