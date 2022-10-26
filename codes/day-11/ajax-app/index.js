function getData() {
    //AJAX: Asynchronous JavaScript (XMLHttpRequest) And XML
    //this XMLHttpRequest object  can be used to fetch data asynchronously

    var requestObject = new XMLHttpRequest()
    console.log(requestObject.readyState)
    requestObject.onreadystatechange = function () {
        //console.log(requestObject.readyState, requestObject.status);
        if (requestObject.readyState === 4 && requestObject.status === 200) {
            var jsonData = requestObject.responseText
            var jsData = JSON.parse(jsonData)
            console.log(jsData.slice(0, 10))
        }
    }
    requestObject.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    requestObject.send()
    //readyState property of XMLHttpRequest object
    //0 -> initial creation
    //1-> open for connection
    //2-> send the request and received by server
    //3-> processing the request
    //4-> request processing done and response generated

    //every time readyState value changes, an event of XMLHttpRequest object, known as readystatechange, gets fired (total 4 times)
}