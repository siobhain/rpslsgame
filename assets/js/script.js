console.log("Connected");

// Once DOM is loaded add  eventlisteners to buttons waiting for a click

document.addEventListener("DOMContentLoaded", function () {
    // alert("loaded");
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let userHand= this.getAttribute("data-type")
            runGame(userHand);
        })
    }
})

// runGame("paper");

function runGame(userHand) {
    const handArray = ["rock", "paper", "scissors"];
    let round = 0;
    let resultText = "Empty;"
    let deviceHand = handArray[Math.floor(Math.random() * 3)];
    // userHand = handArray[Math.floor(Math.random() * 3)];
    // console.log(`device picks ${deviceHand}`);
    // console.log(`user picks ${userHand}`);

    if (deviceHand === userHand) {
        resultText = "2 x " + deviceHand +" its a draw!";
        // console.log(resultText);
        incrementDraw();
    } else {
        resultText = findWinner(userHand, deviceHand);
    } 
    let oldRound = parseInt(document.getElementById("round").innerText);
    document.getElementById("round").innerText = ++oldRound;    
    document.getElementById("winorlose").innerText=resultText;
    if (oldRound > 4) {document.getElementById("roundLimit").innerHTML="Thats 5 rounds Game Over" +` <button>Play Again</button>`;}
}

function findWinner(userHand, deviceHand) {
    // const rpsData = ["Rock blunts Scissors", "Paper wraps Rock", "Scissors cuts Paper", "Rock covered by Paper", "Paper cut by Scissors", "Scissors blunted by Rock"];

    // userLowercaseHand = toLowerCase(userHand);
    // console.log(deviceLowerHand[0]);
   
    let result = userHand.concat(" ",deviceHand);
    let rText = "";
        switch (result) {
        case "rock paper":
            incrementUserWins();
            rText += "You lose : Rock covered by paper";
            break;
        case "rock scissors":
            incrementDeviceWins();
            rText += "You win : Rock blunts scissors";
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
        default:
            rText += "Something went wrong...Please try again";
        }
    console.log(rText);  
    return(rText);
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

function displayResult() {

}