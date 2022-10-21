//filtration function
function filterValues(arr, fnAddress) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        var isTrue = fnAddress(arr[i])
        if (isTrue) {
            result.push(arr[i])
        }
    }
    return result
}

//source of data
var numbers = [1, 3, 2, 5, 6, 4, 9, 7, 0, 8]
//callback
var isEven = function (a) {
    return a % 2 === 0
}

filterValues(numbers, isEven)

var names = ['maanasa', 'fatima', 'sHravanthi']
var doesNameHasH = function (anyName) {
    //sHravanthi=>shravanthi
    return anyName.toLocaleLowerCase().indexOf('h') !== -1
}
//var filteredNames = filterValues(names, doesNameHasH)
var filteredNames = names.filter(doesNameHasH)
console.log(filteredNames)



