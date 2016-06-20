var Girl = function (){
	this.createGirl = function(options) {
		if(options.girlType === 'normal'){
			return new GymPerson(options.firstName);
		} else if (options.girlType === 'smart'){
			return new Student(options.firstName, options.subject);
		}	
	}
}
