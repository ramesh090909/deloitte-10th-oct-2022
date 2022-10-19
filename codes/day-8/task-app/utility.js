function sortValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var current = arr[i]
            var next = arr[j]

            if (current > next) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
}
function filterValues(arr) {
    var result = []

    for (var index = 0; index < arr.length; index++) {
        var currentValue = arr[index]
        if (currentValue % 2 === 0) {
            result.push(currentValue)
        }
    }

    return result
}
function printValues(arr) {
    for (var a = 0; a < arr.length; a++) {
        console.log(arr[a])
    }
}