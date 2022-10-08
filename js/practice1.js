const summNumbersButton = document.getElementById('summ-numbers');

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function summNumbers(num1, num2) {
  const summ = num1 + num2;

  return summ;
}

/**
 *
 * @param {string} str
 * @returns {number}
 */
function convertStringToNumber(str) {
  if (str.length == 0) {
    str = 0;
  }
  const resultNumber = parseInt(str);

  return resultNumber;

  /* or
    return parseInt(str); */
}

function summ() {
  let number1Value = document.getElementById('number1').value;
  let number2Value = document.getElementById('number2').value;

  number1Value = convertStringToNumber(number1Value);
  number2Value = convertStringToNumber(number2Value);

  const summResult = summNumbers(number1Value, number2Value);

  console.log(number1Value);
  console.log(number2Value);
  console.log(summResult);
}

summNumbersButton.onclick = summ;
