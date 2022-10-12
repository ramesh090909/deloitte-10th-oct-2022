//var btnObj = document.getElementById('btnSubmit')

function validate() {
    // var valid = true
    // valid = validateUserName()
    // valid = valid && validatePassword()
    //if(valid)
    if (validateUserName() && validatePassword()) {
        document.getElementById('btnSubmit').disabled = false
    }
}

function validateUserName() {
    var userNameSpan = document.getElementById('spanUserName')
    var userNameTextBox = document.getElementById('txtUserName')

    var isUserNameValid = false
    if (userNameTextBox.value !== '') {
        isUserNameValid = true
        userNameSpan.innerText = ""
    } else {
        userNameTextBox.focus()
        userNameSpan.innerText = "Please enter User Name"
    }
    return isUserNameValid
}

function validatePassword() {
    var passwordSpan = document.getElementById('spanPassword')
    var passwordTextBox = document.getElementById('txtPassword')

    var isPasswordValid = false
    if (passwordTextBox.value !== '') {
        isPasswordValid = true
        passwordSpan.innerText = ""
    } else {
        passwordTextBox.focus()
        passwordSpan.innerText = "Please enter Password"
    }
    return isPasswordValid
}

function clearUserName() {
    var userNameSpan = document.getElementById('spanUserName')
    userNameSpan.innerText = ""
}
function clearPassword() {
    var passwordSpan = document.getElementById('spanPassword')
    passwordSpan.innerText = ""
}

/*
var a = 10
//post
console.log(a++)//10 (11)
console.log(a--)//11 (10)

//pre
console.log(++a) //11
console.log(--a)//10
*/