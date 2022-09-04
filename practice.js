const chigirDiv = document.getElementById("chigir");
/* chigirDiv.append("agurk") */

let chigirItem = `<div class="chigir-item"> <img src="./img/chigir.jpg" alt=""> </div>`
let agurkItem = `<div class="agurk-item"> <img src="./img/agurk.jpg" alt=""> </div>`

let addAgurkButton = document.getElementById("agurk-button");
console.log(addAgurkButton)

function addAgurk() {
    chigirDiv.innerHTML =  chigirDiv.innerHTML + agurkItem
    console.log("aaaaaaaa");
};
addAgurkButton.onclick = addAgurk;

/* p.onclick = function(event) { alert("moot!"); }; */

let clearChigirButton = document.getElementById("clear-chigir");
function clearChigir() {
    chigirDiv.textContent = "";
};
clearChigirButton.onclick = clearChigir;


