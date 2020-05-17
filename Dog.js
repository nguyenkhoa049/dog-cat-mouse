function Dog () {
	this.stomch = [];
}
Dog.prototype.eat = function(cat){
	this.stomch.push(cat)
};