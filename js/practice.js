const catsDiv = document.getElementById('chigir');
/* chigirDiv.append("agurk") */

const chigirItem = `<div class="chigir-item"> <img src="./img/chigir.jpg" alt=""> </div>`;
const agurkItem = `<div class="agurk-item"> <img src="./img/agurk.jpg" alt=""> </div>`;
const customCatItem = `<div class="custom-cat-item"> <img src="./img/custom-cat.jpg" alt=""> </div>`;
/* const errorTextItem = `<div id="error-text"> <p>You didn't add text</p> </div>`
const clearErrorItem = `<div class="error-item"> <button id="error-button"> Clear Error </button> </div>` */

const addAgurkButton = document.getElementById('agurk-button');
console.log(addAgurkButton);
const clearChigirButton = document.getElementById('clear-chigir');
const addChigirButton = document.getElementById('chigir-button');
const catNameInput = document.getElementById('cat-name');
const catNameButton = document.getElementById('show-cat-name');
const addCustomCatButton = document.getElementById('custom-cat');
const clearErrorButton = document.getElementById('error-button');


function addCat(catItem, catName) {
  const catNameText = /* '<h1>'  + catName +  '</h1>' */ `<h1> ${catName} </h1>`;
  catsDiv.innerHTML = catsDiv.innerHTML + catItem + catNameText;
}

function addAgurk() {
  addCat(agurkItem, 'Agurk');
}
/* p.onclick = function(event) { alert("moot!"); }; */
function clearChigir() {
  catsDiv.textContent = '';
}

function addChigir() {
  addCat(chigirItem, 'Chigir');
}

function showCatName() {
  console.log(catNameInput.value);
}

function addCustomCat() {
  if (catNameInput.value.length > 0) {
    addCat(customCatItem, catNameInput.value);
    catNameInput.value = '';
  } /* else {
        catsDiv.innerHTML =  catsDiv.innerHTML + clearErrorItem + errorTextItem;
        const clearErrorButton = document.getElementById("error-button")
        clearErrorButton.onclick = clearError;
    } */ else {
    const errorItem = document.getElementById('error-text');
    errorItem.style.display = 'inline';
  }
}

function hideError() {
  const errorItem = document.getElementById('error-text');
  errorItem.style.display = 'none';
  /* const errorContainer = document.getElementById("error-text");
    errorContainer.remove(); 
    const clearErrorButton= document.getElementById("error-button")
    clearErrorButton.remove();
    console.log(errorContainer) */
}

/* function addColor(addedColor, colorText) {

} */

function addColor() {
  if (addRedButtonColor.clicked == true) {
    addRedButtonColor.style.backgroundColor = 'red';
  } else if (addBlueButtonColor.clicked == true) {
  addBlueButtonColor.style.backgroundColor = 'lightblue';
  } else {
    addYellowButtonColor.style.backgroundColor = 'yellow';
  }  
}

addAgurkButton.onclick = addAgurk;
addChigirButton.onclick = addChigir;
clearChigirButton.onclick = clearChigir;
catNameButton.onclick = showCatName;
addCustomCatButton.onclick = addCustomCat;
clearErrorButton.onclick = hideError;
