/*receive the users onkeyup info and save it to a variable.
make the computer choose a random key and save it to a variable
create a function that compares the users guess and the computers guess
create a varibale for the wins and losses
create if  saying that if the users guess and computers guess is equal then
add one to wins
create else saying that if they're not equal add to one to losses
*/

var wins = 0;
var losses = 0;
var guesses = 9;
var chosen = [];
var options = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keyCode);
  console.log(userGuess);
  var computerGuess = options[Math.floor(Math.random() * options.length)];
  console.log(computerGuess);
  chosen.push(userGuess);
  if (userGuess === computerGuess) {
    wins++;
  } else {
    guesses--;
  }

  var html =
    "<h1>The Psychic Game</p>" +
    "<p>Guess What Letter I'm Thinking Of</p>" +
    "<p>Wins: " +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>" +
    "<p>GuessesLeft: " +
    guesses +
    "</p>" +
    "<p>YourGuessSoFar: " +
    chosen +
    "</p>";

  document.querySelector("#game").innerHTML = html;

  if (guesses == 0) {
    guesses = 10;
    chosen = [];
    losses++;
  }
};
