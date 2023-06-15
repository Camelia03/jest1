let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.playerMoves.length = 0;
    game.currentGame.length = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    //showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function lightsOn(param1) {
    document.getElementById(param1).classList.add("light");
    setTimeout(() => {
        document.getElementById(param1).classList.remove("light");
    }, 400);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn };
