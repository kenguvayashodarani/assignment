let containerElement = document.getElementById("itemContainer");
let barsicon = document.getElementById("barsicon");
let closeicon = document.getElementById("closeicon");

function showingItems() {
    barsicon.classList.toggle("display");
    containerElement.classList.toggle("display");
}
barsicon.addEventListener("click", showingItems);

function hiddingItems() {
    closeicon.classList.toggle("display");
    barsicon.classList.toggle("display");
    containerElement.classList.toggle("display");
}
closeicon.addEventListener("click", hiddingItems);