var Student = function (firstname, subject){
	GymPerson.call(this, firstname);
	this.subject = subject;
}

Student.prototype = Object.create(GymPerson.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject);
};

Student.prototype.tellTheTruth = function(){
	console.log("I hate this " + this.subject);
};