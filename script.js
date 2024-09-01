window.addEventListener("load", start);

let guessCount = 0;
let currentGuess;

function start() {
  console.log("JS kører");
  makeGuess();

  document.querySelector("#tooLowButton").addEventListener("click", tooLow);
  document.querySelector("#tooHighButton").addEventListener("click", tooHigh);
  document.querySelector("#correctButton").addEventListener("click", correct);
}

function makeGuess() {
  currentGuess = getRandomGuess();
  guessCount++;
  outputGuess(currentGuess);
}

function getRandomGuess() {
  return Math.floor(Math.random() * 100) + 1;
}

function outputGuess(guess) {
  const output = document.querySelector("#output");
  output.textContent = `Jeg gætter på: ${guess}`;
  const countField = document.querySelector("#countField");
  countField.textContent = `Forsøg: ${guessCount}`;
}

function tooLow() {
  console.log("For lavt");
  makeGuess();
}

function tooHigh() {
  console.log("For højt");
  makeGuess();
}

function correct() {
  console.log("Korrekt");
  const output = document.querySelector("#output");
  output.textContent = `Jeg gættede rigtigt! Dit tal var ${currentGuess}.`;
  turnOffButtons();
}

function turnOffButtons() {
  document.querySelector("#tooLowButton").disabled = true;
  document.querySelector("#tooHighButton").disabled = true;
  document.querySelector("#correctButton").disabled = true;
}
