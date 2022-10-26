class Product {
    constructor(id, name, code, releasedOn, description, price, rating, imagePath) {
        this.productId = id
        this.productName = name
        this.productCode = code
        this.description = description
        this.releaseDate = releasedOn
        this.imageUrl = imagePath
        this.price = price
        this.starRating = rating
    }
    getInfo() {
        return this.productName + ', ' + this.price + ', ' + this.description + ', ' + this.starRating
    }
}
//sessionstorage and localstorage
var valueExists = sessionStorage.getItem('classroom-no')
if (!valueExists) {
    sessionStorage.setItem('classroom-no', 'T2-10f-tr03')
} else {
    console.log('already exists')
}
sessionStorage.setItem('my-data-first', 'Mohit')
sessionStorage.setItem('my-data-second', 'Joydip Mondal')

var leafRake = new Product(1, "Leaf Rake", "GDN-0011", "March 19, 2016", "Leaf rake with 48-inch wooden handle.", 19.95, 2, "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png")
var gardenCart = new Product(2, "Garden Cart", "GDN-0023", "March 18, 2019", "15 gallon capacity rolling garden cart", 50, 4, "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png")
var hammer = new Product(3, "Hammer", "TBX-0048", "May 21, 2016", "Curved claw steel hammer", 8.9, 2, "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png")
var saw = new Product(4, "Saw", "TBX-0022", "May 15, 2016", "15-inch steel blade hand saw", 11.55, 3.7, "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png")
var videoGameController = new Product(5, "Video Game Controller", "GMG-0042", "October 15, 2015", "Standard two-button video game controller", 67, 4, "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png")

localStorage.setItem('products', JSON.stringify([leafRake, gardenCart, hammer, saw, videoGameController]))
/**
 * [{"productId":1,"productName":"Leaf Rake","productCode":"GDN-0011","description":"Leaf rake with 48-inch wooden handle.","releaseDate":"March 19, 2016","imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png","price":19.95,"starRating":2},{"productId":2,"productName":"Garden Cart","productCode":"GDN-0023","description":"15 gallon capacity rolling garden cart","releaseDate":"March 18, 2019","imageUrl":"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png","price":50,"starRating":4},{"productId":3,"productName":"Hammer","productCode":"TBX-0048","description":"Curved claw steel hammer","releaseDate":"May 21, 2016","imageUrl":"http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png","price":8.9,"starRating":2},{"productId":4,"productName":"Saw","productCode":"TBX-0022","description":"15-inch steel blade hand saw","releaseDate":"May 15, 2016","imageUrl":"http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png","price":11.55,"starRating":3.7},{"productId":5,"productName":"Video Game Controller","productCode":"GMG-0042","description":"Standard two-button video game controller","releaseDate":"October 15, 2015","imageUrl":"http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png","price":67,"starRating":4}]
 */

//JSON: JavaScript Object Notation
//a textual format to represent data (not any functionality)
//JS object can have value and functional properties
//But JSON format object can have only value properties, where property names must be mentioned in double quotes ( as string) and any value in string format also must be mentioned within double quotes. JSON is all about representing information, NOT functionality

//JS object
var anilObj = {
    name: 'anil',
    id: 1,
    salary: 1000
}
console.log(anilObj)
//converts JS data to JSON object format
var jsonData = JSON.stringify(anilObj)
console.log(jsonData)
//converts JSON data into JS
var jsObj = JSON.parse(jsonData)
console.log(jsObj)

var x = 10; //{ x: 10 }
console.log(JSON.stringify(x))
//{ "x": 10 }

//JSON object
var sunilObj = {
    "name": "sunil",
    "id": 2,
    "salary": 2000
}


var allFlightData = [{
    "flightName": "Indigo",
    "flightId": "6E5036",
    "departureTime": "02:25pm",
    "arrivaleTime": "06:15pm",
    "price": 6210
}, {
    "flightName": "Indigo",
    "flightId": "6E6257",
    "departureTime": "05:25pm",
    "arrivaleTime": "09:15pm",
    "price": 7790
}]

//JSON format data types
//string, boolean, number, object, array
var joydipObject = {
    "name": "Joydip",
    "experience": 18.5,
    "isConsultant": true,
    "subjects": ["JS", "HTML", "CSS", "jQuery"],
    "currentTrainingDetails": {
        "company": "Deloitte",
        "start": "10thOct",
        "end": "8thNov"
    }
}

