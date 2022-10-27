function call() {
    alert('hello')
}
function getData() {
    var requestObject = new XMLHttpRequest()
    console.log(requestObject.readyState)
    requestObject.onreadystatechange = function () {
        if (requestObject.readyState === 4 && requestObject.status === 200) {
            var jsonData = requestObject.responseText
            var todoData = (JSON.parse(jsonData)).slice(0, 10)
            localStorage.setItem('todos', JSON.stringify(todoData))
        }
    }
    requestObject.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    requestObject.send()
}
function fetchAndSaveData() {
    var todosPromise = fetch('https://jsonplaceholder.typicode.com/todos')
    todosPromise.then(
        function (httpResponse) {
            var dataPromise = httpResponse.json()
            dataPromise.then(
                function (todoData) {
                    localStorage.setItem('todos', JSON.stringify(todoData.slice(0, 10)))
                },
                function (e) {
                    console.log(e.message)
                }
            )
        },
        function (err) {
            console.log(err.message)
        }
    )
}

function createRow(todoList) {

    if (todoList.length > 0) {
        var tbody = document.getElementById('tableBody')
        for (var todo of todoList) {
            var tr = document.createElement('tr')

            var tdTitle = document.createElement('td')
            tdTitle.innerText = todo.title

            var tdCompleted = document.createElement('td')
            tdCompleted.innerText = todo.completed ? 'Yes' : 'No'

            tr.append(tdTitle, tdCompleted)
            tbody.appendChild(tr)
        }
    }
}
function loadAndShowData() {
    //check if localstorage has any todo data
    var todos = localStorage.getItem('todos')

    //if the data is NOT there, fetch the data, save it in localstorage, fetch it from localstorage again and convert back to JS array
    if (!todos) {
        //fetchAndSaveData()
        getData()
    }

    //based on the number of records generate rows dynamically and append them in the tbody element
    var todoList = JSON.parse(todos)
    createRow(todoList)
}