let startBtn = document.querySelector("#startBtn");
let error = document.querySelector("#error");


startBtn.addEventListener("click", function(){
    let username1 = document.querySelector("#username1").value;
    let username2 = document.querySelector("#username2").value;
    if(username1 && username2){
        sessionStorage.setItem("username1", username1);
        sessionStorage.setItem("username2", username2);

        window.location.href = "game.html";
    }
    else {
        error.textContent = "Please enter both usernames!";
        error.style.color = "red";
    }
});