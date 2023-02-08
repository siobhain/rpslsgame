console.log("Connected");

// Once DOM is loaded add eventlisteners to rpsls buttons waiting for a click

document.addEventListener("DOMContentLoaded", function () {
  // alert("loaded");
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      let userHand = this.getAttribute("data-type");
      runGame(userHand);
    });
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
  // const rpsData = ["Rock blunts Scissors", "Paper wraps Rock", "Scissors cuts Paper", "Rock covered by Paper", "Paper cut by Scissors", "Scissors blunted by Rock"];

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
      rText += "You win : Paper wraps rock";
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
      rText += "You win : Spock smashes by scissors";
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
