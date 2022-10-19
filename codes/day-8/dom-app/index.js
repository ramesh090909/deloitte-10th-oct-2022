var message = 'welcome to DOM'

//HTML document itself that is being displayed in the browser window (represented by window object)
var spanElement = document.getElementById('spMessage')

//HTML parser will NOT interpret the HTML markups in the string and generate the design. It will consider the entire value as string and display as it is

//spanElement.innerText = '<b>' + message + '</b>'

//HTML parser will interpret the HTML markups in the string and generate the design
spanElement.innerHTML = '<b>' + message + '</b>'

//creating HTML DOM elements dynamically 
var divElement = document.createElement('div')
divElement.setAttribute('id', 'divMessage')
divElement.setAttribute(
    'style',
    'background-color:lime;font-family:Segoe UI')
//divElement.innerHTML = '<i>' + message + '</i>'

var italicsElement = document.createElement('i')
italicsElement.innerText = message

divElement.appendChild(italicsElement)

var lineBreakElement = document.createElement('br')
document.body.appendChild(lineBreakElement)
document.body.appendChild(divElement)


function buttonClicked(val) {
    window.alert(val)
}

function changeBackColor(control) {
    control.style.backgroundColor = 'grey'
    // control.style.append('background-color', 'grey')
}

//<tag onx="changeFont(btnY)">
function changeFont(control) {
    control.style.fontSize = 'large'
}