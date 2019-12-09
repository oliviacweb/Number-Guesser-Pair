var submitButton = document.querySelector(".submit-guess");
var nameInputOne = document.querySelector("#name-input-1");
var nameInputTwo = document.querySelector("#name-input-2");
var guessInputOne = document.querySelector("#guess-input-1");
var guessInputTwo = document.querySelector("#guess-input-2");


nameInputOne.addEventListener('input', checkButtonStatus);
nameInputTwo.addEventListener('input', checkButtonStatus);
guessInputOne.addEventListener('input', checkButtonStatus);
guessInputTwo.addEventListener('input', checkButtonStatus);

// Function to clear text in guess fields
function clearGuesses() {
guessInputOne.value = '', guessInputTwo.value = '';
}

// Function to clear all inputs in guess form

function clearGuessForm() {
  guessInputOne.value = '', guessInputTwo.value = '', nameInputOne.value = '', nameInputTwo.value = '';
}

// Function to enable Submit Guess button when both name fields and guess fields are filled out
function checkButtonStatus() {
  if (nameInputOne.value !='' && nameInputTwo.value !='' && guessInputOne.value !='' && guessInputTwo.value !='') {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

// Function to enable update button if min and max range are filled in
var minRange = document.querySelector('#min-range-input');
var maxRange = document.querySelector('#max-range-input');
var updateButton = document.querySelector('.update-button');

minRange.addEventListener('input', enableUpdateButton);
maxRange.addEventListener('input', enableUpdateButton);

function enableUpdateButton() {
  if (minRange.value !='' && maxRange.value !='') {
    updateButton.disabled = false
  } else {
    updateButton.disabled = true
  }
}

// Function to enable Clear Form button when one of the four fields is filled out

var clearButton = document.querySelector(".clear-form");
nameInputOne.addEventListener('input', enableClearForm);
nameInputTwo.addEventListener('input', enableClearForm);
guessInputOne.addEventListener('input', enableClearForm);
guessInputTwo.addEventListener('input', enableClearForm);

function enableClearForm() {
  if (nameInputOne.value !='' || nameInputTwo.value !='' || guessInputOne.value !='' || guessInputTwo.value !='') {
    clearButton.disabled = false
  } else {
    clearButton.disabled = true
  }
}

// Function to clear contents when Clear Form is clicked
clearButton.addEventListener('click', clearContents);

function clearContents() {
  nameInputOne.value = '', nameInputTwo.value = '', guessInputOne.value = '', guessInputTwo.value = '', clearButton.disabled = true, submitButton.disabled = true;
}

// Function to add Challenger and Guess input to Latest Guess form
var nameOneMessage = document.querySelector(".name-1");
var nameTwoMessage = document.querySelector(".name-2");
var guessOneMessage = document.querySelector(".challenger-1-current-guess");
var guessTwoMessage = document.querySelector(".challenger-2-current-guess");
submitButton.addEventListener('click', displayInputs);

function displayInputs() {
  var nameOne = nameInputOne.value;
  nameOneMessage.innerText = nameOne;
  var nameTwo = nameInputTwo.value;
  nameTwoMessage.innerText = nameTwo;
  var guessOne = guessInputOne.value;
  guessOneMessage.innerText = guessOne;
  var guessTwo = guessInputTwo.value;
  guessTwoMessage.innerText = guessTwo;
}

  // Function to enter numbers from min and max range into current range
  var updateButton = document.querySelector(".update-button");
  var minRangeOutput = document.querySelector(".range-bottom");
  var maxRangeOutput = document.querySelector(".range-top");
  var minRangeInput = document.querySelector("#min-range-input");
  var maxRangeInput = document.querySelector("#max-range-input");

  updateButton.addEventListener('click', inputBottomRange);
  updateButton.addEventListener('click', inputTopRange);

  function inputBottomRange() {
    minRangeOutput.innerHTML = minRangeInput.value;
  }

  function inputTopRange() {
    maxRangeOutput.innerHTML = maxRangeInput.value
  }

// Function to input range parameters into random number generator

updateButton.addEventListener('click', updateRandomInteger);

var randomNumber = null;

function updateRandomInteger () {
  min = parseInt(minRangeInput.value);
  max = parseInt(maxRangeInput.value);
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to give hint to GUESSER

submitButton.addEventListener('click', challengerOneHint);
submitButton.addEventListener('click', challengerTwoHint);

var challengerOneGuessResponse = document.querySelector('.challenger-1-hint');
var challengerTwoGuessResponse = document.querySelector('.challenger-2-hint');

function challengerOneHint() {
  if (guessInputOne.value > randomNumber) {
    challengerOneGuessResponse.innerHTML = "that's too high"
  } else if (guessInputOne.value < randomNumber) {
    challengerOneGuessResponse.innerHTML = "that's too low"
  } else {
    challengerOneGuessResponse.innerHTML = "BOOM!";
  }
}

function challengerTwoHint() {
  if (guessInputTwo.value > randomNumber) {
    challengerTwoGuessResponse.innerHTML = "that's too high"
  } else if (guessInputTwo.value < randomNumber) {
    challengerTwoGuessResponse.innerHTML = "that's too low"
  } else {
    challengerTwoGuessResponse.innerHTML = "BOOM!";
  }
}

// Function to clear guess form and choose new random number when user submits a correct guess

submitButton.addEventListener('click', resetGuessForm);

function resetGuessForm() {
  if (guessInputOne.value == randomNumber || guessInputTwo.value == randomNumber) {
       updateRandomInteger()
  } else {
     submitButton.disabled = true;
  }
}

//Function to populate winner/game card
submitButton.addEventListener('click', displayWinnerCard);

function displayWinnerCard() {
  var gameOneCard = document.querySelector(".winner-card-wrapper");
  if (guessInputOne.value == randomNumber || guessInputTwo.value == randomNumber) {
    gameOneCard.innerHTML = `<div class="winner-card">
    <section class="card-title">
      <p class="challenger-1-card-name">challenger 1 name</p> <span>vs</span> <p class="challenger-2-card-name">challenger 2 name</p>
    </section>
    <section class="winner-section">
      <h3 class="card-winner-name">Challenger 2 name</h3>
      <p class="winner">winner</p>
    </section>
    <section class="game-card-info">
      <p class="card-guess-num"><span>47</span> guesses</p>
      <p class="card-time"><span>1</span> minute <span>35</span> second</p>
      <button class="close-card"><img id="x-button" src="https://image.flaticon.com/icons/svg/458/458595.svg" alt="x image for close button"> </button>
    </section>
  </div>`
  }
}

// Function to populate information into winner card 
submitButton.addEventListener('click', displayCardNames);

function displayCardNames() {
  var challengerOneCardName = document.querySelector('.challenger-1-card-name');
  var challengerTwoCardName = document.querySelector('.challenger-2-card-name');
  var winnerName = document.querySelector('.card-winner-name');
   challengerOneCardName.innerText = nameInputOne.value, challengerTwoCardName.innerText = nameInputTwo.value;
  if (guessInputOne.value == randomNumber) {
    winnerName.innerText = nameInputOne.value;
  } else if
    (guessInputTwo.value == randomNumber) {
      winnerName.innerText = nameInputTwo.value;
  } else {
    clearGuesses();
 }
}

// Function to count number of guesses




// fixing cursor issue
