function call() {
    alert('called')
}

//function declaration
function add(a, b) {
    var res = a + b
    return res
}

//function expression
var subtract = function (a, b) {
    console.log(a - b)
}

var addRes = add(10, 20)
console.log(addRes)

subtract(10, 2)

var x = 10
var y = 12.34
var name = 'JavaScript'
var isTrue = false
var anilObj = {
    //value properties
    personName: 'anil',
    id: 1,
    salary: 1000,
    //functional property
    //the function is an anonymous, inline function
    printInfo: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

console.log(typeof x)
console.log(typeof y)
console.log(typeof name)
console.log(typeof isTrue)
console.log(typeof anilObj)