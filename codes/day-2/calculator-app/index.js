var btnObj = document.getElementById('btnAdd')
btnObj.addEventListener('click', addValues)

function addValues() {
    var firstTxtObj = document.getElementById('txtFirst')
    var secondTxtObj = document.getElementById('txtSecond')

    var firstNumber = Number(firstTxtObj.value)
    var secondNumber = Number(secondTxtObj.value)

    var result = firstNumber + secondNumber

    var spanObj = document.getElementById('spanResult')
    //spanObj.innerText = result.toString()
    spanObj.innerHTML = '<b>' + result.toString() + '</b>'
}