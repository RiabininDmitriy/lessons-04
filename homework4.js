function Bag(params) {
    this.name = "Bag"
}
Bag.prototype.addToBag = function (key) {
    this[key] = key
}
Bag.prototype.removeFromBag = function (key) {
    delete this[key]
}
var content = new Bag()
content.addToBag("koshelek")
console.log(content)
content.addToBag("noski")
console.log(content)
content.removeFromBag ("noski")
console.log(content)
