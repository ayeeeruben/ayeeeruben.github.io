let usps;
let statesSelect = document.querySelector("#statesSelect");
async function setUpForm(){
    try{
        let statesResponse = await fetch("https://csumb.space/api/allStatesAPI.php");
        
        if(!statesResponse.ok){
            throw new Error("Response failed");
        }
        let statesData = await statesResponse.json();
        console.log(statesData);

        

        for(let stateData of statesData){
            let stateOption = document.createElement("option");
            stateOption.id = stateData.usps;
            stateOption.value = stateData.usps;
            stateOption.textContent = stateData.state;

            statesSelect.appendChild(stateOption);
        }
       console.log(usps);

    } catch(apiError){
        console.error(apiError);
    }

}

setUpForm();

document.querySelector("#zipcodesInput").addEventListener("change", zipCode);

async function zipCode(){
    let userZip = document.querySelector("#zipcodesInput").value;
    console.log(userZip);
    try{
        let zipcodeResponse = await fetch("https://csumb.space/api/cityInfoAPI.php?zip="+userZip);
        let zipcodeData = await zipcodeResponse.json();
        let cityText = document.querySelector("#city");
        let latitudeText = document.querySelector("#latitude");
        let longitudeText = document.querySelector("#longitude");
        let zipNotFound = document.querySelector("#zipError");
        if(!zipcodeData || !zipcodeData.city){
            console.log("ZIP not found");
            zipNotFound.textContent = "Zip Code Not Found";
            zipNotFound.style.color = "red";
            cityText.textContent = "";
            latitudeText.textContent = "";
            longitudeText.textContent = "";
            return;
        }
        zipNotFound.textContent = "";
        cityText.textContent = zipcodeData.city;
        latitudeText.textContent = zipcodeData.latitude;
        longitudeText.textContent = zipcodeData.longitude;

    }catch(zipError){
        console.error(zipError);
    }


}

document.querySelector("#passInput").addEventListener("focus", passwordSuggestion);

async function passwordSuggestion(){
    try{
        let passSugResponse = await fetch("https://csumb.space/api/suggestedPassword.php?length=8");
        let passSugData = await passSugResponse.json();

        let sugPass = document.querySelector("#suggestPassword");

        sugPass.textContent = passSugData.password;

    }catch(error){
        console.error(error);
    }
}

document.querySelector("#usernameInput").addEventListener("change",usernameChecker);
let userCheck;

async function usernameChecker(){
    try{
        userCheck = document.querySelector("#usernameInput").value;
        console.log(userCheck)
        let userResponse = await fetch("https://csumb.space/api/usernamesAPI.php?username="+ userCheck);
        let userData = await userResponse.json();
        console.log(userData)

        if(userData.available){
            document.querySelector("#userText").textContent = "available";
            document.querySelector("#userText").style.color = "green"; 
        }
        else{
            document.querySelector("#userText").textContent = "not available";
            document.querySelector("#userText").style.color = "red";

        }


    }catch(error){
        console.error(error);
    }
}
statesSelect.addEventListener("change", counties);

async function counties(){
    try{
        let countySelect = document.querySelector("#countySelect");
        countySelect.innerHTML = "";
        let response = await fetch("https://csumb.space/api/countyListAPI.php?state=" + statesSelect.value);
        let data = await response.json();
        console.log(data);
        for(let countyData of data){
            let countyOption = document.createElement("option");
            countyOption.value = countyData.county;
            countyOption.textContent = countyData.county;
            countySelect.appendChild(countyOption);
        }
    }
    catch(error){
        console.log(error);
    }
}

let submit = document.querySelector("#submit");

submit.addEventListener("click", onSubmit);

function onSubmit(){
    if(userCheck.length < 3){
        document.querySelector("#userText").textContent = "Must be Over 3 Characters!";
        document.querySelector("#userText").style.color = "red";
    }

    let passInput = document.querySelector("#passInput").value;
    let rePassInput = document.querySelector("#rePassInput").value;

    if(passInput.length < 6){
        document.querySelector("#noMatch").textContent = "Must be at Least 6 Characters!";
        document.querySelector("#noMatch").style.color = "red"; 
    }
    else if(passInput!== rePassInput){
        document.querySelector("#noMatch").textContent = "Passwords Do Not Match!";
        document.querySelector("#noMatch").style.color = "red";

    }
    else{
        document.querySelector("#noMatch").textContent = "";
    }   
}