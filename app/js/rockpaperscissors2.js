////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
var getInput = function() {
    var playerMove = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    return playerMove;
    console.log(playerMove);


}
//getInput();


function randomPlay() {
    var result;
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        result = "rock";
    } else if (randomNumber < 0.66) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;

}
//randomPlay();

function getComputerMove(move) {
   var computerMove = randomPlay();
}
getComputerMove(randomPlay())
 // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.

function getWinner() {

    var winner;

    var win = function(){
      var result;
      var p = getInput();
      var computerMove = randomPlay();

      if (p === "rock" && computerMove === "scissors") {
          result = "player wins";
      } else if (p === "scissors" && computerMove === "paper") {
          result = "player wins";
      } else if (p === "paper" && computerMove === "rock"){
          result = "player wins";
      } else if (p === computerMove){
           result = "re-do!";
      } else {
        result = "computer wins";
        //computerWins +=
      }
      console.log(result)
      return result;


    }
    win();
}
getWinner();

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


