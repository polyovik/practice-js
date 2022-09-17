const catsDiv = document.getElementById("chigir");
/* chigirDiv.append("agurk") */

let chigirItem = `<div class="chigir-item"> <img src="./img/chigir.jpg" alt=""> </div>`
let agurkItem = `<div class="agurk-item"> <img src="./img/agurk.jpg" alt=""> </div>`
let customCatItem = `<div class="custom-cat-item"> <img src="./img/custom-cat.jpg" alt=""> </div>`
let errorTextItem = `<div id="error-text" > <p>You didn't add text</p> </div>`
let clearErrorItem = `<div class="error-item"> <button id="error-button"> Clear Error </button> </div>`

let addAgurkButton = document.getElementById("agurk-button");
console.log(addAgurkButton)
let clearChigirButton = document.getElementById("clear-chigir");
let addChigirButton = document.getElementById("chigir-button");
let catNameInput = document.getElementById("cat-name");
let catNameButton = document.getElementById("show-cat-name");
let addCustomCatButton = document.getElementById("custom-cat");

function addCat(catItem, catName) {
    const catNameText = /* '<h1>'  + catName +  '</h1>' */ `<h1> ${catName} </h1>`
    catsDiv.innerHTML =  catsDiv.innerHTML + catItem + catNameText;
};

function addAgurk() {
    addCat(agurkItem, "Agurk")
};
/* p.onclick = function(event) { alert("moot!"); }; */
function clearChigir() {
    catsDiv.textContent = "";
};

function addChigir() {
    addCat(chigirItem, "Chigir") 
};

function showCatName() {
    console.log(catNameInput.value)
}

function addCustomCat() {
    if (catNameInput.value.length > 0) {
        addCat(customCatItem, catNameInput.value);
        catNameInput.value = "";
    } else {
        catsDiv.innerHTML =  catsDiv.innerHTML + clearErrorItem + errorTextItem;
        const clearErrorButton= document.getElementById("error-button")
        clearErrorButton.onclick = clearError;
    }
}

function clearError() {
    const errorContainer = document.getElementById("error-text");
    errorContainer.remove(); 
    const clearErrorButton= document.getElementById("error-button")
    clearErrorButton.remove();
    console.log(errorContainer)
};


addAgurkButton.onclick = addAgurk;
addChigirButton.onclick = addChigir;
clearChigirButton.onclick = clearChigir;
catNameButton.onclick = showCatName;
addCustomCatButton.onclick = addCustomCat;




