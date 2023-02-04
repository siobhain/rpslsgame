console.log("Connected");

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
/*
document.addEventListener("DOMContentLoaded", function () {
    // alert("loaded");

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let userHand= this.getAttribute("data-type")
            // alert(`you pressed ${userHand}`);    
            runGame(userHand);
        })
    }
})
*/
runGame("paper");

function runGame(userHand) {
    const handArray = ["rock", "paper", "scissors"];
    let deviceHand = handArray[Math.floor(Math.random() * 3)];
    userHand = handArray[Math.floor(Math.random() * 3)];
    console.log(`device picks ${deviceHand}`);
    console.log(`user picks ${userHand}`);
    if (deviceHand === userHand) {
        console.log("Its a draw ++");
        incrementDraw();
    } else {
        let resultText = findWinner(userHand, deviceHand);
    }
}

function findWinner(userHand, deviceHand) {
    const rpsData = ["Rock blunts Scissors", "Paper wraps Rock", "Scissors cuts Paper", "Rock covered by Paper", "Paper cut by Scissors", "Scissors blunted by Rock"];

    // userLowercaseHand = toLowerCase(userHand);
    // console.log(deviceLowerHand[0]);
   
    let result = userHand.concat(" ",deviceHand);
    let text = "";
        switch (result) {
        case "rock paper":
            text += "You win - Rock covers paper";
            break;
        case "rock scissors":
            text += "You lose - Rock blunted by scissors";
            break;
        case "paper rock":
            text += "You win -Paper wraps rock";
            break;
        case "paper scissors":
            text += "You lose -  Paper cut by scissors";
            break;
        case "scissors rock":
            text += "You lose - Scissors blunted by rock";
            break;
        case "scissors paper":
            text += "You win - Scissors cuts paper";
            break;
        default:
            text += "Something went wrong ...Please try again";
        }
        return(text);
        console.log(text);  
}

function incrementDeviceWins() {
    oldScore = document.getElementById("draw")

}

function incrementUserWins() {

}

function incrementDraw() {

}

function displayResult() {

}