function saveData() {
    if (sessionStorage.getItem('mydata')) {
        alert('present')
    } else {
        alert('absent')
        sessionStorage.setItem('mydata', 'some data')
    }
}