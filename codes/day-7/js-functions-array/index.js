//function main(){

//function(argument-list){ //code }
//1. function declaration:

//function call
add(10, 20) //<-- ignored during preparation phase

//function DECLARATION //<-- accepted [registered] during preparation phase
function add(a, b) {
    console.log(a + b)
}

//function call //<-- ignored during preparation phase
add(10, 20)

//variable DECLARATION //<-- accepted [registered] during preparation phase
var subRes

//function call and variable assignment <-- ignored during preparation phase
subRes = subtract(10, 4)

//function call <-- ignored during preparation phase
console.log(subRes)

//function DECLARATION <-- accepted [registered] during preparation phase
function subtract(a, b) {
    return a - b
}

//variable DECLARATION <-- accepted [registered] during preparation phase
var subResAgain

//function call and variable assignment <-- ignored during preparation phase
subResAgain = subtract(10, 2)

//function call  <-- ignored during preparation phase
console.log(subResAgain)

// var multiRes
// multiRes = multiply(10, 2)
// console.log(multiRes)

//2. function expression
//var func-var-name = function(){} <-- inline anonymous function

//variable DECLARATION  <-- accepted [registered] during preparation phase
var multiply

//variable assignment (with an address of a function) <-- ignored during preparation phase
multiply = function (a, b) {
    //console.log(a * b)
    var r = a * b
    return r
}

//variable DECLARATION <-- accepted [registered] during preparation phase
var multiRes

//function call and variable assignment <-- ignored during preparation phase
multiRes = multiply(10, 2)

//function call  <-- ignored during preparation phase
console.log(multiRes)

//function call  <-- ignored during preparation phase
console.log(first) //undefined

//variable DECLARATIONS  <-- accepted [registered] during preparation phase
var first

//variable assignment (with a value) <-- ignored during preparation phase
first = 10

//function call <-- ignored during preparation phase
console.log(first) //10 =>10

//for loop is used to execute same code over and over again until and unless a condition is satisfied
//for(controller-var-initialization;condition;increment/decrement-of-controller-variable){//code}
//var x <-- accepted but x=0, x<1, x++ are ignored
for (var x = 0; x < 1; x++) {
    //variable DECLARATION  <-- accepted [registered] during preparation phase, but since there is already a variable registered with the same name, this is no more registered
    var first

    //variable assignment <-- ignored during preparation phase
    first = 20

    //function call <-- ignored during preparation phase
    console.log(first) //20 => 20
}

//function call <-- ignored during preparation phase
console.log(first) //20

//}
//main()