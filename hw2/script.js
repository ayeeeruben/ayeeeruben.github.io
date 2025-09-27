const NAME1 = sessionStorage.getItem("username1");
const NAME2 = sessionStorage.getItem("username2");

let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let dice = document.querySelector("#dice");
let roll = document.querySelector("#roll");
let passTurn = document.querySelector("#passTurn");

let player1ScoreText = document.querySelector("#player1ScoreText");
let player2ScoreText = document.querySelector("#player2ScoreText");
let currentPlayer1ScoreText = document.querySelector("#currentPlayer1ScoreText");
let currentPlayer2ScoreText = document.querySelector("#currentPlayer2ScoreText");

let player1Score = 0;
let currentPlayer1Score = 0;
let player2Score = 0;
let currentPlayer2Score = 0;

let isPlayerTurn = true;


function updateUI() {
    player1ScoreText.textContent = `${NAME1}'s Score: ${player1Score}`;
    currentPlayer1ScoreText.textContent = `${NAME1}'s Turn: ${currentPlayer1Score}`;
    player2ScoreText.textContent = `${NAME2}'s Score: ${player2Score}`;
    currentPlayer2ScoreText.textContent = `${NAME2}'s Turn: ${currentPlayer2Score}`;
  }
  updateUI();
  

const DIE = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

dice.textContent = DIE[0];

if(NAME1 && NAME2){
    player1.textContent = `Player: ${NAME1}`;
    player2.textContent = `Player: ${NAME2}`;
}

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

function skipTurn(){
    if(isPlayerTurn){
        player1Score += currentPlayer1Score;
        if(checkWin()){
            return;
        }
    }
    else{
        player2Score += currentPlayer2Score;
        if(checkWin()){
            return;
        }
    }

    isPlayerTurn = !isPlayerTurn;
    currentPlayer2Score = 0;
    currentPlayer1Score = 0;
    updateUI();
}

roll.addEventListener("click", function(){

    const value = rollDice();
    dice.textContent = DIE[value - 1];
    if(value === 1){
        if (isPlayerTurn) {
            currentPlayer1Score = 0;
          } else {
            currentPlayer2Score = 0;
          }
          isPlayerTurn = !isPlayerTurn;
          updateUI();
          return;
    }
    if (isPlayerTurn) {
        currentPlayer1Score += value;
      } else {
        currentPlayer2Score += value;
      }
      updateUI();
   
});
 passTurn.addEventListener("click", skipTurn);

 function checkWin(){
    if(player1Score >= 100){
        sessionStorage.setItem("winner", NAME1);
        sessionStorage.setItem("score", player1Score);
        window.location.href = "end.html";
        return true;
    }
    else if(player2Score >= 100){
        sessionStorage.setItem("winner", NAME2);
        sessionStorage.setItem("score", player2Score);
        window.location.href = "end.html";
        return true;
    }
    return false;
 }