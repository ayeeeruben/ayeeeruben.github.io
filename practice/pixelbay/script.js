let setBG = document.querySelector("#setBG");
let scenery = document.querySelector("#scenery");
// let bg = document.querySelector("#bg");

scenery.addEventListener("change",setBackground);

async function setBackground(){
    try{
        let response = await fetch("https://pixabay.com/api/?key=20426927-497d14db9c234faf7d0df8317&per_page=50&orientation=horizontal&q=" + scenery.value);
        let data = await response.json();
        let random = Math.floor(Math.random() * 50) + 1;
        document.querySelector("body").style.backgroundImage = `url(${data.hits[random].webformatURL})`;
    }
    catch(error){
        console.log(error);
    }
}