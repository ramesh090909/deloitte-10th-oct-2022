//1. object literal syntax
var anilObj = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,
    //functional properties (methods)
    printInfo: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

//access value property
//. opertaor
console.log(anilObj.name)
//indexer
console.log(anilObj['salary'])

//access functional property
//. operator
var info = anilObj.printInfo()
console.log(info)
