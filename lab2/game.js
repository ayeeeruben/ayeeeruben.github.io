let correct = Math.floor(Math.random() * 99 + 1);
let guessInput = document.querySelector("#guessInput");
let guessBtn = document.querySelector("#guessBtn");
let prompt = document.querySelector("#prompt");
let prompt2 = document.querySelector("#prompt2");
let reset = document.querySelector("#reset");
let guesses = document.querySelector("#guesses");
let totalWins = document.querySelector("#wins");
let totalLoses = document.querySelector("#loses");
let wins = 0;
let loses = 0;
let correctNum = document.querySelector("#correctNum");


// guesses.style.whiteSpace = "pre-line";

let attempts = 0;

initializeGame();

function initializeGame() {
    console.log("randomNumber: " + correct);
    totalWins.textContent = "WINS: " + wins;
    totalLoses.textContent = "LOSES: " + loses;

   //hiding the Reset button
   reset.style.display = "none";
  
   //adding focus to textbox
   guessInput.focus();
}

function correctGuess(){
    const guess = Number(guessInput.value);
    if (!Number.isFinite(guess)) {
        prompt.textContent = "Please enter a number!";
        prompt.style.color = "red";
        return;
      }

    if(guess < 1 || guess> 99){
        prompt.textContent="Guess is out of range!";
        prompt.style.color = "red";
        return;
    }

    attempts++;
    guesses.textContent += guess + " ";
    prompt2.textContent = "Attempts: " + attempts;


    if(guess === correct){
        prompt.textContent = "You got it whithin 7 guesses!";
        prompt.style.color = "darkgreen";
        guessInput.style.backgroundColor = "lightgreen";
        wins++;
        gameOver();    
        return;
    }

    if(attempts >= 7){
        prompt.textContent = "You lost! You ran out of guesses!";
        prompt.style.color = "red";
        prompt2.textContent = "Attempts: " + attempts;
        reset.style.display = "block";
        correctNum.textContent = "Correct Number: " + correct;
        loses++;
        gameOver();    
        return;
        
    }
    
    if(guess > correct){
        prompt.textContent = "You guessed higher";
        prompt.style.color = "black";
    }
    else if(guess < correct){
        prompt.textContent = "You guessed lower";
        prompt.style.color = "black";    
    }
}


function gameOver(){
    totalWins.textContent = "WINS: " + wins;
    totalLoses.textContent = "LOSES: " + loses;
    guessBtn.disabled = true;
    guessInput.disabled = true;
    reset.style.display = "inline-block";
}

function resetGame(){
    correct = Math.floor(Math.random() * 99) + 1;
    guessInput.disabled = false;
    guessBtn.disabled = false; 
    guessInput.style.backgroundColor = "";
    guessInput.value = "";
    prompt.textContent = "Guess a number from 1 to 99 in 7 attempts!";
    prompt.style.color = "black";
    prompt2.textContent = "";
    guesses.textContent = "";
    correctNum.textContent = "";     

    reset.style.display = "none";
    attempts = 0;
    

    initializeGame();

}

guessBtn.addEventListener("click",correctGuess);
reset.addEventListener("click",resetGame);
// reset.addEventListener("click", function(){
//     correct = Math.floor(Math.random() * 99) + 1;
//     guessInput.value = '';
//     prompt.textContent = '';
//     guessInput.focus()});