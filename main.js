var submitButton = document.querySelector(".submit-guess");
var updateButton = document.querySelector(".update-button");
var clearButton = document.querySelector(".clear-form");
var nameInputOne = document.querySelector("#name-input-1");
var nameInputTwo = document.querySelector("#name-input-2");
var guessInputOne = document.querySelector("#guess-input-1");
var guessInputTwo = document.querySelector("#guess-input-2");
var column2 = document.querySelector('.column2');
var minRange = document.querySelector('#min-range-input');
var maxRange = document.querySelector('#max-range-input');
var resetButton = document.querySelector('.reset-game');
var nameOneMessage = document.querySelector(".name-1");
var nameTwoMessage = document.querySelector(".name-2");
var guessOneMessage = document.querySelector(".challenger-1-current-guess");
var guessTwoMessage = document.querySelector(".challenger-2-current-guess");
var challengerOneGuessResponse = document.querySelector('.challenger-1-hint');
var challengerTwoGuessResponse = document.querySelector('.challenger-2-hint');
var winningName = null;
var randomNumber = null;
var guessCount = 0;

nameInputOne.addEventListener('input', inputHandler);
nameInputTwo.addEventListener('input', inputHandler);
guessInputOne.addEventListener('input', inputHandler);
guessInputTwo.addEventListener('input', inputHandler);
submitButton.addEventListener('click', submitHandler);
updateButton.addEventListener('click', updateHandler);
clearButton.addEventListener('click', clearContents);
minRange.addEventListener('input', inputHandler);
maxRange.addEventListener('input', inputHandler);
maxRange.addEventListener('keyup', inputHandler);
resetButton.addEventListener('click', resetGame);

// Input field event handlers
function inputHandler() {
  enableClearForm();
  enableSubmitButton();
  enableResetButton();
  enableUpdateButton();
  displayMaxErrorMessage();
}

// Submit button event handler
function submitHandler() {
  displayInputs();
  challengerOneResults();
  displaySubmitErrorMessage();
}

// Update button event handler
function updateHandler() {
  inputRanges();
  updateRandomInteger();
}

// Function to clear text in guess fields
function clearGuesses() {
guessInputOne.value = '', guessInputTwo.value = '', submitButton.disabled = true;
}

// Functions to enable buttons
function enableSubmitButton() {
  if (nameInputOne.value !='' && nameInputTwo.value !='' && guessInputOne.value !='' && guessInputTwo.value !='') {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

function enableResetButton() {
  if (nameInputOne.value !='' || nameInputTwo.value !='' || guessInputOne.value !='' || guessInputTwo.value !='' || minRange.value !='' || maxRange.value !='') {
    resetButton.disabled = false
  } else {
    resetButton.disabled = true
  }
}

function enableUpdateButton() {
  if (minRange.value !='' && maxRange.value !='') {
    updateButton.disabled = false
  } else {
    updateButton.disabled = true
  }
}

function enableClearForm() {
  if (nameInputOne.value !='' || nameInputTwo.value !='' || guessInputOne.value !='' || guessInputTwo.value !='') {
    clearButton.disabled = false
  } else {
    clearButton.disabled = true
  }
}

// Function to reset game
function resetGame() {
  clearContents();
  minRange.value = '', maxRange.value = '', resetButton.disabled = true,
  document.querySelector(".range-bottom").innerHTML = '';
  document.querySelector(".range-top").innerHTML = '';
}

// Function to clear contents when Clear Form is clicked
function clearContents() {
  nameInputOne.value = '', nameInputTwo.value = '', guessInputOne.value = '', guessInputTwo.value = '', clearButton.disabled = true, submitButton.disabled = true;
}

// Function to add Challenger and Guess input to Latest Guess form
function displayInputs(){
  if(parseInt(guessInputOne.value) >= parseInt(minRange.value) && parseInt(guessInputOne.value) <= parseInt(maxRange.value) && parseInt(guessInputTwo.value) >= parseInt(minRange.value) && parseInt(guessInputTwo.value) <= parseInt(maxRange.value)) {
  var nameOne = nameInputOne.value;
  nameOneMessage.innerText = nameOne;
  var nameTwo = nameInputTwo.value;
  nameTwoMessage.innerText = nameTwo;
  var guessOne = guessInputOne.value;
  guessOneMessage.innerText = guessOne;
  var guessTwo = guessInputTwo.value;
  guessTwoMessage.innerText = guessTwo;
  clearGuesses();
 }
}

  // Function to enter numbers from min and max range into current range
  function inputRanges() {
    document.querySelector(".range-bottom").innerHTML = minRange.value;
    document.querySelector(".range-top").innerHTML = maxRange.value;
  }

// Function to input range parameters into random number generator
function updateRandomInteger() {
  min = parseInt(minRange.value);
  max = parseInt(maxRange.value);
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to populate max range error message
function displayMaxErrorMessage() {
if (parseInt(maxRange.value) < parseInt(minRange.value)) {
  document.getElementById("max-error-message").classList.replace("hidden", "visible");
  maxRange.classList.add("border-pink");
  updateButton.disabled = true;
  } else {
  document.getElementById("max-error-message").classList.replace("visible", "hidden");
  maxRange.classList.remove("border-pink");
  }
}

// Function to populate error message if guesses are out of range
function displaySubmitErrorMessage() {
  if(parseInt(guessInputOne.value) < parseInt(minRange.value) || parseInt(guessInputOne.value) > parseInt(maxRange.value) || parseInt(guessInputTwo.value) < parseInt(minRange.value) || parseInt(guessInputTwo.value) > parseInt(maxRange.value)) {
    document.querySelector(".submit-error-text").classList.replace("hidden", "visible");
    guessOneMessage.innerText = '', guessTwoMessage.innerText = '';
    challengerOneGuessResponse.innerHTML = 'Guess again!',
    challengerTwoGuessResponse.innerHTML = 'Guess again!';
  }
}

// Function to count guesses
function challengerGuessCount() {
  document.querySelector(".challenger-guess-count").innerHTML = guessCount;
  guessCount = 0;
};

// Functions for challenge winners
function challengerOneResults() {
  guessCount = guessCount + 2;
  if (guessInputOne.value > randomNumber) {
    challengerOneGuessResponse.innerHTML = "that's too high"
  } else if (guessInputOne.value < randomNumber) {
    challengerOneGuessResponse.innerHTML = "that's too low"
  } else {
    challengerOneGuessResponse.innerHTML = "BOOM!";
    winningName = nameInputOne.value;
    winnerCard();
    challengerGuessCount();
    resetGame();
    enableUpdateButton();
  }
    challengerTwoResults();
}

function challengerTwoResults() {
  if (guessInputTwo.value > randomNumber) {
    challengerTwoGuessResponse.innerHTML = "that's too high"
  } else if (guessInputTwo.value < randomNumber) {
    challengerTwoGuessResponse.innerHTML = "that's too low"
  } else {
    challengerTwoGuessResponse.innerHTML = "BOOM!";
    winningName = nameInputTwo.value;
    winnerCard();
    challengerGuessCount();
    resetGame();
    enableUpdateButton();
  }
}

//Function to populate winner/game card
function winnerCard() {
  var gameCard = `<div class="winner-card">
    <section class="card-title">
      <p class="challenger-1-card-name">${nameInputOne.value}</p> <span>vs</span> <p class="challenger-2-card-name">${nameInputTwo.value}</p>
    </section>
    <section class="winner-section">
      <h3 class="card-winner-name">${winningName}</h3>
      <p class="winner">winner</p>
    </section>
    <section class="game-card-info">
      <p class="card-guess-num"><span class="challenger-guess-count">47</span> guesses</p>
      <p class="card-time"><span>1</span> minute <span>35</span> second</p>
      <button class="close-card"><img class="close-card-image" src="https://image.flaticon.com/icons/svg/458/458595.svg" alt="x image for close button"> </button>
    </section>
  </div>`;
  column2.insertAdjacentHTML("afterbegin", gameCard);
  var closeCardButton = document.querySelector('.close-card-image');
  closeCardButton.addEventListener("click", closeCard);
  function closeCard() {
        event.target.parentElement.parentElement.parentElement.remove()
    }
  }
