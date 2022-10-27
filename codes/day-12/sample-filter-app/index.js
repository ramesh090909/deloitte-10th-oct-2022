var arr = [{
    name: 'anil',
    id: 1
}, {
    name: 'sunil',
    id: 2
}, {
    name: 'mahesh',
    id: 3
}]

function generateRows(tbody) {
    var nameTd = document.createElement('td')
    nameTd.innerText = personObj.name

    var idTd = document.createElement('td')
    idTd.innerText = personObj.id.toString()

    var row = document.createElement('tr')
    row.append(nameTd, idTd)

    tbody.appendChild(row)
}
function loadData() {

    var tbody = document.getElementById('tblBody')
    arr.forEach(
        function (personObj) {
            generateRows(tbody)
        }
    )
}

function filterData() {
    var filteredArray = arr.filter(
        function (personObj) {
            return personObj.id > 1
        }
    )
    var tbody = document.getElementById('tblBody')

    //clear (remove) the existing rows
    //code

    //recreate the rows (based on filtered array)
    filteredArray.forEach(
        function (personObj) {
            generateRows(tbody)
        }
    )

}

