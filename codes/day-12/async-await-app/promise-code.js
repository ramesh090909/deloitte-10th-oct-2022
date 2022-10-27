function divide(a, b) {

    var p = new Promise(
        function (resolveFn, rejectFn) {
            var res = a / b
            if (res === Infinity) {
                //reject the promise here
                // var infinityError = new Error('can not divide by zero')
                // rejectFn(infinityError)
                rejectFn('can not divide by zero')
            }
            //resolve the promise here
            resolveFn(res)
        }
    )
    return p
}
function testAsync() {
    var p = new Promise(
        function (resolveFn, rejectFn) {
            setTimeout(
                () => {
                    resolveFn('testing async')
                },
                1000
            )
        }
    )
    return p
}
function add(a, b) {
    return (a + b)
}



var testPromise = testAsync()
testPromise.then(
    function (r) {
        console.log(r)
    },
    function (e) {
        console.log(e)
    }
)
var divPromise = divide(12, 0)
divPromise.then(
    function (output) {
        console.log(output)
    },
    function (e) {
        //console.log(e.message)
        console.log(e)
    }
)

var addRes = add(12, 3)
console.log('continuing execution further')
console.log(addRes)