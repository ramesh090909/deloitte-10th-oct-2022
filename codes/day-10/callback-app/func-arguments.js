function printInfo(data) {
    var dataType = typeof data
    console.log(dataType)
    if (dataType === 'function') {
        data()
    } else {
        console.log(data)
    }
}
var num = 100
printInfo(num)

var message = 'welcome to JS'
printInfo(message)

var obj = { name: 'anil', id: 1 }
printInfo(obj)

var arr = [1, 2]
printInfo(arr)

var isTrue = false
printInfo(isTrue)

//var test = function () { console.log('test') }
function test() {
    console.log('test')
}
printInfo(test)

