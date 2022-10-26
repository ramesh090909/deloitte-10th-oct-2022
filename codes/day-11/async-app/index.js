function add(a, b) {
    return a + b
}

function divide(a, b) {
    var result = a / b
    if (result === Infinity) {
        //manually creating an error object to inform user that you are trying to divide 'a' by 'b', where 'b' is equal to zero
        var infinityError = new Error('can not divide by zero')
        //in order to return an error object (rather than any proper output), we use throw keyword
        throw infinityError
    }
    return result
}

//synchronous operation: the methods are executed in sequence (in the order they have been called)
var divRes = divide(12, 3)
console.log(divRes)

var addRes = add(10, 2)
console.log(addRes)

// fn()
// var fn = function () {
//     console.log('hello')
// }