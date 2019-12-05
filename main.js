var submitButton = document.querySelector(".submit-guess");
var nameInputOne = document.querySelector("#name-input-1");
var nameInputTwo = document.querySelector("#name-input-2");
var guessInputOne = document.querySelector("#guess-input-1");
var guessInputTwo = document.querySelector("#guess-input-2");

nameInputOne.addEventListener('input', checkButtonStatus);
nameInputTwo.addEventListener('input', checkButtonStatus);
guessInputOne.addEventListener('input', checkButtonStatus);
guessInputTwo.addEventListener('input', checkButtonStatus);

function checkButtonStatus() {
  if (nameInputOne.value != '' && nameInputTwo.value !='' && guessInputOne.value !='' && guessInputTwo.value !='') {
    submitButton.disabled = false
    //submitButton.classList.add('button-background');
  } else {
    submitButton.disabled = true
  }
}
