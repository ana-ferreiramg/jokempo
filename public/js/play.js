class Jokempo {
  constructor() {
    this.playerChoice = 0;
    this.IAchoice = 0;
    this.round = 1;
    this.numberTies = 0;
    this.playerScore = 0;
    this.IAscore = 0;
    this.winner = -1;
  }

  play(choice) {
    this.playerChoice = choice;

    this.roundCount();
    this.scores();
    DOM.changeImage(this.IAchoice, this.playerChoice);
  }

  static IAChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  }

  scores() {
    this.messageWinner();

    DOM.scores(this.playerScore, this.IAscore, this.numberTies);
  }

  messageWinner() {
    this.gameWinner();

    if (this.winner === 0) {
      DOM.message('Tie!');
      this.numberTies++;
    } else if (this.winner === 1) {
      DOM.message('You won!');
      this.playerScore++;
    } else if (this.winner === 2) {
      DOM.message('You lost! :(');
      this.IAscore++;
    }
  }

  roundCount() {
    this.round++;
    DOM.roundCount(this.round);
  }

  gameWinner() {
    this.IAchoice = Jokempo.IAChoice();

    if (this.playerChoice === this.IAchoice) {
      return (this.winner = 0);
    }

    if (
      (this.playerChoice === 1 && this.IAchoice === 2) ||
      (this.playerChoice === 2 && this.IAchoice === 3) ||
      (this.playerChoice === 3 && this.IAchoice === 1)
    ) {
      return (this.winner = 2);
    }

    if (
      (this.playerChoice === 1 && this.IAchoice === 3) ||
      (this.playerChoice === 2 && this.IAchoice === 1) ||
      (this.playerChoice === 3 && this.IAchoice === 2)
    ) {
      return (this.winner = 1);
    }
  }

  restart() {
    DOM.restart();

    return (
      (this.playerChoice = 0),
      (this.playerScore = 0),
      (this.IAchoice = 0),
      (this.IAscore = 0),
      (this.numberTies = 0),
      (this.round = 1),
      (this.winner = -1)
    );
  }
}

const jokempo = new Jokempo();

const DOM = {
  playerScore: document.getElementById('player-score'),
  IAscore: document.getElementById('IA-score'),
  numberTies: document.getElementById('number-ties'),
  messageWinner: document.getElementById('posts'),
  round: document.getElementById('round-count'),

  message(message) {
    this.messageWinner.innerHTML = message;
  },

  scores(player, IA, numberTies) {
    this.playerScore.innerHTML = player;
    this.IAscore.innerHTML = IA;
    this.numberTies.innerHTML = numberTies;
  },

  roundCount(round) {
    this.round.innerHTML = round;
  },

  changeImage(IAchoice, playerChoice) {
    const imgIA = document.getElementById('IA-choice');
    const imgPlayer = document.getElementById('player-choice');

    if (IAchoice === 1) {
      imgIA.src = 'public/img/rock.png';
    } else if (IAchoice === 2) {
      imgIA.src = 'public/img/paper.png';
    } else if (IAchoice === 3) {
      imgIA.src = 'public/img/scissors.png';
    }

    if (playerChoice === 1) {
      imgPlayer.src = 'public/img/rock.png';
    } else if (playerChoice === 2) {
      imgPlayer.src = 'public/img/paper.png';
    } else if (playerChoice === 3) {
      imgPlayer.src = 'public/img/scissors.png';
    }
  },

  restart() {
    this.playerScore.innerHTML = 0;
    this.IAscore.innerHTML = 0;
    this.numberTies.innerHTML = 0;
    this.messageWinner.innerHTML = '';
    this.round.innerHTML = 1;
  },
};
