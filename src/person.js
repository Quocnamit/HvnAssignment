var Person = function (){
	var gender, firstName, lastName;
	
	this.setFirstName = function(newFirstName){
		firstName = newFirstName;
	};

	this.getFirstName = function(){
		return firstName;
	};

	this.setLastName = function(newLastName){
		lastName = newLastName;
	};

	this.getLastName = function(){
		return lastName;
	};

	this.setGender = function(newGender){
		gender = newGender.toLowerCase();
	};

	this.getGender = function(){
		return gender || 'male';
	};

	this.getFullName = function () {
		return (gender.toLowerCase() === 'male' ? 'Mr' : "Ms") + '.' + firstName + lastName;
	};
};
