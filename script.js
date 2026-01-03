const display = document.getElementById('display');

function appendNumber(number) {
    if(display.value === "0") display.value = "";
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if(['+', '-', '*', '/'].includes(lastChar)) return; // prevent double operator
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
