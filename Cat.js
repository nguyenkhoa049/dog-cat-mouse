function cat () {
	this.stomach = [];
}
cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	// body... 
};
module.export = cat;