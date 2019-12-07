var submitButton = document.querySelector(".submit-guess");
var nameInputOne = document.querySelector("#name-input-1");
var nameInputTwo = document.querySelector("#name-input-2");
var guessInputOne = document.querySelector("#guess-input-1");
var guessInputTwo = document.querySelector("#guess-input-2");

nameInputOne.addEventListener('input', checkButtonStatus);
nameInputTwo.addEventListener('input', checkButtonStatus);
guessInputOne.addEventListener('input', checkButtonStatus);
guessInputTwo.addEventListener('input', checkButtonStatus);

// Function to enable Submit Guess button when both name fields and guess fields are filled out
function checkButtonStatus() {
  if (nameInputOne.value !='' && nameInputTwo.value !='' && guessInputOne.value !='' && guessInputTwo.value !='') {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

// Function to clear guess inputs when submit button is clicked

submitButton.addEventListener ('click', clearGuessInputs);

function clearGuessInputs() {
  guessInputOne.value = '', guessInputTwo.value = '';
}

// Function to enable Clear Form button when one of the four fields is filled out

var clearButton = document.querySelector(".clear-form");
nameInputOne.addEventListener('input', enableClearForm);
nameInputTwo.addEventListener('input', enableClearForm);
guessInputOne.addEventListener('input', enableClearForm);
guessInputTwo.addEventListener('input', enableClearForm);

function enableClearForm() {
  if (nameInputOne.value != '') {
    clearButton.disabled = false
  } else if (nameInputTwo.value != '') {
    clearButton.disabled = false
  } else if (guessInputOne.value != '') {
    clearButton.disabled = false
  } else if (guessInputTwo.value != '') {
    clearButton.disabled = false
  } else {
    clearButton.disabled = true
    }
  }

var nameOneMessage = document.querySelector(".name-1");
var nameTwoMessage = document.querySelector(".name-2");
var guessOneMessage = document.querySelector(".guess-1");
var guessTwoMessage = document.querySelector(".guess-2");
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

  updateButton.addEventListener('click', inputBottomRange);
  updateButton.addEventListener('click', inputTopRange);

  function inputBottomRange() {
    var minRangeInput = document.querySelector("#min-range-input").value;
    minRangeOutput.innerHTML = minRangeInput
  }

  function inputTopRange() {
    var maxRangeInput = document.querySelector("#max-range-input").value;
    maxRangeOutput.innerHTML = maxRangeInput
  }
