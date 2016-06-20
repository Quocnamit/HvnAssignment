// describe("Student constructor function suite", function() {
//     it("should be inherited from Person", function() {
//         expect(Student).toEqual(jasmine.any(Function));

//         spyOn(GymPerson, 'call');
//         var firstName = "Khiem";
//         var student1 = new Student(firstName);
//         expect(GymPerson.call).toHaveBeenCalledWith(student1, firstName);
//         expect(student1 instanceof GymPerson).toBe(true);
//         expect(student1 instanceof Student).toBe(true);
//     });

//     it("should allow to pass firstName and subject parameters", function() {
//         var firstName = "Khiem";
//         var subject = "Unit test";
//         var student1 = new Student(firstName, subject);
//         expect(student1.subject).toBe(subject);
//         expect(student1.firstName).toBe(firstName);
//     });


//     it("should override sayHello function", function() {
//         expect(Student.prototype.sayHello).toBeDefined();

//         var firstName = "Khiem";
//         var subject = "Unit test";
//         var student1 = new Student(firstName, subject);
//         spyOn(console, "log");
//         student1.sayHello();
//         expect(console.log).toHaveBeenCalledWith("Hello, I'm " + firstName + ". I'm studying " + subject);
//     });

//     it("should have tellTheTruth function", function() {
//         expect(Student.prototype.tellTheTruth).toBeDefined();

//         var firstName = "Khiem";
//         var subject = "Unit test";
//         var student1 = new Student(firstName, subject);
//         spyOn(console, "log");
//         student1.tellTheTruth();
//         expect(console.log).toHaveBeenCalledWith("I hate this " + subject);
//     });
// });

