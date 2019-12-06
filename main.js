function submitButton(input) {
  var guessNumber = document.querySelector('submit-guess');
  if (input.value != '') {
    guessNumber.disabled = false;
  }
  else {
    guessNumber.disabled = true;
  }
}
