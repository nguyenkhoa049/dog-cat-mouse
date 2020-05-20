var chalk = require('chalk');
function Dog (name) {
	this.name = name;
	this.stomch = [];
}
Dog.prototype.eat = function(cat){
	this.stomch.push(cat)
};
Dog.prototype.sayHi = function(){
	console.log('Hi, Dog name is: '+ chalk.blue(this.name));
};
module.exports = Dog;