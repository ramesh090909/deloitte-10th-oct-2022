function first() {
    var p = new Promise(
        function (resolve, reject) {
            var p1 = new Promise(
                function (r1, r2) {
                    r1('second resolved')
                }
            )
            resolve(p1)
            //return p1
        }
    )
    return p
}

first()
    .then(
        function (res) {
            res.then(
                function (out) {
                    console.log(out)
                },
                function (e) {
                    console.log(e)
                }
            )
        },
        function (err) {
            console.log(err)
        }
    )