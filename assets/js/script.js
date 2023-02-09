console.log("Connected");

// Once DOM is loaded add eventlisteners to rpsls buttons waiting for a click

document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var helpButton = document.getElementById("helpButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  alert("loaded");
  //have few extra buttons that i need to cater for ie help button and play agan button
  let buttons = document.getElementsByTagName("button");
  console.log("buttons");
  // alert(buttons);
  for (let button of buttons) {
    console.log(button);
    // button.addEventListener("click", function () {
    //   let userHand = this.getAttribute("data-type");
    //   runGame(userHand);
   // });
  }
  // When the user clicks the button, open the modal 
  helpButton.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});

// runGame("paper");

// the rungame fiunction des....
function runGame(userHand) {
  const handArray = ["rock", "paper", "scissors", "lizard", "spock"];
  let resultText = "";
  let deviceHand = handArray[Math.floor(Math.random() * 5)];
  // userHand = handArray[Math.floor(Math.random() * 3)];
  // console.log(`device picks ${deviceHand}`);
  // console.log(`user picks ${userHand}`);

  if (deviceHand === userHand) {
    resultText = "2 x " + deviceHand + " its a draw!";
    console.log(resultText);
    incrementDraw();
  } else {
    resultText = findWinner(userHand, deviceHand);
  }
  let oldRound = parseInt(document.getElementById("round").innerText);
  document.getElementById("round").innerText = ++oldRound;
  document.getElementById("winorlose").innerText = resultText;
  let rounds = parseInt(document.getElementById("rounds").value);
  console.log(rounds);
  if (oldRound >= rounds) {
    document.getElementById("roundLimit").innerHTML =
      `Thats ${rounds} Rounds done ` +
      `<button onclick=location.reload()>Play Again</button>`;
  }
}

function findWinner(userHand, deviceHand) {
  // const rpsData = ["Rock blunts Scissors", "Paper covers Rock", "Scissors cuts Paper", "Rock covered by Paper", "Paper cut by Scissors", "Scissors blunted by Rock"];

  // userLowercaseHand = toLowerCase(userHand);
  // console.log(deviceLowerHand[0]);

  let result = userHand.concat(" ", deviceHand);
  let rText = "";
  switch (result) {
    case "rock paper":
      incrementDeviceWins();
      rText += "You lose : Rock covered by paper";
      break;
    case "rock scissors":
      incrementUserWins();
      rText += "You win : Rock crushes scissors";
      break;
    case "paper rock":
      incrementUserWins();
      rText += "You win : Paper covers rock";
      break;
    case "paper scissors":
      incrementDeviceWins();
      rText += "You lose : Paper cut by scissors";
      break;
    case "scissors rock":
      incrementDeviceWins();
      rText += "You lose : Scissors crushed by rock";
      break;
    case "scissors paper":
      incrementUserWins();
      rText += "You win : Scissors cuts paper";
      break;
    case "rock lizard":
      incrementUserWins();
      rText += "You win : Rock crushes lizard";
      break;
    case "rock spock":
      incrementDeviceWins();
      rText += "You lose : Rock vaporized by spock";
      break;
    case "paper lizard":
      incrementDeviceWins();
      rText += "You lose : Paper eaten by lizard";
      break;
    case "paper spock":
      incrementUserWins();
      rText += "You win : Paper disproves spock";
      break;
    case "scissors lizard":
      incrementUserWins();
      rText += "You win : Scissors decapitates lizard";
      break;
    case "scissors spock":
      incrementDeviceWins();
      rText += "You lose : Scissors smashed by spock";
      break;
    case "lizard rock":
      incrementDeviceWins();
      rText += "You lose : Lizard crushed by rock";
      break;
    case "lizard paper":
      incrementUserWins();
      rText += "You win : Lizard eats paper";
      break;
    case "lizard scissors":
      incrementDeviceWins();
      rText += "You lose : Lizard decapitated by scissors";
      break;
    case "lizard spock":
      incrementUserWins();
      rText += "You win : Lizard poisons spock";
      break;
    case "spock rock":
      incrementUserWins();
      rText += "You win : Spock vaporizes rock";
      break;
    case "spock paper":
      incrementDeviceWins();
      rText += "You lose : Spock disproved by paper";
      break;
    case "spock scissors":
      incrementUserWins();
      rText += "You win : Spock smashes scissors";
      break;
    case "spock lizard":
      incrementDeviceWins();
      rText += "You lose: Spock poisoned by lizard";
      break;
    default:
      rText += "Something went wrong...Please try again :";
  }
  console.log(rText);
  return rText;
}

function incrementDeviceWins() {
  let oldScore = parseInt(document.getElementById("device").innerText);
  document.getElementById("device").innerText = ++oldScore;
}

function incrementUserWins() {
  let oldScore = parseInt(document.getElementById("user").innerText);
  document.getElementById("user").innerText = ++oldScore;
}

function incrementDraw() {
  let oldScore = parseInt(document.getElementById("draw").innerText);
  document.getElementById("draw").innerText = ++oldScore;
}

function displayResult() {}