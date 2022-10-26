function add(a, b) {
    return a + b
}

function divide(a, b) {

    var p = new Promise(
        //executor function: the function promise object will execute
        function (resolveFn, rejectFn) {
            var res = a / b
            if (res === Infinity) {
                var infinityError = new Error('can not divide by zero')
                //rejectFn('can not divide by zero')
                rejectFn(infinityError)
            }
            resolveFn(res)
        }
    )

    return p
}

//Promise.resolve()
//Promise.reject(''/obj)

//asynchronous operation: the methods are NOT executed in sequence. You call a method and do not waiy for the execution to be over. After the method has ben called, we proceed to the next method call, without waiting for the response from the previous method call
var divPromise = divide(12, 3)
//console.log(divPromise)
divPromise.then(
    //this is called when promise is in resolved state
    function (output) {
        console.log(output)
    },
    //this is called when promise is in rejected state
    function (err) {
        console.log(err.message)
        //console.log(err)
    }
)

var addRes = add(10, 2)
console.log(addRes)