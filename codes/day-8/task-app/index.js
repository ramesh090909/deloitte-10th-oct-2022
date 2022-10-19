//creating an array with values (numbers)
var numbers = [1, 3, 2, 5, 4, 7, 0, 6, 9, 8]

//calling sortValues() and passing the array as an argument
sortValues(numbers)

//calling printValues() and passing the array as an argument
console.log('after sorting')
printValues(numbers)

//calling the filterValues() function and passing the array as an argument and storing the returned array in a variable
var filteredNumbers = filterValues(numbers)

//calling printValues() and passing the array as an argument
console.log('after filtering event numbers')
printValues(filteredNumbers)
