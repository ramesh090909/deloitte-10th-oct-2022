//2. constructor function syntax
function person(pName, pId, pSalary) {
    // console.log(arguments)
    // var x = 100

    //these data will be stored in the newly created object (thanks to new keyword)
    this.name = pName
    this.id = pId
    this.salary = pSalary
    this.printInfo = function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

//for global function, object data is stored in
//a. browser: window
//b. node js: global
//this.abcd

//the new keyword creates a new instance/object which will be used by person() function to store object specific data (considering you have used this keyword inside the person() function to access that same object and used some properties to save the argument values). The new keyword returns the reference of the newly created object
var anilObj = new person('anil', 1, 1000)
var sunilObj = new person('sunil', 2, 2000)

console.log(sunilObj.name)
console.log(sunilObj['salary'])
console.log(sunilObj.printInfo())

for (var propName in sunilObj) {
    var propValue = sunilObj[propName]
    console.log(propName + ':' + propValue)
}
//can't use for...of loop to iterate through property values of the objects, since the object is not marked as iterable


// var obj1 = {
//     propname1: value1,
//     propname2: value2,
//     fp1: function () {

//     }
// }
// var obj2 = {
//     propname1: value1,
//     propname2: value2,
//     fp1: function () {

//     }
// }

function objfn(val1, val2) {
    this.propname1 = val1;
    this.propname2 = val2;
    this.fp1 = function () {
        return this.propname1 + ' ' + this.propname2
    }
}


var obj1 = new objfn('propVal1', 'propVal2')
var obj2 = new objfn('propVal3', 'propVal4')

//var objects = [obj1, obj2]
var objects = []
objects.push(obj1, obj2)

for (var i = 0; i < objects.length; i++) {
    var o = objects[i]
}
for (var o of objects) {

}

var a = 10
var b = 20
add(a, b)

var x = 10
var y = 20
add(x, y)

function add(first, second) {
    var res = first + second
    //this.res = first + second
    console.log(res)
}


