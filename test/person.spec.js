describe('Person must have its own method', function () {
	var people;

	beforeEach(function() {
		people = new Person();
	});


	it('should define setGender method', function () {
		expect(people.setGender).toBeDefined()
	});

	it('should define getGender method', function () {
		expect(people.getGender).toBeDefined()
	});

	it('should define setFirstName method', function () {
		expect(people.setFirstName).toBeDefined();
	});

	it('should define getFirstName method', function () {
		expect(people.getFirstName).toBeDefined();
	});

	it('should define setLastName method', function () {
		expect(people.setLastName).toBeDefined();
	});

	it('should define getLastName method', function () {
		expect(people.getLastName).toBeDefined();
	});

	it('should define getFullName method', function () {
		expect(people.getFullName).toBeDefined();
	});
});

describe('Person-Gender', function() {
	var people;

	beforeEach(function() {
		people = new person();
	});

	it('should be Male in default', function () {
		expect(people.getGender()).toEqual('male');
	});

	it('should be Female', function () {
		people.setGender('female');
		expect(people.getGender()).toEqual('female');
	});
});

describe('Person-FirstName', function() {
	var people;

	beforeEach(function() {
		people = new person();
	});

	it('should be Nam in firstname', function () {
		people.setFirstName('Nam');
		expect(people.getFirstName()).toEqual('Nam');
	});
});

describe('Person-LastName', function() {
	var people;

	beforeEach(function() {
		people = new person();
	});

	it('should be Luong in lastname', function () {
		people.setLastName('Luong');
		expect(people.getLastName()).toEqual('Luong');
	});
});

describe('Person-FullName', function() {
	var people;

	beforeEach(function() {
		people = new person();
	});

	it('should be Ms Nam Luong', function () {
		people.setGender('Female');
		people.setFirstName('Nam');
		people.setLastName('Luong');
		expect(people.getFullName()).toEqual('Ms.NamLuong');
	});
});
