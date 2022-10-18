//the following entire code is part of global function
//this global function is the 1st one to be executed by JS engine

//function call
console.log(x)

var x //variable declaration
x = 10 //variable assignment

//printing the value of x by calling log() function of console object
console.log(x)

//calling the function
sayHello()

//the following function has been written using function declaration technique
function sayHello() {
    var message
    message = 'hello everyone'
    console.log(message)
    //function log(arg){}
}
//calling the function
sayHello()

//the following function has been written using function expression technique

//sayHi() //<-- error (because this is undefined as of now)
//error message: sayHi is not a function

//a. declaring a variable to store reference to the function
var sayHi

//b. now, the function reference is assigned to the function
sayHi = function (welcomeMessage) {
    console.log(welcomeMessage)
}

//calling the function
sayHi('hi everyone')