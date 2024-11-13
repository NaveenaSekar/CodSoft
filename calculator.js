let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return; 
    if (currentInput === '0' && number !== '.') {
        currentInput = number; 
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return; 
    if (isNaN(currentInput.slice(-1))) return; 
    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let expression = currentInput.replace(/%/g, '/100');
        currentInput = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        alert("Invalid input");
        clearDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
