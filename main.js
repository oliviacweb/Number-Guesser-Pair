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
  var updatedRandomInteger = Math.floor(Math.random() * (max - min + 1) + min);
  randomNumber = updatedRandomInteger;
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

// Function to clear guess form when user submits a correct guess

submitButton.addEventListener('click', resetGuessForm);

function resetGuessForm() {
  if (guessInputOne.value == randomNumber || guessInputTwo.value == randomNumber) {
      guessInputOne.value = '', guessInputTwo.value = '', nameInputOne.value = '', nameInputTwo.value = ''
  } else {
    clearGuesses(), submitButton.disabled = true;
}
}





// fixing cursor issue
