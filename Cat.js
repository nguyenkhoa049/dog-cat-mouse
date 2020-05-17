function Cat () {
	this.stomach = [];
}
Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	// body... 
};
module.exports = Cat;