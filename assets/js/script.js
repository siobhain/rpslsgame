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

// runGame("paper");

function runGame(userHand) {
    const handArray = ["rock", "paper", "scissors"];
    let resultText = "Empty;"
    let deviceHand = handArray[Math.floor(Math.random() * 3)];
    // userHand = handArray[Math.floor(Math.random() * 3)];
    console.log(`device picks ${deviceHand}`);
    console.log(`user picks ${userHand}`);
    if (deviceHand === userHand) {
        resultText = "Its a draw ++";
        console.log(resultText);
        incrementDraw();
    } else {
        resultText = findWinner(userHand, deviceHand);
    } 
    document.getElementById("winorlose").innerText=resultText;
    console.log(resultText);
}

function findWinner(userHand, deviceHand) {
    // const rpsData = ["Rock blunts Scissors", "Paper wraps Rock", "Scissors cuts Paper", "Rock covered by Paper", "Paper cut by Scissors", "Scissors blunted by Rock"];

    // userLowercaseHand = toLowerCase(userHand);
    // console.log(deviceLowerHand[0]);
   
    let result = userHand.concat(" ",deviceHand);
    let rText = "";
        switch (result) {
        case "rock paper":
            rText += "You win - Rock covers paper";
            break;
        case "rock scissors":
            rText += "You lose - Rock blunted by scissors";
            break;
        case "paper rock":
            rText += "You win -Paper wraps rock";
            break;
        case "paper scissors":
            rText += "You lose -  Paper cut by scissors";
            break;
        case "scissors rock":
            rText += "You lose - Scissors blunted by rock";
            break;
        case "scissors paper":
            rText += "You win - Scissors cuts paper";
            break;
        default:
            rText += "Something went wrong ...Please try again";
        }
    console.log(rText);  
    return(rText);
}
 

function incrementDeviceWins() {
    let oldScore = parseInt(document.getElementById("device").innerText);
    document.getElementById("draw").innerText = ++oldScore;

}

function incrementUserWins() {
    let oldScore = parseInt(document.getElementById("user").innerText);
    document.getElementById("user").innerText = ++oldScore;
    
}

function incrementDraw() {
    let oldScore = parseInt(document.getElementById("draw").innerText);
    document.getElementById("draw").innerText = ++oldScore;
}

function displayResult() {

}