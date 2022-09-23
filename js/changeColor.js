const addRedButtonColor = document.getElementById('red-button');
const addBlueButtonColor = document.getElementById('blue-button');
const addYellowButtonColor = document.getElementById('yellow-button');
const blankContainer = document.getElementById('blank-container');
const resetButton = document.getElementById('reset-button');
const addTextButton = document.getElementById('add-text');
const textForBlankContainerInput = document.getElementById('text-for-blank-container');


/**
 * @param {Object} element
 * @param {string} colorToAdd 
 */
function addColor(element, colorToAdd) {
    element.style.backgroundColor = colorToAdd; 
} 

function addRedColor(){
    addColor(blankContainer, 'red')
}

function addBlueColor(){
    addColor(blankContainer,'blue')
}

function addYellowColor(){
    addColor(blankContainer,'yellow');
}

function reset() {
    addColor(blankContainer, 'antiquewhite');
    updateText(blankContainer, '');
}

/**
 * 
 * @param {Object} element 
 * @param {string} textToAdd 
 */
function updateText(element, textToAdd) {
    element.textContent = textToAdd;
}

function addTextToBlankContainer(){
    updateText(blankContainer, textForBlankContainerInput.value);
    textForBlankContainerInput.value = "";
}

addRedButtonColor.onclick = addRedColor;
addBlueButtonColor.onclick = addBlueColor;
addYellowButtonColor.onclick = addYellowColor;
resetButton.onclick = reset;
addTextButton.onclick = addTextToBlankContainer;