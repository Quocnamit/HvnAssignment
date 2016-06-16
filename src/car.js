var Car = function(maxPassengers){
	this.passengers = [];
	
	this.addPassenger(Person){
		if()
	}
	
	this.getNumberOfPassenger(){
		return passengers.length;
	}

	this.getNumberOfMen(){
		var men = 0;
		for (var i = 0; i < passengers.length; i++) {
			if(passengers[i].getGender() === 'male'){
				men++;
			}
		}
		return men;
	}
}