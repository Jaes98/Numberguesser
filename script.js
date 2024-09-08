window.addEventListener("load", start);

let guess;
let guessCount = 0;
let currentGuess;
let previousGuess;
let attemptMessage;
let min = 1;
let max = 100;
let middle = Math.floor((max + min) / 2);

function start() {
  console.log("JS kører");

  attemptMessage = document.querySelector("#attemptMessage");

  playButton = document.querySelector("#play-btn");
  playButton.addEventListener("click", startGame);

}

function startGame() {
  attemptMessage.textContent = "";
  guessCount = 0;
  min = 1;
  max = 100;

  document.querySelector("#tooLowButton").addEventListener("click", tooLow);
  document.querySelector("#tooHighButton").addEventListener("click", tooHigh);
  document.querySelector("#correctButton").addEventListener("click", correct);

  makeNewGuess();
}

function makeNewGuess() {
  if (min <= max) {
    const offset =  
    Math.floor(Math.random() * ((max - min) * 0.2)) - (max - min) * 0.1;

    guess = Math.floor((max + min) / 2 + offset);

    previousGuess = guess;
    guessCount++;
    outputGuess(guess);
    document.querySelector("#output").textContent= `Gætter på: ${guess}`;
  } else {
    attemptMessage.textContent = `Jeg gættede på ${lastGuess} - Der er ikke flere gæt`;
    console.error("Error: No more guesses");
  }
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
  min = guess + 1
  makeNewGuess();
}

function tooHigh() {
  console.log("For højt");

  max = guess - 1;

  makeNewGuess();
}

function correct() {
  console.log("Korrekt");
  const output = document.querySelector("#output");
  output.textContent = `Jeg gættede rigtigt!`;
  attemptMessage.textContent = `${getCommentForAttempts(guessCount)}`;
  turnOffButtons();
}

function getCommentForAttempts(attempts) {
  if (attempts <= 3) {
    return "Du er en maskine";
  } else if (attempts <= 5) {
    return "Godt gættet";
  } else if (attempts <= 7) {
    return "Middelmådigt";
  } else if (attempts > 7) {
    return "Du skal øve dig";
  } else {
    return "";
  }
}

function turnOffButtons() {
  document.querySelector("#tooLowButton").disabled = true;
  document.querySelector("#tooHighButton").disabled = true;
  document.querySelector("#correctButton").disabled = true;
}
