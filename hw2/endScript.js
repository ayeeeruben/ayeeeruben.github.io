const WINNER = sessionStorage.getItem("winner");
const SCORE = sessionStorage.getItem("score");

let message = document.querySelector("#message");
let score = document.querySelector("#score");
let mainMenuBtn = document.querySelector("#mainMenu");
let playAgainBtn = document.querySelector("#playAgain");

message.textContent = `${WINNER} Has Won The Game!`;

score.textContent = `Total Score: ${SCORE}`;

mainMenuBtn.addEventListener("click", function(){
    sessionStorage.clear();
    window.location.href = "main.html";
});

playAgainBtn.addEventListener("click", function(){
    sessionStorage.removeItem("winner");
    sessionStorage.removeItem("score");
    window.location.href = "game.html";
});