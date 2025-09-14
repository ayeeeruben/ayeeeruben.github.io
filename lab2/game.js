let correct = Math.floor(Math.random() * 99 + 1);
let guessInput = document.querySelector("#guessInput");
let guessBtn = document.querySelector("#guessBtn");
let prompt = document.querySelector("#prompt")
let reset = document.querySelector("#reset")


function turnGreen(){
    guessInput.style.backgroundColor = "lightgreen";
}

function correctGuess(){
    if(+guessInput.value > correct){
        document.querySelector("#prompt").textContent = "You guessed higher";
    }
    else if(+guessInput.value < correct){
        document.querySelector("#prompt").textContent = "You guessed lower"; 
    
    }
    else{
        document.querySelector("#prompt").textContent = "You got it!";  
    }
}


guessBtn.addEventListener("click",correctGuess);
reset.addEventListener("click", function(){
    correct = Math.floor(Math.random() * 99) + 1;
    guessInput.value = '';
    prompt.textContent = '';
    guessInput.focus()});