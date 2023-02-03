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
            text += "You win - rock covers paper";
            break;
        case "rock scissors":
            text += "You lose - rock blunted by scissors";
            break;
        case "paper rock":
            text += "You win -paper wraps rock";
            break;
        case "paper scissors":
            text += "You lose -  paper cut by scissors";
            break;
        case "scissors rock":
            text += "You lose - scissors blunted by rock";
            break;
        case "scissors paper":
            text += "You win - scissors cuts paper";
            break;
        default:
            text += "Something went wrong ...Aborting";
        }
        return(text);
        console.log(text);  
}

function incrementDeviceWins() {

}

function incrementUserWins() {

}

function incrementDraw() {

}

function displayResult() {

}