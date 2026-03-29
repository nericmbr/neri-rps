const rpsGame = (userChoice) => {
    const cpuChoice = getCpuChoice()
    const gameResult = compareChoices(userChoice, cpuChoice)

    alert(gameResult)
}

const compareChoices = (userChoice, cpuChoice) => {
    if (userChoice === cpuChoice) {
        return "empate"
    }

    if (userChoice === "tesoura") {
        if (cpuChoice === "pedra") {
            return "pedra venceu, você perdeu a rodada"
        }
        if (cpuChoice === "papel") {
            return "tesoura venceu, parabens!"
        }
    }

    if (userChoice === "pedra") {
        if (cpuChoice === "papel") {
            return "papel venceu, você perdeu a rodada"
        }
        if (cpuChoice === "tesoura") {
            return "pedra venceu, parabens!"
        }
    }

    if (userChoice === "papel") {
        if (cpuChoice === "tesoura") {
            return "tesoura venceu, você perdeu a rodada"
        }
        if (cpuChoice === "pedra") {
            return "papel venceu, parabens!"
        }
    }
}

const getCpuChoice = () => {
    const choices = ["pedra", "papel", "tesoura"]

    const random = Math.floor(Math.random() * 3)

    return choices[random]

}

