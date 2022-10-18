//var obj
var obj = {
    name: 'joy',
    id: 1,
    salary: 1000,
    print: function () {
        //this keyword refers to the current object/instance
        var info = this.name + ', ' + this.id + ', ' + this.salary
        return info
    }
}

console.log(obj.name) //using .(dot) operator
console.log(obj['salary']) //using indexer []

//array
//var arr = [1, 2, 5, 3, 4]
var arr = new Array(1, 2, 5, 3, 4)
console.log(typeof arr)
//indeximg starts from 0
console.log(arr[2]) //arr[index]

//add new value(s) in an array
arr.push(10, 20, 30)
arr.push(40)
/*
//new keword creates a blanl object and then calling the Array(values) stores the values in that newly created object along with index numbers
//{ index: value}
var arr = {
    //index-no: value
    0: 1,
    1: 2,
    2: 5,
    3: 3,
    4: 4,
    5: 10,
    6: 20,
    7: 30,
    8: 40
}
*/

//slice method makes a copy of the values specified between the start and end index (starting with the value at start index and till the value just before the end index)
//slice just makes copy of the values, doesn't mutate (alter/change) the original array
//the method returns an array containg the copied values

//arr.slice(start-index-num, end-index-num)
// var partialValues = arr.slice(3, 5)
// console.log(arr)
// console.log(partialValues)

//splice deletes the values from the original (that means, this method mutates the original array)
//splice(start-index, number-of-values-to-delete)
//the method returns you an array of deleted values (from the original array)
// var deletedValues = arr.splice(7, 2)
// console.log(arr)
// console.log(deletedValues)

//also you can use the splice method to replace values
//splice(start-index,number-of-values-to-replace,values-as-replacement)
// var deletedValues = arr.splice(7, 2, 300, 400)
// console.log(arr)
// console.log(deletedValues)

//arr.splice(5, 1)

// var m = arr[0]
// var n = arr[3]
// var p = arr[8]

//coying array elements: destructuring
//does not mutate the original array

//  [0,         1,2,3,          4,5, 6,7,8]
var [m, , , n, , , , , p] = arr
console.log(m, n, p)

var [, secondValue, thirdValue] = arr
console.log(secondValue, thirdValue)

