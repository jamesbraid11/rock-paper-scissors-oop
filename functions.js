const prompt = require('prompt-sync')();

class Player {
  constructor(name, choice) {
    this.name = name;
    this.choice = choice;
  }
}

class HumanPlayer extends Player {
  constructor(name, choice) {
    super(name, choice);
  }
  makeChoice() {
    let input = prompt("Choose rock, paper, or scissors:").toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    while (!validChoices.includes(input)) {
      input = prompt(
        "Invalid choice. Please choose rock, paper, or scissors: "
      ).toLowerCase();
    }
    this.choice = input;
  }
}

class ComputerPlayer extends Player {
  constructor(name = "Computer", choice) {
    super(name, choice);
  }
  makeChoice() {
    const choices = ["rock", "paper", "scissors"];
    this.choice = choices[Math.floor(Math.random() * choices.length)];
  }
}

class Game {

  constructor(humanScore, computerScore, rounds) {
    this.humanScore = humanScore;
    this.computerScore = computerScore;
    this.rounds = rounds;
  }

  determineWinner(HumanPlayer, ComputerPlayer) {
    const h = HumanPlayer.choice;
    const c = ComputerPlayer.choice;
    if (h === c) return "draw";
    if (
      (h === "rock" && c === "scissors") ||
      (h === "paper" && c === "rock") ||
      (h === "scissors" && c === "paper")
    ) {
      this.humanScore++;
      console.log("You win");
    } else {
      this.computerScore++;
      console.log("Computer wins");
    }
  }

  play() {
    const human = new HumanPlayer("You", "");
    const computer = new ComputerPlayer("Computer", "");

    for (let i = 0; i < this.rounds; i++) {
      console.log(`\nRound ${i + 1}`);
      human.makeChoice();
      computer.makeChoice();
      console.log(`You chose: ${human.choice}`);
      console.log(`Computer chose: ${computer.choice}`);

      const winner = this.determineWinner(human, computer);
      if (winner === "draw") {
        console.log("It's a draw!");
      } else {
        console.log(`${winner} wins the round!`);
      }
    }

    console.log("\nFinal Score:");
    console.log(`You: ${this.humanScore} | Computer: ${this.computerScore}`);
    if (this.humanScore > this.computerScore) {
      console.log("🎉 You win the game!");
    } else if (this.computerScore > this.humanScore) {
      console.log("💻 Computer wins the game!");
    } else {
      console.log("It's a tie!");
    }

    let restartGame = prompt("Would you like to play aagain? (yes / no) : ").toLowerCase()
    const newGameChoices = ["yes", "no"]
    while (!newGameChoices.includes(restartGame)) {
        restartGame = prompt("invalid choice, please type yes or no").toLowerCase()
    }
    if (restartGame === "yes") {
        playRound()
    } else {
        console.log("Whatevs bruv")
    }
  }
}

function playRound() {
  const game = new Game(0, 0, 3);
  game.play();
}

// Start the game
playRound();
