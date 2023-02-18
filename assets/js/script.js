/* This js file contains the following functions

 runGame(userHand) : Main game loop
 findWinner(userHand, deviceHand) : 20 part switch/case to determine winner
 incrementDeviceWins() : ++device wins
 incrementUserWins() : ++user wins
 incrementDraw() : ++draw
 displayResults() : feedback result of 5 turns to user
 playAgain() : clear all counters and start game again

 */

/*
 Once DOM is loaded add eventlisteners &/or handle specific user actions.

  There are 5 gameButtons (for Rock, Paper...etc) & a helpButton (popup modal for 
  rules/instructions) so listeners needed for these buttons.
  
  I have used a modal from w3schools https://www.w3schools.com/howto/howto_css_modals.asp
  to display the game instructions/rules on top of the game via a helpButton

*/

document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var helpButton = document.getElementById("helpButton");

  // There are 5 gameButtons & a helpButton (for rules/instructions)
  // Add listeners to gameButtons waiting for click
  //get all the buttons so we can listen for clicks
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    if (button === helpButton) {
      button.addEventListener("click", function () { // When helpbutton clicked, open the popup by setting display=block
        modal.style.display = "block";
        //disable game buttons while in help modal, gameButtons are [1] to [5]
        for (var i = 1; i < 6; i++) {
          buttons[i].disabled = true;
        }
      });
    } else {
      button.addEventListener("click", function () {
        let userHand = this.getAttribute("data-type"); // this is what fires the game when the user clicks a gameButton
        runGame(userHand); // run this function when any 1 of the 5 gameButtons is clicked
      });
    }
  }
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // Help Popup : When the user clicks on the large X ie <span> (x), close the popup by setting display=none
  span.onclick = function () {
    modal.style.display = "none";
    //enable game buttons when exiting help popup
    for (var i = 1; i < 6; i++) {
      buttons[i].disabled = false;
    }

  };

  // When the user clicks anywhere outside of the popup, close it by setting display=none
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      for (var i = 1; i < 6; i++) {
        buttons[i].disabled = false;
      }
    }
  }
}); //end adding listeners etc after DOMcontentLoaded


/* The rungame is the main function of the RPSLS game

  It is fired whenever the user clicks on a gameButton (ie Rock, Paper... etc)
  It takes in the name of the game Button clicked by the user named userHand
  first the function randomally picks a device option named deviceHand
  Both values are compared via === and if matching then its a draw
  otherwise findWinner() is called to determine the winner

  Once the winner is determined the "turn" counter needs to be incremented
  & the results of the turn "resultText" send to dom id=winorloseTurn

  There are 5 turns per round so check if we on 5th turn
  if we on 5th turn call displayResults()
  
*/

function runGame(userHand) {
  let resultText = "";

  const handArray = ["rock", "paper", "scissors", "lizard", "spock"]; // create array with values for device to randomally pick one from [0] to [4]
  let deviceHand = handArray[Math.floor(Math.random() * 5)];

  if (deviceHand === userHand) { // Have both picked the same hand?
    resultText = "2 x " + deviceHand + "- this turn is a draw!";
    incrementDraw();
  } else {
    resultText = findWinner(userHand, deviceHand);
  }
console.log("about to scrape turn");
// let answer = document.getElementsByClassName("score-area")[0].style.visibility;
let answer = document.getElementsByClassName("score-area")[0];
// var x = document.getElementById('myDIV');
// if (x.style.visibility === 'hidden') {
//   x.style.visibility = 'visible';

// console.log(answer);
// let x=answer.style.visibility;
// console.log(x);

if (document.getElementsByClassName("score-area")[0].style.visibility === 'hidden') {
  console.log("hidden changing to visible");

    document.getElementsByClassName("score-area")[0].style.visibility = 'visible';
}
let mine = document.getElementById("turn").innerText;
console.log(mine);
let oldTurn = parseInt(document.getElementById("turn").innerHTML);
// let oldTurn = document.getElementById("turn").innerHTML;
  console.log(oldTurn);
  document.getElementById("turn").innerHTML = ++oldTurn; // increment before writing to dom
  // document.getElementById("turn").innerHTML = oldTurn; // increment before writing to dom

  document.getElementById("winorloseTurn").innerText = resultText; //feedback turn results to user

  let turns = 2;
  if (oldTurn >= turns) {
    displayResults(); //5 turns taken Display results of the round
  }
} //end runGame

/* function findWinner(userHand, deviceHand) 
    This function is called by runGame when user and device chose different options
    It is not called if matching options are chosen (ie Rock & Rock are chosen)

    Each player has 5 options so with 2 players there are 25 permutations
    subtract the 5 matching options and that leaves 20 unique options that 
    need to be catered for in this function.

    The function is send user chosen option and the randomally assigned device option.

    Both options are in string format and are concatenated into one string called result
    A switch statment with the 20 options is presented and js will match with the chosen result
    Its either a win for the user or win for device so
            appropriate increment function is called
            & appropriate feedback to the user is crested
     
    The function returns the user feedback in string format
    There is a default case to cater for problems.
*/

function findWinner(userHand, deviceHand) {

  let result = userHand.concat(" ", deviceHand);
  let rText = "Device chose " + deviceHand;
  switch (result) {
    case "rock paper":
      incrementDeviceWins();
      rText += " You lose this turn : Rock covered by paper";
      break;
    case "rock scissors":
      incrementUserWins();
      rText += " You win this turn : Rock crushes scissors";
      break;
    case "paper rock":
      incrementUserWins();
      rText += " You win this turn : Paper covers rock";
      break;
    case "paper scissors":
      incrementDeviceWins();
      rText += " You lose this turn : Paper cut by scissors";
      break;
    case "scissors rock":
      incrementDeviceWins();
      rText += " You lose this turn : Scissors crushed by rock";
      break;
    case "scissors paper":
      incrementUserWins();
      rText += " You win this turn : Scissors cuts paper";
      break;
    case "rock lizard":
      incrementUserWins();
      rText += " You win this turn : Rock crushes lizard";
      break;
    case "rock spock":
      incrementDeviceWins();
      rText += " You lose this turn : Rock vaporized by spock";
      break;
    case "paper lizard":
      incrementDeviceWins();
      rText += " You lose this turn : Paper eaten by lizard";
      break;
    case "paper spock":
      incrementUserWins();
      rText += " You win this turn : Paper disproves spock";
      break;
    case "scissors lizard":
      incrementUserWins();
      rText += " You win this turn : Scissors decapitates lizard";
      break;
    case "scissors spock":
      incrementDeviceWins();
      rText += " You lose this turn : Scissors smashed by spock";
      break;
    case "lizard rock":
      incrementDeviceWins();
      rText += " You lose this turn : Lizard crushed by rock";
      break;
    case "lizard paper":
      incrementUserWins();
      rText += " You win this turn : Lizard eats paper";
      break;
    case "lizard scissors":
      incrementDeviceWins();
      rText += " You lose this turn : Lizard decapitated by scissors";
      break;
    case "lizard spock":
      incrementUserWins();
      rText += " You win this turn : Lizard poisons spock";
      break;
    case "spock rock":
      incrementUserWins();
      rText += "You win this turn : Spock vaporizes rock";
      break;
    case "spock paper":
      incrementDeviceWins();
      rText += " You lose : Spock disproved by paper";
      break;
    case "spock scissors":
      incrementUserWins();
      rText += " You win this turn : Spock smashes scissors";
      break;
    case "spock lizard":
      incrementDeviceWins();
      rText += " You lose this turn : Spock poisoned by lizard";
      break;
    default:
      rText += " Something went wrong...Please try again :";
  }
  return rText;
} //end findWinner

/* function increment*()
  These 3 increment*() functions take the current score/counter/tally from the dom and increment it by one

  This code is taken from the Code institute Love Maths incrementScore() function
  interesting fact is that increment has to be BEFORE the variable as javascript
  will increment oldScore before writing to dom, if its oldScore++ then js 
  writes oldScore to dom and then increments it.
*/

function incrementDeviceWins() { // number of device wins this round
  let oldScore = parseInt(document.getElementById("device").innerText);
  document.getElementById("device").innerText = ++oldScore;
} //end incrementDeviceWins

function incrementUserWins() { //number of user wins this round
  let oldScore = parseInt(document.getElementById("user").innerText);
  document.getElementById("user").innerText = ++oldScore;
} //end incrementUserWins

function incrementDraw() { // number of draw(s) this round
  let oldScore = parseInt(document.getElementById("draw").innerText);
  document.getElementById("draw").innerText = ++oldScore;
} // end incrementDraw

/* function displayResults() 
This function is called by runGame once 5 turns have been taken
The aim is 3 fold
    Let the user know the round is finished
    Let the user know the results of the round
    give the user the option to play again

It is necessary to disable the 5 gameButtons while the user decides to play again
the results are taken from the dom & Template literals (backquotes) provide a 
way to interpolate ${result} into string for output to id=roundResult

*/

function displayResults() {

  let roundResult = "";

  //disable game buttons
  let button = document.getElementsByTagName("button");
  console.log(button);
  for (var i = 1; i < 6; i++) {
    button[i].disabled = true;
    console.log(button[i]);
  }

  let userWins = parseInt(document.getElementById("user").innerText);
  let deviceWins = parseInt(document.getElementById("device").innerText);

  if (userWins === deviceWins) {
    roundResult = `This round is a draw at ${userWins} all`;
  } else {

    // variable = (condition) ? expressionTrue : expressionFalse;
    roundResult = (deviceWins < userWins) ? `Well Done You win this round ${userWins} to ${deviceWins}` : `Hard Luck You lose this round ${userWins} to ${deviceWins}`;
  }

  // feedback roundResults to user and include button to "Play Again"
  document.getElementById("roundResults").innerHTML = `${roundResult} <button onclick=playAgain()>Play Again</button>`;
} //end displayResults

/* function playAgain()
This function is fired once the user hits the "Play Again" button
The "Play Again" button is presented to the user by displayResults()
displayResulta is called after a round of 5 turns is complete

This function does the following :
  re-enable the 5 Game buttons : Rock Paper Scissors Lizard & Spock
  Reset dom counters : turn, draw, user, device
  Reset dom text : winorloseTurn roundResults
*/
function playAgain() {
  //helpButton is [0] so traverse [1] to [5] for the 5 gameButtons
  let button = document.getElementsByTagName("button");
  for (var i = 1; i < 6; i++) {
    button[i].disabled = false;
    console.log(button[i]);
  }
  document.getElementById("turn").innerText = "0";
  document.getElementById("winorloseTurn").innerText = "";
  document.getElementById("draw").innerText = "0";
  document.getElementById("user").innerText = "0";
  document.getElementById("device").innerText = "0";
  document.getElementById("roundResults").innerHTML = "";
} //end playAgain