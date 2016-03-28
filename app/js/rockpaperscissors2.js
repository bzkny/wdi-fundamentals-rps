
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move) {
    return move || getInput();
}
function getComputerMove(move) {

    return move || randomPlay();
}
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'rock'){
        if (computerMove === 'rock'){
            winner = 'tie';
        } else if (computerMove === 'scissors'){
            winner = 'player';
        } else {
            winner = 'computer';
        }
    } else if (playerMove === 'scissors'){
        if (computerMove === 'scissors'){
            winner = 'tie';
        } else if (computerMove === 'rock'){
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else if (playerMove === 'paper'){
        if (computerMove === 'paper'){
            winner ='tie';
        } else if (computerMove === 'scissors'){
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins <= 5 && computerWins <= 5){
        getPlayerMove();
        getComputerMove();
        playerWins+=1;
        computerWins+=1;
        console.log('Current score: Player - ' + playerWins + ', ' + 'Computer - ' + computerWins);



    }

    return [playerWins, computerWins];
}
