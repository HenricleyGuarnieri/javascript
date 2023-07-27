let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function deleteLastEntry() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    const result = Function(`'use strict'; return (${displayValue})`)();
    displayValue = String(result);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}