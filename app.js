// function getPin() {
//   const pin = parseInt(Math.random() * 10000);
//   const pinString = pin + "";
//   if (pinString.length == 4) {
//     return pin;
//   } else {
//     return getPin();
//   }
// }
// function generatePin() {
//   const pin = getPin();
//   document.getElementById("pin-feild").value = pin;
// }

// pin generator
document.getElementById("pin-btn").addEventListener("click", function () {
  const pin = parseInt(Math.random() * 9000 + 900);
  document.getElementById("pin-feild").value = pin;
});

// calculator
document.getElementById("number").addEventListener("click", function (event) {
  const number = event.target.innerText;
  let calcNumber = document.getElementById("number-feild");

  if (isNaN(number)) {
    if (number == "C") {
      calcNumber.value = "";
    }
  } else {
    const previousNumber = calcNumber.value;
    const newNumber = previousNumber + number;
    calcNumber.value = newNumber;
  }
});
// verifying
document.getElementById("submit-btn").addEventListener("click", function () {
  const pinValue = document.getElementById("pin-feild");
  let pin = pinValue.value;
  const calcValue = document.getElementById("number-feild");
  let number = calcValue.value;
  const match = document.getElementById("match");
  const notMatch = document.getElementById("not-match");
  if (pin == number) {
    match.style.display = "block";
    notMatch.style.display = "none";
    pinValue.value = "";
    calcValue.value = "";
  } else {
    notMatch.style.display = "block";
    match.style.display = "none";
    const tryLeft = document.getElementById("try-left");
    let tryNumber = parseInt(tryLeft.innerText) - 1;

    if (tryNumber >= 0) {
      if (tryNumber == 0) {
        document.getElementById("faild-message").style.display = "block";
        document.getElementById("try").style.display = "none";
      }
      tryLeft.innerText = tryNumber;
    }
    calcValue.value = "";
  }
});
