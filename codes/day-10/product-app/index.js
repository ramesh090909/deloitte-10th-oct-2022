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
var leafRake = new Product(1, "Leaf Rake", "GDN-0011", "March 19, 2016", "Leaf rake with 48-inch wooden handle.", 19.95, 2, "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png")
var gardenCart = new Product(2, "Garden Cart", "GDN-0023", "March 18, 2019", "15 gallon capacity rolling garden cart", 50, 4, "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png")
var hammer = new Product(3, "Hammer", "TBX-0048", "May 21, 2016", "Curved claw steel hammer", 8.9, 2, "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png")
var saw = new Product(4, "Saw", "TBX-0022", "May 15, 2016", "15-inch steel blade hand saw", 11.55, 3.7, "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png")
var videoGameController = new Product(5, "Video Game Controller", "GMG-0042", "October 15, 2015", "Standard two-button video game controller", 67, 4, "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png")

var products = [leafRake, gardenCart, hammer, saw, videoGameController]

function sortPrducts() {

}
function filterProductsByPrice(price) {

}