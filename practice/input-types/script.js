document.querySelector("#textColorBtn").addEventListener("click",changeColor);
document.querySelector("#textSizeBtn").addEventListener("click",changeSize);
document.querySelector("#bgColorBtn").addEventListener("click",changeBackground);


function changeColor(){
    //alert("changing color!");
    let color = document.querySelector("#textColor").value;
    document.querySelector("body").style.color = color;
}

function changeSize(){
    let size = document.querySelector("#textSize").value;
    document.querySelector("body").style.fontSize = size;
}


function changeBackground(){
    let background = document.querySelector("#bgColor").value;
    document.querySelector("body").style.backgroundColor = background;
}