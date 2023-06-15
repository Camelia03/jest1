let game = {
    score: 0,
    currentGame: 0,
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.playerMoves.length = 0;
    game.currentGame.length = 0;
    showScore();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore };
