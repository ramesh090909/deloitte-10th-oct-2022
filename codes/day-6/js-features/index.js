//number, string, boolean, object, function
//var <name-of-variable> = <value>
//avoid the following while naming a variable
//first number (do not use space between the words)
//1stNumber (do not start with a digit)
//number1 (avoid using digits)
//_number1 (avoid using _)
//number (number is a data type, do not this as name of variable)

//follow camel casing style while giving the name (first letter of the firt word is in lowercase and first letter of subsequent words in uppercase)

var firstNumber = 12 //<-- number (non-fractional)
var secondNumber = 13.45 //<-- number (fractional)
var employeeName = 'Anil' //<-- string data type (written within '' or "")
var isCorrectAnswer = false //<-- boolean (true or false)

//obejct type: object is a real time entity, having properties/attributes or characterestics and functionalities
//car has chasis no, body color (paint), may have a/c, may have ambient lighting
//car can start, stop, break, accelerate

//an object is collection of property-name:property value
//name, id and salary are prperties
//Sunil,1 and 1000 are their values
//two types of properties: value properties and functional properties
var sunilObjectData = {
    //value properties
    name: 'Sunil',
    id: 1,
    salary: 1000,
    //functional property
    //property-name: inline, anonymous function
    print: function () {
        console.log('hello')
    }
}

//+, -, *, /, % <= arithmatic operator
// = <-- assignment operator
var result = firstNumber + secondNumber

//==, !=, !==, ===, >, <, >=, <= comparison operator
if (firstNumber > secondNumber) { }

//this is going to check whether the value of both firstNumber and secondNumber are same or not (equality)
if (firstNumber == secondNumber) { }

//this is going to check whether the both the value and data type of both firstNumber and secondNumber are same or not (strict equality)
if (firstNumber === secondNumber) { }

var a = 10
var b = 20
var c = 30

//&& (AND)
if (a > b && a > c) { }

//|| (OR)
if (a > b || a > c) { }

//typeof <var-name> => it tells you the type of data the variable contains (is assigned to)
console.log(typeof a) // output: number

var res = a + b * 3 - c / 4
//1. c/4 => 7.5, 2. b*3=>20*3=60, 3. a+(b*3)=>10+60=70, 4. [a+(b*3)]-(c/4)=>70-7.5=>62.5
console.log(res)

var another = a + b * 3 / 4
//1. 3/4 => 0.75, 2. b*(3/4)=> 20*0.75=15 3. a+[b*(3/4)]=>10+15 =25
console.log(another)

//undefined indicates that the variable has no value
var data
console.log(data)


//variables which can store direct value
//var a = 10
//var name='Joydip'
//var isTrue = false

//variables which can store adddress of object/function
//var sunilObjectData ={.......}
//var funcExp = function(){}


//the variable, is actually supposed to store something, but at the moment, it is not stored yet
var nullData = null
console.log(nullData)
nullData = 25
console.log(nullData)
//nullData = function () { }
//or
//nullData = {}