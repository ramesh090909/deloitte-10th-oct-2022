/*
function sortValues(arr, logicFn, choice) {
    debugger
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            switch (choice) {
                case 1:
                    var comparisonValue = logicFn(arr[i], arr[j])
                    if (comparisonValue > 0) {
                        var temp = arr[i]
                        arr[i] = arr[j]
                        arr[j] = temp
                    }
                    break;

                case 2:
                    var comparisonValue = logicFn(arr[i], arr[j])
                    if (comparisonValue < 0) {
                        var temp = arr[i]
                        arr[i] = arr[j]
                        arr[j] = temp
                    }
                    break;

                default:
                    break;
            }

        }
    }
}
debugger

var numbers = [1, 3, 2, 5, 6, 4, 9, 7, 0, 8]
var ascendingCompare = function (a, b) {
    return a - b
}
sortValues(numbers, ascendingCompare, 2)
console.log(numbers)

var descendingCompare = function (a, b) {
    return b > a
}

// sortValues(numbers, descendingCompare)
// console.log(numbers)
*/

var numbers = [1, 3, 2, 5, 6, 4, 9, 7, 0, 8]
function filterValues(arr, fnAddress) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        var isTrue = fnAddress(arr[i])
        //if (arr[i] % 2 === 0) {
        if (isTrue) {
            result.push(arr[i])
        }
    }
    return result
}


function isEven(num) {
    return num % 2 === 0
    //return num % 2 === 0 ? true : false;
    // if (num % 2 === 0)
    //     return true
    // else
    //     return false
}
var evenNumbers = filterValues(numbers, isEven)
console.log(evenNumbers)

var isOdd = function (num) {
    return num % 2 !== 0
}
var oddNumbers = filterValues(numbers, isOdd)
console.log(oddNumbers)

var isNumberGreaterThanFive = function (num) {
    return num > 5
}
var greaterThanFiveNumbers = filterValues(numbers, isNumberGreaterThanFive)
console.log(isNumberGreaterThanFive)
