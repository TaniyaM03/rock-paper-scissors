let scorePlayer = 0;
let scoreAi = 0;
let currentRound = 0;


// moves can be in string "rock", "paper", "scissors"

function determineWinner(movePlayer) {
    let moveAi = aiChoice();
    document.getElementById("playerImg").src = "./imgs/" + movePlayer + ".png"
    document.getElementById("aiImg").src = "./imgs/" + moveAi + ".png"
    // let winner = null;
    // winer can be = "player", "ai"
    if (movePlayer == moveAi) {
        console.log("Its a tie")
        document.getElementById("winner").innerHTML = "ITS A TIE!!";
    } else if (
        (movePlayer == "paper" && moveAi == "rock") ||
        (movePlayer == "rock" && moveAi == "scissor") ||
        (movePlayer == "scissor" && moveAi == "paper")) {
        console.log("Player wins")
        scorePlayer++;
        document.getElementById("playerScore").innerHTML = scorePlayer;
        document.getElementById("winner").innerHTML = "PLAYER WINS!!";

    } else {
        console.log("Ai wins")
        scoreAi++;
        document.getElementById("aiScore").innerHTML = scoreAi;
        document.getElementById("winner").innerHTML = "AI WINS!!";

    }
    currentRound++;
    document.getElementById("currentRound").innerHTML = currentRound;
}
//determineWinner("paper");

function aiChoice() {
    const gameMoves = ["rock", "paper", "scissor"]
    return gameMoves[Math.floor(Math.random() * 3)]
}

function resetGame() {
    scorePlayer = 0;
    scoreAi = 0;
    currentRound = 0;
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("aiScore").innerHTML = 0;
    document.getElementById("currentRound").innerHTML = 0;
    document.getElementById("playerImg").src = "https://m.media-amazon.com/images/I/51tKIR7GWYL._AC_UF894,1000_QL80_.jpg"
    document.getElementById("aiImg").src = "https://drawiteazy.files.wordpress.com/2016/10/project-19-jpg.jpeg"
    document.getElementById("winner").innerHTML = "";
}