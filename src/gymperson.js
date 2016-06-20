var GymPerson = function (firstname){
	this.firstName = firstname;
};

GymPerson.prototype.smile = function(){
	console.log("Hehehe!");
};

GymPerson.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName);
};