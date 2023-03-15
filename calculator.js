function add (a, b) {
 return Number(a + b);
}

function subtract (a, b) {
  return Number(a - b);
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate (operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '÷':
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const decimal = document.querySelector('#decimal');
const equals = document.querySelector('#equals');
let operatorTemp;
let firstNumber;
let displayNumber;
let runningTotal;

for (let number of numbers) {
  number.addEventListener('click', () => {
    if (display.textContent == '0') display.textContent = number.textContent;
    else display.textContent += number.textContent;
    if (firstNumber === displayNumber) display.textContent = number.textContent;
    displayNumber = +display.textContent;
    console.log(`displayNumber = ${displayNumber}`);
    console.log(`displayNumber is a ${typeof displayNumber}`);
  });
}


for (let operator of operators) {
  operator.addEventListener('click', () => {
    // if (runningTotal) display.textContent = runningTotal;
    // operatorTemp = operator.textContent;
    // if (display.textContent.indexOf('.' != display.textContent.length - 1)) firstNumber = +display.textContent;
    // console.log(`firstNumber = ${firstNumber}`);
    // if (displayNumber) runningTotal = operate(operatorTemp, firstNumber, displayNumber);
    operatorTemp = operator.textContent;
    if (!firstNumber) firstNumber = displayNumber;
    else firstNumber = operate(operatorTemp, firstNumber, displayNumber);
  })
}

equals.addEventListener('click', () => {
  let result = operate(operatorTemp, firstNumber, displayNumber);
  displayNumber = result;
  display.textContent = result;
})


clear.addEventListener('click', () => {
  display.textContent = 0;
  firstNumber = null;
  displayNumber = null;
  console.log(`firstNumber = ${firstNumber}`);
  console.log(`displayNumber = ${displayNumber}`);
})

del.addEventListener('click', () => {
  if (display.textContent.length == 1) display.textContent = 0;
  if (display.textContent == '0') return;
  let string = display.textContent.toString();
  display.textContent = string.substring(0, string.length - 1);
  firstNumber = display.textContent;
  // console.log(`firstNumber = ${firstNumber}`);
})

decimal.addEventListener('click', () => {
  for (let char of display.textContent) {
    if (char === '.') return;
  }

  display.textContent += '.';
  // if (display.textContent % 1 != 0) return;
})
