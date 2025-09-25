//alert("accessing web api data...")

getMovieData();

async function getMovieData() {
    let url = "https://www.omdbapi.com/?apikey=12215ee6&s=superman";
    try {
    let response = await fetch(url);
    try {
        let data = await response.json();
        console.log(data.Search[0].Poster);
        for(let i of data.Search){
            
        }
        let moviesEl = document.querySelector("#movies");
        let imageEl = document.createElement("img");
        imageEl.src = data.Search[2].Poster;
        imageEl.width = 300;
        let h2El = document.createElement("h2");
        h2El.textContent = data.Search[2].Title;

        moviesEl.append(h2El);
        moviesEl.append(imageEl);

    
    } catch (error) {
        console.log("Error parsing data!" + error)
    }
    } catch(error) {
        console.log("Network Error! " + error)
    }
}