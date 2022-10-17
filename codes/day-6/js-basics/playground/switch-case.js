// console.log('Welcome to Node JS')
// var x = 10
// x = 'Joydip'
// var expo = x.toExponential(2)
// console.log(expo)

//1, 2, 3, 4, 5
var choice = 6
// if (choice === 1) {
//     console.log('sorting by name')
// }
// if (choice === 2) {
//     console.log('sorting by id')
// }

//in the switch, pass the variable, whose value you would like to check against the other values
switch (choice) {
    //case possible-value:
    //     code to be executed
    //      break;
    case 1:
        console.log('sort by name')
        //break statement is used to come out of the swicth...case
        break;

    case 2:
        console.log('sort by id')
        //break statement is used to come out of the swicth...case
        break;

    case 3:
        console.log('sort by dept')
        //break statement is used to come out of the swicth...case
        break;

    case 4:
        console.log('sort by project')
        //break statement is used to come out of the swicth...case
        break;

    case 5:
        console.log('sort by team')
        //break statement is used to come out of the swicth...case
        break;

    //this is executed when the value of choice does not match to any case value
    default:
        console.log('enter proper choice')
        break;
}