function func1(fn) {
    console.log('func1 called...going to call func2 from here')
    fn()
}

//this is a callback function, which will be passed to func1 function as an argument and func1 will call this (func2) function back
function func2() {
    console.log('func2 called')
}

func1(func2)

var numbers = [1, 3, 2, 5, 6, 4, 9, 7, 0, 8]
var compare = function (a, b) {
    return a - b
}
numbers.sort(compare)
console.log(numbers)

var evenLogic = function (num) {
    return num % 2 === 0
}
var evenNumbers = numbers.filter(evenLogic)
console.log(evenNumbers)

var findIndexOfFour = function (num) {
    return num === 4
}
var indexOfFour = numbers.findIndex(findIndexOfFour)
console.log('after sorting index of 4 is ' + indexOfFour)

var multiplyByFive = function (num) {
    //transfomation logic
    return "Result: " + (num * 5)
}
var multiResultArray = numbers.map(multiplyByFive)
console.log(multiResultArray)

/*
var foundIndex = findIndexofValue(findIndexOfFour)
console.log(foundIndex)

function findIndexofValue(findLogicFn) {
    var valueIndex = -1
    for (var x = 0; x < numbers.length; x++) {
        var element = numbers[x]
        var isPresent = findLogicFn(element)
        if (isPresent) {
            valueIndex = x;
            break;
        }
    }
    return valueIndex
}
*/