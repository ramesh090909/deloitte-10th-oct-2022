//source of data
var names = ['pavan', 'bharath', 'ramesh', 'fatima', 'maanasa', 'shravanthi', 'isha', 'sangeeta', 'ruchika']

function loadData() {

    //creating unordered list dynamically
    var nameList = document.createElement('ul')

    //setting list item display style
    nameList.setAttribute('style', 'list-style-type:circle;font-size:medium;font-family:consolas')

    //creating and appending a header in the body
    var h2Element = document.createElement('h2')
    h2Element.innerText = 'List of Trainees'
    document.body.appendChild(h2Element)

    //creating and appending a horizontal line
    document.body.appendChild(document.createElement('hr'))

    //loading names in the list
    for (var name of names) {

        //creating list items dynamically to be added in the unordered list element
        var listItemElement = document.createElement('li')

        //value to be displayed in the list item
        listItemElement.innerHTML = '<i>' + name + '</i>'

        //appending the listitem in the list element
        nameList.appendChild(listItemElement)
    }

    //appending the list element in the document body
    document.body.appendChild(nameList)
}

loadData()