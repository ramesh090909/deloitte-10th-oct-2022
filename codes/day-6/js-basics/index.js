function radioSelected(choice) {
    switch (choice) {
        case 1:
            console.log('sorting by name')
            break;

        case 2:
            console.log('sorting by id')
            break;

        case 3:
            console.log('sorting by dept')
            break;

        case 4:
            console.log('sorting by project')
            break;

        case 5:
            console.log('sorting by team')
            break;

        default:
            console.log('please make a proper choice')
            break;
    }
}

var a = 10
var b = 20
var c = 30

if (a > b && a > c) {
    console.log('a is greatest')
} else if (b > c) {
    console.log('b is greatest')
} else
    console.log('c is greatest')