
async function setUpForm(){
    try{
        let statesResponse = await fetch("https://csumb.space/api/allStatesAPI.php");
        
        if(!statesResponse.ok){
            throw new Error("Response failed");
        }
        let statesData = await statesResponse.json();
        console.log(statesData);

        let statesSelect = document.querySelector("#statesSelect");

        for(let stateData of statesData){
            let stateOption = document.createElement("option");
            stateOption.id = stateData.usps;
            stateOption.value = stateData.usps;
            stateOption.textContent = stateData.state;

            statesSelect.appendChild(stateOption);
        }

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
        let  passSugData = await passSugResponse.json();

        let sugPass = document.querySelector("#suggestPassword");

        sugPass.textContent = passSugData.password;

    }catch(error){
        console.error(error);
    }
}

document.querySelector("#usernameInput").addEventListener("change",usernameChecker);

async function usernameChecker(){
    try{
        let userCheck = document.querySelector("#usernameInput").value;
        console.log(userCheck)
        let userResponse = await fetch("https://csumb.space/api/usernamesAPI.php?username="+ userCheck);
        let userData = await userResponse.json();
        console.log(userData)

        if(userData.available){
            document.querySelector("#userText").textContent = "available";
        }
        else{
            document.querySelector("#userText").textContent = "not available";
        }


    }catch(error){
        console.error(error);
    }
}