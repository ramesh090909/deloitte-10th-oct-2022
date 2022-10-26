function testAsync() {
    var p = new Promise(
        //executor function: anonymous inline function
        //when Promise calls your callback function, it passes two functions as callback to your function (executor function): resolve function and reject function
        function (resolveFn, rejectFn) {
            var messageToPrint = 'printing hello asynchronously'
            resolveFn(messageToPrint)
        }
    )
    return p
}

var pObj = testAsync()
pObj.then(
    //resolved
    function (output) {
        console.log(output)
    },
    //rejected
    function (e) {
        console.log(e)
    }
)

function testSync() {
    console.log('printing hi synchronously')
}
testSync()