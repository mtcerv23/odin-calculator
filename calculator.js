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
let numberArray = [];

for (let number of numbers) {
  number.addEventListener('click', () => {
    if (numberArray[0] == '0') numberArray.shift();
    numberArray.push(number.textContent);
    display.textContent = numberArray.join("");
    displayNumber = +display.textContent;
  });
}

for (let operator of operators) {
  operator.addEventListener('click', () => {
    if (operatorTemp == '÷' && displayNumber == 0) {
      alert('Cannot divide by 0!');
      return;
    }
    if (!operatorTemp) firstNumber = displayNumber;
    else {
      firstNumber = operate(operatorTemp, firstNumber, displayNumber);
      display.textContent = firstNumber;
    }
    operatorTemp = operator.textContent;
    numberArray = ['0'];
  })
}

equals.addEventListener('click', () => {
  if (operatorTemp == '÷' && displayNumber == 0) {
    alert('Cannot divide by 0!');
    return;
  }
  if (!operatorTemp) return;
  displayNumber = operate(operatorTemp, firstNumber, displayNumber);
  display.textContent = displayNumber;
  operatorTemp = null;
})


clear.addEventListener('click', () => {
  numberArray = ['0'];
  display.textContent = numberArray;
  firstNumber = null;
  displayNumber = null;
  operatorTemp = null;
})

del.addEventListener('click', () => {
  if (numberArray.length == 1) numberArray = ['0'];
  else numberArray.pop();
  display.textContent = numberArray.join("");
  displayNumber = +display.textContent;
})

decimal.addEventListener('click', () => {
  for (let char of numberArray) {
    if (char === '.') return;
  }
  numberArray.push('.');
  display.textContent = numberArray.join("");
})
