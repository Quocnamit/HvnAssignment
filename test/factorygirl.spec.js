describe("Student constructor function suite", function() {
    var options;

    beforeEach(function() {
        options = {
            girlType: "smart",
            firstName: "Thuy"
        }
    });

    it("should be a constructor function", function() {
		expect(Girl).toEqual(jasmine.any(Function));
        expect(new Girl()).toEqual(jasmine.any(Object));    	
    });

    it("should have createGirl(options) function", function() {
    	var girl = new Girl();
    	expect(girl.createGirl).toBeDefined();
    });

    it("should return an instance of Person when calling createGirl, if girlClass is normal", function() {
        options.girlType = 'normal';
        var girl = new Girl();

        var returnedGirl = girl.createGirl(options);
        expect(returnedGirl instanceof GymPerson).toBe(true);
    });

    it("should return an instance of Student when calling createGirl, if girlClass is smart", function() {
        options.subject = 'Unit test';
        var girl = new Girl();

        var returnedGirl = girl.createGirl(options);
        expect(returnedGirl instanceof Student).toBe(true);
    });
});

