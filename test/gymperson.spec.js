describe("GymPerson constructor function suite", function() {
	it("should be a constructor function", function() {
		expect(GymPerson).toEqual(jasmine.any(Function));
		expect(new GymPerson()).toEqual(jasmine.any(Object));
	});

	it("should allow to pass firstName parameter", function() {
		var firstName = "Khiem";
		var person1 = new GymPerson(firstName);
		expect(person1.firstName).toBe(firstName);
	});

	it("should have smile function", function() {
		expect(GymPerson.prototype.smile).toBeDefined();

		var person1 = new GymPerson();
		spyOn(console, "log");
		person1.smile();
		expect(console.log).toHaveBeenCalledWith("Hehehe!");
	});

	it("should have sayHello function", function() {
		expect(GymPerson.prototype.sayHello).toBeDefined();

		var firstName = "Tu";
		var person1 = new GymPerson(firstName);
		spyOn(console, "log");
		person1.sayHello();
		expect(console.log).toHaveBeenCalledWith("Hello, I'm " + firstName);
	});
});
