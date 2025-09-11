//Event Listeners
document.querySelector("#dateBtn").addEventListener("click", displayDate);
document.querySelector("#timeBtn").addEventListener("click", displayTime);


let today = new Date();
let year = today.getFullYear();
console.log(today);
console.dir(year);
let month = getMonthName(today.getMonth());
console.log(month)
function getMonthName(monthIndex) { 
    if (monthIndex === 8) {
        return("September!");
      } else {
        return("Not September!");
      }
  }

function displayDate(){
    let dateElement = document.querySelector("#date");
    dateElement.textContent = today.toDateString();
}
//displayDate();

function displayTime(){
    let timeElement = document.querySelector("#time")
    timeElement.textContent = today.toTimeString();
}
//displayTime();
