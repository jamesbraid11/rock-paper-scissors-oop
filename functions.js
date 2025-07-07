
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

    }
}

class ComputerPlayer extends Player {
    constructor(name, choice) {
        super("Computer", choice)
    }
}

class Game {

    static rounds = 0

    constructor(humanScore, computerScore, rounds) {
        this.humanScore = humanScore
        this.computerScore = computerScore
        this.moves = rounds
    }
}


function playRound() {
    const playerOptions = ["rock", "paper", "scissors"]
}