async function divide(a, b) {
    //this entire code wil be wrapped inside a promise object (i.e., the code will be put inside a function and that will be passed to Promise() as callback)
    var res = a / b
    if (res === Infinity) {
        var infinityError = new Error('can not divide by zero')
        throw infinityError
    }
    return res
}

function add(a, b) {
    return (a + b)
}

//IIFE: Immediately Invocable Function Expression
// (function () {
//     console.log('hello')
// })()
(async function () {
    try {
        //await keyword can be used ONLY within a function declared with async keyword
        var output = await divide(12, 0)
        console.log(output)
    } catch (e) {
        console.log(e.message)
    }
})()

async function callDivide() {
    try {
        //await keyword can be used ONLY within a function declared with async keyword
        var output = await divide(12, 0)
        console.log(output)
    } catch (e) {
        console.log(e.message)
    }
}
callDivide()
//var divPromise = divide(12, 0)
// divPromise.then(
//     function (output) {
//         console.log(output)
//     },
//     function (e) {
//         console.log(e.message)
//         //console.log(e)
//     }
// )

var addRes = add(12, 3)
console.log('continuing execution further')
console.log(addRes)