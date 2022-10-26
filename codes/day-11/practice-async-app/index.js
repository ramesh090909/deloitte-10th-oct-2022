var pFetch = fetch('https://jsonplaceholder.typicode.com/todos')
pFetch
    .then(
        //called when the promise is resolved 
        //promise passes the complete response to the callback
        function (response) {
            //extract JSON data from the response body and convert the same to JavaScript object: use "json()" method of "Response" object
            var respPromise = response.json()
            respPromise.then(
                function (data) {
                    //copying only first ten todo objects from the array of 200
                    var copyTodos = data.slice(0, 10)
                    //converting them into JSON format once again
                    var jsonTodos = JSON.stringify(copyTodos)
                    //saving the data in JSON format in localstorage 
                    localStorage.setItem('todos', jsonTodos)
                },
                function (err) {
                    console.log(err)
                }
            )
        },
        //called when the promise is rejected
        //promise passes the complete error to the callback
        function (e) {
            console.log(e)
        }
    )