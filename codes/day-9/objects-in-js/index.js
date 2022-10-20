//2015 (ES6) introduced this technique (class, constructor keywords etc.)
class Person {

    //special method inside the class, whose job is to assign value to the value properties of the class
    constructor(pName, pId, pSalary) {
        this.name = pName
        this.id = pId
        this.salary = pSalary
        //this.printInfo = function () { }
    }

    //method of the class (functiona property)
    printInfo() {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
var anilObj = new Person('anil', 1, 1000)
var sunilObj = new Person('sunil', 2, 2000)

console.log(anilObj.printInfo())
console.log(sunilObj.printInfo())

//parent or base class
class Car {
    constructor(chasis, color, ac) {
        this.chasisNo = chasis;
        this.bodyColor = color;
        this.hasAc = ac;
    }
    start() {

    }
    stop() {

    }
    accelerate() {

    }
    putBreak() {

    }
}
//derived or child class
class Hyundai extends Car {
    constructor(chasis, color, ac, ssButton, roof) {
        super(chasis, color, ac)
        this.startStopButton = ssButton
        this.sunMonnRoof = roof
    }
    startTurboEngine() {

    }
}

class Kia extends Car {
    constructor() {

    }
}
var hyundaiCreta = new Hyundai('abce1234', 'blue', true, true, true)

class Employee {
    constructor(name, id, sal) {
        this.name = name
        this.id = id
        this.salary = sal
    }
    getInfo() {

    }
}
class Developer extends Employee {
    constructor(name, id, sal, proj) {
        super(name, id, sal)
        this.project = proj
    }
    doProject() {

    }
}
class Hr extends Employee {
    constructor(name, id, sal, task) {
        super(name, id, sal)
        this.task = task
    }
    joinEmployee() {

    }
}

var d = new Developer()
var hr = new Hr()
