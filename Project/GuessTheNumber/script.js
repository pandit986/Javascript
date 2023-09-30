let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessesSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numberGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (gues) => {
  //validating the nnumber
  if (gues === "" || isNaN(gues)) {
    alert("please Enter a Valid Number");
  } else if (gues < 1) {
    alert("please Enter a Number more than one");
  } else if (gues > 100) {
    alert("please Enter the number less than or equal 100");
  } else {
    prevGuess.push(gues);
    if (numberGuess === 11) {
      displayGuess(gues);
      displayMessage(`Game Over Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(gues);
      checkGuess(gues);
    }
  }
};

const checkGuess = (guess) => {
  //
  if (guess === randomNumber) {
    displayMessage("You Guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOOO low");
  } else if (guess > randomNumber) {
    displayMessage("Number is TOOO High");
  }
};

const displayGuess = (guess) => {
  userInput.value = "";
  guessesSlot.innerHTML = `${prevGuess}`;
  numberGuess++;
  remaining.innerHTML = `${11 - numberGuess}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
   new newGame =  document.querySelector("#newGame")
   newGame.addEventListener("click" , ()=>{
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numberGuess = 1
    guessesSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numberGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame = true
   })
};
