//JIT: Just-in-time
var btnObj = document.getElementById('btnClick')
//every HTNL element/tag is represented by an object in DOM
//those objects have a common method: addEventListener()
//pass the name of the event (As 1st argument) and the name of listener/event-handlre function as the 2nd argument
btnObj.addEventListener('click', call)

//alternate code
//pass the name of the listener function to the 'onclick' property of the button object
//btnObj.onclick = call

//this kind of function which called back later is known CALLBACK function

//listener or event handler function
function call() {
    //accessing DOM object (window object) from JS and calling its method alert()
    window.alert('called')
}

//function declaration
function add(a, b) {
    var res = a + b
    return res
}

//function expression
var subtract = function (a, b) {
    //accessing browser object (console object) from JS and calling its method log()
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