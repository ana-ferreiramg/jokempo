let playerChoice = 0;
let playerScore = 0;
let IAchoice = 0;
let IAscore = 0;
let numberTies = 0;
let round = 1;
let winner = -1;

function play(choice) {
    playerChoice = choice;

    IAChoice();
    roundCount();
    scores();
    changeImage();
}

function IAChoice() {
    return IAchoice = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
}

function roundCount() {
    round++;
    document.getElementById('round-count').innerHTML = round;
}

function scores () {
    messageWinner();

    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('IA-score').innerHTML = IAscore;
    document.getElementById('number-ties').innerHTML = numberTies;
}

function messageWinner () {
    gameWinner();

    if (winner == 0) {
        document.getElementById('posts').innerHTML = `Tie!`;
        numberTies++;
    } else if (winner == 1) {
        document.getElementById('posts').innerHTML = `You won!`;
        playerScore++;
    } else if (winner == 2) {
        document.getElementById('posts').innerHTML = `You lost! :(`;
        IAscore++;
    }
}

function gameWinner () {
    IAChoice();

    if (playerChoice == IAchoice) {
        return winner = 0;
    }

    if (playerChoice == 1 && IAchoice == 2 || playerChoice == 2 && IAchoice == 3 || playerChoice == 3 && IAchoice == 1) {
        return winner = 2;
    }

    if (playerChoice == 1 && IAchoice == 3 || playerChoice == 2 && IAchoice == 1 || playerChoice == 3 && IAchoice == 2) {
        return winner = 1;
    }
}

function changeImage() {
    var imgIA = document.getElementById('IA-choice');
    var imgPlayer = document.getElementById('player-choice');

    if (IAchoice == 1) {
        imgIA.src = 'assets/img/hands/rock.png';
    } else if (IAchoice == 2) {
        imgIA.src = 'assets/img/hands/paper.png';
    } else if (IAchoice == 3) {
        imgIA.src = 'assets/img/hands/scissors.png';
    }

    if (playerChoice == 1) {
        imgPlayer.src = 'assets/img/hands/rock.png';
    } else if (playerChoice == 2) {
        imgPlayer.src = 'assets/img/hands/paper.png';
    } else if (playerChoice == 3) {
        imgPlayer.src = 'assets/img/hands/scissors.png';
    }
}

function restartGame() {
    document.getElementById('posts').innerHTML = ``;
    document.getElementById('round-count').innerHTML = 1;
    document.getElementById('player-score').innerHTML = 0;
    document.getElementById('IA-score').innerHTML = 0;
    document.getElementById('number-ties').innerHTML = 0;
    
    return playerChoice = 0, playerScore = 0, IAchoice = 0, IAscore = 0, numberTies = 0, round = 1, winner = -1;
}