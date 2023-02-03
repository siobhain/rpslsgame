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
    } else {
        findWinner(userHand, deviceHand);
    }
}

function findWinner(userHand, deviceHand) {
    const rpsData = ["Rock blunts Scissors", "Paper wraps Rock", "Scissors cuts Paper", "Paper cut by Scissors", "Rock covered by Paper", "Scissors blunted by Rock"];

    let userLowercaseHand = (userHand);
    // userLowercaseHand = toLowerCase(userHand);
    let deviceLowerHand = rpsData[2];
    console.log(deviceLowerHand[0]);



}

function incrementDeviceWins() {

}

function incrementUserWins() {

}

function incrementDraw() {

}

function displayResult() {

}