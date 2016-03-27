var playerMove = prompt("Please choose either 'rock', 'paper', or 'scissors'.");

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

function getPlayerMove(playerMove) {
    return playerMove;
}
getPlayerMove(playerMove);

function getComputerMove(randomPlay) {
   return randomPlay;
}
getComputerMove(randomPlay);

function getWinner() {
    var winner;

    function winningMove(playerMove,computerMove){
      var r = "rock";
      var p ="paper";
      var s = "scissors";
      //compare rock / paper / scissor to set dominance rule
      if (r && s) {
        return winner = r + " wins";
      } else if (r && p) {
          return winner = p + " wins";
      } else if (p && s){
          return winner = s + " wins";
      } else {
           prompt("re-do its a draw!");
      }

    }
    winningMove(playerMove, randomPlay);

      //compare playerMove to winning moves
      if (playerMove === winner){
          var playerWins = "you win!";
          return playerWins;
      } else {
          var computerWins = "sorry " + computerMove + " wins";
          return computerWins;
      }
  }
getWinner();


function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    var winningArr = ["you win!", "sorry " + computerMove + " wins"];

    for (var i = 0; i <= 5; i++) {
       i += winningArr[0];
      return i;
      if(i = 4){
        return "You win - game - set - match"
      }
    }

    for (var i = 0; i <= 5; i++) {
      i+= winningArr[1];
      return i;
      if(i = 4){
        return "computerWins - game - set - match"
      }
    }

    return [playerWins, computerWins];
}
playToFive();


//I don't understand this block from pre-work 5.2
/*
var allThree = function(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}
*/
