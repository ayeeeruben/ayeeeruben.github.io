
let qData;
//make sure to add this
async function pageLoad(){
    let randomQuoteEL = document.querySelector("#quote");
    let qResponse = await fetch("https://csumb.space/api/famousQuotes/getRandomQuote.php");
    qData = await qResponse.json();
    console.log(qData);
}
//make sure to add this
pageLoad();

let quoteText = document.querySelector("#quote");
let changeQuoteBtn = document.querySelector("#changeQuoteBtn");
changeQuoteBtn.addEventListener("click", changeQuote);
function changeQuote(){
    quoteText.textContent = `"${qData.quoteText}" - ${qData.firstName} ${qData.lastName}`;
    console.log(quoteText); 
}

let authorInfoBtn = document.querySelector("#authorInfoBtn");
let authorInfo = document.querySelector("#info");
let pic = document.querySelector("#pic");
authorInfoBtn.addEventListener("click", displayInfoAndPic);

function displayInfoAndPic(){
    authorInfo.textContent = qData.bio;
    pic.src = qData.picture;
}

async function changeBG(){
    let bgResponse = await fetch("https://api.unsplash.com/photos/random/?client_id=7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e&featured=true&query=flowers");
    let bgData = await bgResponse.json();
    console.log(bgData);
    console.log(bgData.urls.full)
    document.querySelector("body").style.backgroundImage = `url(${bgData.urls.full})`;
    console.log(bgData.urls.regular);
}
changeBG();

let numOfQuotes = document.querySelector("#numOfQuotes");
let container = document.querySelector(".quotes");
let getQuotesBtn = document.querySelector("#getQuotesBtn");

getQuotesBtn.addEventListener("click", displayNumOfQuotes);

async function displayNumOfQuotes(){
    const n = Number(numOfQuotes.value);
    if(n < 1 || n > 5 || n == ""){
        document.querySelector("#getQuotesError").textContent = "Please choose a value between 1 and 5";
        document.querySelector("#getQuotesError").style.color = "red";
        container.innerHTML = ""; 
        return;
    }
    let response = await fetch("https://csumb.space/api/famousQuotes/getQuotes.php?n=" + numOfQuotes.value);
    let data = await response.json();
    console.log(data);
    document.querySelector("#getQuotesError").textContent = "";
    container.innerHTML = "";
    for(let i = 0; i < numOfQuotes.value; i++){
        let p = document.createElement("p");
        p.textContent = `"${data[i].quoteText}" — ${data[i].firstName} ${data[i].lastName}`;
        container.appendChild(p);
    }
}

