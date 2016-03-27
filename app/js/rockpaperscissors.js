////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    var playerMove = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
randomPlay();

function getPlayerMove(move) {
    return playerMove;
}

function getComputerMove(move) {
   return computerMove;
}

 // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.

function getWinner(playerMove,computerMove) {
    var winner;
    for(){
    if ("rock" && "scissors") {
        return "rock wins";
        console.log("rock wins");
    } else if ("rock" && "paper") {
        return "paper wins";
    } else if ("paper" && "scissors"){
        return "scissors wins";
    } else {
         return "re-do!";
    }

    if (p === "rock wins" || p === "scissors wins" || p === "paper wins"){
        return "you win!";
    } else {
        return "sorry " + computerMove + " wins";
    }
}
}
getWinner("scissors", "paper");

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

