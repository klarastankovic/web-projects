function calculate(operation) {
    const firstNumber = parseInt(document.getElementById('firstNumber').value);
    const secondNumber = parseInt(document.getElementById('secondNumber').value);
    let result;

    switch (operation) {
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
    }
    result = 'Result: ' + result;
    document.getElementById('result').textContent = result;
}