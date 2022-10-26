var url = 'https://jsonplaceholder.typicode.com/posts'

function fetchData() {
    //fetch() is an API from browser library
    //is used to fetch data given an URL
    //it is asynchronous and returns a promise
    setTimeout(
        () => {
            var dataPromise = fetch(url)
            dataPromise.then(
                function (respFromUrl) {
                    console.log(respFromUrl)
                },
                function (err) {
                    console.log(err.message)
                }
            )
        },
        2000
    )

}

function callMe() {
    console.log('hello....')
}
