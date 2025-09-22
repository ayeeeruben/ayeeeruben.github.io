let sumbmitBtn = document.querySelector("#submit");
let a1Message = document.querySelector("#a1-result");
let a2Message = document.querySelector("#a2-result");
let a3Message = document.querySelector("#a3-result");
let a4Message = document.querySelector("#a4-result")
let num = document.querySelector("#numberInput")


//gernate random order answers
// let question3Options = [1,2,3];

// let question3Space = document.querySelector("#question3-space");

// //suffle
// let shuffleOptions = _.shuffle(question3Options);

// //create option 1
// //repeat using for loop
// let radioInput = document.createElement("input");
// radioInput.id = question3Options[0]; //replace with i
// radioInput.value = question3Options[0];
// radioInput.name = "q3-answers";
// radioInput.type = "radio";
// question3Space.appendChild(radioInput);

// let radioLabel = document.createElement("label");
// radioLabel.textContent = question3Options[0];
// radioLabel.for = question3Options[0];
// question3Space.appendChild(radioLabel);

sumbmitBtn.addEventListener('click', function(){
    let answer1 = document.querySelector('#a1').value;
    console.log(answer1);
    let result = answer1.toUpperCase();
    if(result === "MINECRAFT"){
        a1Message.textContent = "That's right!"
        a1Message.style.color = "green";
    }
    else{
        a1Message.textContent = "That's incorrect";
        a2Message.style.color = "red"; 
    }

    // let answer2 = document.querySelector("input[name=colors]:checked").value;
    // console.log(answer2);

    let answer2 = document.querySelector("input[name=launchers]:checked").value;
    if(answer2 === "steam"){
        a2Message.textContent = "Lucky Guess!";
        a2Message.style.color = "green"; 
    }
    else{
        a2Message.textContent = "Nope";
        a2Message.style.color = "red"; 
    }


    let answer3 = document.querySelector("#POV");
    let current = answer3.value;
    console.log(current);
    if(current === "o1"){
        a3Message.textContent = "Nuh uh";
        a3Message.style.color = "red";
    }
    else if(current === "o2"){
        a3Message.textContent = "Wrong";
        a3Message.style.color = "red";
    }
    else if(current === "o3"){
        a3Message.textContent = "Duh";
        a3Message.style.color = "green";
    }
    

    let answer4 = document.querySelector("#numberInput").value;
    if (answer4 === "11"){
        a4Message.textContent = "Nice"; 
        a4Message.style.color = "green"; 
    }
    else{
        a4Message.textContent = "Nah"; 
        a4Message.style.color = "red"; 
    }

});