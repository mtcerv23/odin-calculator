function add (a, b) {
 return a + b;
}

function subtract (a, b) {
  return a - b;
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
const equals= document.querySelector('#equals');
let operatorTemp;
let displayTemp;

for (let number of numbers) {
  number.addEventListener('click', () => {
    if (display.textContent == '0') display.textContent = number.textContent;
    display.textContent += number.textContent;
    displayTemp = display.textContent;
    console.log(`displayTemp = ${displayTemp}`);
  });
}

for (let operator of operators) {
  operator.addEventListener('click', () => {
    // displayTemp = display.textContent;
    operatorTemp = operator.textContent;
  })
}

equals.addEventListener('click', () => {
  display.textContent = operate(operatorTemp, displayTemp, display.textContent);
})

clear.addEventListener('click', () => {
  display.textContent = 0;
  displayTemp = display.textContent;
  console.log(`displayTemp = ${displayTemp}`);
})

del.addEventListener('click', () => {
  if (display.textContent.length == 1) display.textContent = 0;
  if (display.textContent == '0') return;
  let string = display.textContent.toString();
  display.textContent = string.substring(0, string.length - 1);
  displayTemp = Number(display.textContent);
  console.log(`displayTemp = ${displayTemp}`);
})

decimal.addEventListener('click', () => {
  for (let char of display.textContent) {
    if (char === '.') return;
  }
  // if (display.textContent % 1 != 0) return;
  display.textContent += '.';
})