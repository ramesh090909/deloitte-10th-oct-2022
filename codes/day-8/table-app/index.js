var employees = [
    {
        id: 1,
        name: 'anil',
        department: 'TRG',
        project: 'CITA',
        location: 'Bangalore'
    },
    {
        id: 2,
        name: 'sunil',
        department: 'ORCHARD',
        project: 'SAT',
        location: 'Hyderabad'
    },
    {
        id: 3,
        name: 'ramesh',
        department: 'EDU',
        project: 'DTL',
        location: 'Chennai'
    }
]

var tableBodyElement = document.getElementById('tblBody')

function createTableDataElement(propValue) {
    var newTd = document.createElement('td')
    newTd.innerText = propValue
    return newTd
}

for (var i = 0; i < employees.length; i++) {
    var currentEmployee = employees[i]

    var newRow = document.createElement('tr')

    var nameTd = createTableDataElement(currentEmployee.name)
    var deptTd = createTableDataElement(currentEmployee.department)
    var locationTd = createTableDataElement(currentEmployee.location)
    var projecTd = createTableDataElement(currentEmployee.project)

    newRow.append(nameTd, deptTd, locationTd, projecTd)

    tableBodyElement.appendChild(newRow)
}

