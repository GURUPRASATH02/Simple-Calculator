let currentResult = '';

function appendToResult(value) {
    currentResult += value;
    document.getElementById('result').value = currentResult;
}

function appendOperator(operator) {
    if (currentResult !== '' && !isNaN(currentResult[currentResult.length - 1])) {
        currentResult += operator;
        document.getElementById('result').value = currentResult;
    }
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').value = currentResult;
}

function calculate() {
    if (currentResult !== '' && !isNaN(currentResult[currentResult.length - 1])) {
        let result = eval(currentResult);
        document.getElementById('result').value = result;
        currentResult = result.toString();
    }
}
