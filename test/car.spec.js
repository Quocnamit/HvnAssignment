describe('Cars methods should be defined', function() {
	var car;

	beforeEach(function() {
		car = new Car(5);
	});

	it('addPassender method should be defined', function() {
		expect(car.addPassenger).toBeDefined();	
	});

	it('addPassender method should be defined', function() {
		expect(car.getNumberOfPassenger).toBeDefined();	
	});

	it('addPassender method should be defined', function() {
		expect(car.getNumberOfMen).toBeDefined();	
	});
});

describe('Cars logic check', function() {
	var car;

	beforeEach(function() {
		car = new Car(2);
	});	

	it('addPassenger() should be called to add Person', function() {
		var person = new Person();
		spyOn(car, 'addPassenger').and.callThrough();
		car.addPassenger(person);
		//using callThrough to make sure that addPassenger is called actually
		expect(car.addPassenger).toHaveBeenCalledWith(person); 
		expect(car.getNumberOfPassenger()).toEqual(1);
	});

	it('No of Pass should be 0', function() {
		expect(car.getNumberOfPassenger()).toEqual(0);
	});

	it('No of Pass over the max', function() {
		var person1 = new Person();
		car.addPassenger(person1);
		var person2 = new Person();
		car.addPassenger(person2);
		var person3 = new Person();
		expect(function(){car.addPassenger(person3);}).toThrow(new Error("Over max number of passengers"));		
	});

	it('No of men - getGender() of Person should be called', function() {
		var person1 = new Person();
		person1.setGender('male');
		car.addPassenger(person1);
		var person2 = new Person();
		person2.setGender('female');
		car.addPassenger(person2);

		//using callThrough to make sure that getGender is called actually
		spyOn(person1, 'getGender').and.callThrough();
		spyOn(person2, 'getGender').and.callThrough();

		expect(car.getNumberOfMen()).toEqual(1);
		expect(person1.getGender).toHaveBeenCalled(); 
		expect(person2.getGender).toHaveBeenCalled();
	});
});	