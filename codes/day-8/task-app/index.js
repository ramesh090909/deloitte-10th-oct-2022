//creating an array with values (numbers)
//var numbers = [1, 3, 2, 5, 4, 7, 0, 6, 9, 8]
var numbers = []

function addValueInArray() {
    var txtBox = document.getElementById('txtValue')
    var value = Number(txtBox.value)
    numbers.push(value)

    var option = document.createElement('option')
    option.text = value.toString();

    var selectElement = document.getElementById('ddlValues')
    selectElement.appendChild(option)
}

function sortNumbers() {
    if (numbers.length > 0) {
        //calling sortValues() and passing the array as an argument
        sortValues(numbers)
        console.log(numbers)

        var selectElement = document.getElementById('ddlValues')
        var allOptions = selectElement.options
        console.log(allOptions)
        for (var i = 0; i < numbers.length; i++) {
            var currentArrayValue = numbers[i]
            var currentOption = allOptions[i + 1]
            currentOption.text = currentArrayValue
        }
    }
}


/*
//calling printValues() and passing the array as an argument
console.log('after sorting')
printValues(numbers)

//calling the filterValues() function and passing the array as an argument and storing the returned array in a variable
var filteredNumbers = filterValues(numbers)

//calling printValues() and passing the array as an argument
console.log('after filtering event numbers')
printValues(filteredNumbers)
*/