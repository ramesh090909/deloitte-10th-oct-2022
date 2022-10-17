function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function calculate(choice) {

    var firstValue = Number(document.getElementById('txtFirst').value)
    var secondValue = Number(document.getElementById('txtSecond').value)
    var result; //undefined
    switch (choice) {
        case 1:
            result = add(firstValue, secondValue)
            break;

        case 2:
            result = subtract(firstValue, secondValue)
            break;

        case 3:
            result = multiply(firstValue, secondValue)
            break;

        case 4:
            result = divide(firstValue, secondValue)
            break;

        default:
            result = 'NA'
            break;
    }

    if (result) {
        if ((typeof result) === 'number')
            document.getElementById('spanResult').innerText = result.toString()
        else
            document.getElementById('spanResult').innerText = result
    }

}