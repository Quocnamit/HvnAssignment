var Car = function(maxPassengers){
	passengers = [];
	noOfMaxPassengers = maxPassengers;
		
	this.addPassenger = function(person){
		if(passengers.length < noOfMaxPassengers){
			passengers.push(person);
		} else {
			throw new Error("Over max number of passengers");
		}
	}

	this.getNumberOfPassenger = function(){
		return passengers.length;
	}

	this.getNumberOfMen = function(){
		var men = 0;
		for (var i = 0; i < passengers.length; i++) {
			if(passengers[i].getGender() === 'male'){
				men++;
			}
		}
		return men;
	}
}