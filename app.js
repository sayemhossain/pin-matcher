// pin generator
function getPin() {
  const pin = parseInt(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("pin-feild").value = pin;
}
//calculator
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");

  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("pin-feild").value;
  const typeNumbers = document.getElementById("typed-numbers").value;

  const match = document.getElementById("match");
  const notMatch = document.getElementById("not-match");
  if (pin == typeNumbers) {
    match.style.display = "block";
    notMatch.style.display = "none";
  } else {
    notMatch.style.display = "block";
    match.style.display = "none";
  }
}
