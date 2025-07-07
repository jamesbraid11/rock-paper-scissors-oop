
class Player {
    constructor(name, choice) {
        this.name = name
        this.choice = choice
    }
}

class HumanPlayer extends Player {
    constructor(name, choice) {
        super(name, choice)
    }
    makeChoice() {
        let input = prompt("Choose rock, paper, or scissors:").toLowerCase()
        const validChoices = ["rock", "paper", "scissors"]
        while (!validChoices.includes(input)) {
            input = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase()
        }
        this.choice = input
    }
}

class ComputerPlayer extends Player {
    constructor(name = "Computer", choice) {
        super(name, choice)
    }
    makeChoice() {
        const choices = ["rock", "paper", "scissors"]
        this.choice = choices[Math.floor(Math.random() * choices.length)]
    }
}

class Game {

    static playerScore = 0;
    static compterScore = 0;
    static rounds = 0

    constructor(humanScore, computerScore, rounds) {
        this.humanScore = humanScore
        this.computerScore = computerScore
        this.moves = rounds
    }

    determineWinner(human, computer) {
        const h = HumanPlayer.choice;
        const c = ComputerPlayer.choice
        if (h === c) return "draw";
        if (
            (h === "rock" && c === "scissors") ||
            (h === "paper" && c === "rock") ||
            (h === "scissors" && c === "paper")
        ) {
        this.humanScore++;
        console.log("You win");
        } else {
            this.computerScore++
            console.log("Computer wins")
        }
    }

    play() {
        const human = new HumanPlayer("You", "")
        const computer = new ComputerPlayer()

        for (let i = 0; i < this.rounds; i++) {
            console.log(`\nRound ${i + 1}`);
            human.makeChoice;
            computer.makeChoice;
            console.log(`You choose: ${human.choice}`)
            console.log(`Computer chose: ${computer.choice}`)

            const winner = this.determineWinner(human, computer)
            if (winner === "draw") {
                console.log("It's a draw!")
            } else {
                console.log(`${winner} wins the round!`)
            }
        }

    }
}


function playRound() {
    const playerOptions = ["rock", "paper", "scissors"]
}