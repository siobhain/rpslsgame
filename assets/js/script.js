console.log("Connected");

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

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

function runGame(userHand) {
    let deviceHand = Math.floor(Math.random() * 3);
    alert(`device picked ${deviceHand}`);
}

function findWinner(userHand, deviceHand) {

}

function incrementDeviceWins() {

}

function incrementUserWins() {

}

function incrementDraw() {

}

function displayResult() {

}