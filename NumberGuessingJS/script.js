window.addEventListener("load", start);
 let secret = randomNumber();
 let guessCount = 0;

function start(params) {
  console.log("JS kører");

  const form = document.querySelector("form");
  form.addEventListener("submit", recieveInput);

  const restartButton = document.querySelector("#restartButton");
    restartButton.addEventListener("click", restartGame);
  
}

function randomNumber(params) {
  return Math.floor(Math.random() * 100) + 1;
}

function restartGame(params) {
    guessCount = 0;
    const output = document.querySelector("#liste");
    output.textContent = "";
    const countField = document.querySelector("#countField");
    countField.textContent = `Forsøg: ${guessCount}`;

}

function recieveInput(event) {
  event.preventDefault();
  const form = event.target;
  guessCount++;

    const guess = form.guessField.valueAsNumber
    console.log(guess);

  const comp = compare(guess, secret);
  if (comp === 0) {
    outputAnswer(`Du gættede på ${guess}, det var korrekt!`);
  } else if (comp > 0) {
    outputAnswer(`Du gættede på ${guess}, det var for lavt.`);
  } else if (comp < 0) {
    outputAnswer(`Du gættede på ${guess}, det var for højt.`);
  }
}

function compare(secret, guess) {
  return guess - secret;
}

function outputAnswer(result) {
  const output = document.querySelector("#liste");
  output.insertAdjacentElement("beforeend", document.createElement("li")).textContent = result;
  const countField = document.querySelector("#countField");
  countField.textContent = `Forsøg: ${guessCount}`;


}
