const addRedButtonColor = document.getElementById('red-button');
const addBlueButtonColor = document.getElementById('blue-button');
const addYellowButtonColor = document.getElementById('yellow-button');
const blankContainer = document.getElementById('blank-container');
const resetButton = document.getElementById('reset-button');
const addTextButton = document.getElementById('add-text');
const textForBlankContainerInput = document.getElementById('text-for-blank-container');


/**
 * 
 * @param {string} colorToAdd 
 */
function addColor(colorToAdd) {
    blankContainer.style.backgroundColor = colorToAdd; 
} 

function addRedColor(){
    addColor('red')
}

function addBlueColor(){
    addColor('blue')
}

function addYellowColor(){
    addColor('yellow');
}

function reset() {
    addColor('antiquewhite');
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