function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, hours) {
        this.firstName = "Fred";
        this.lastName = "Smith";
        this.age = 26;
        this.phoneNumber = "7042225436";
        this.state = "FL";
        this.zipCode = 28025;
        this.occupation = "Baker";
        this.hourlyWage = 40.00;
        this.hours = 30;
    }
    Person.prototype.fullName = function () {
        return "Full name is: " + this.firstName + " " + this.lastName;
    };
    Person.prototype.namePhone = function () {
        return "Name: " + this.firstName + " Phone Number is: " + this.phoneNumber;
    };
    Person.prototype.nameLocation = function () {
        return "Name: " + this.firstName + " lives in  this state: " + this.state;
    };
    Person.prototype.nameWork = function () {
        return "Name: " + this.firstName + " works as a " + this.occupation;
    };
    Person.prototype.weeklyWage = function (hours) {
        if (hours) {
            this.hours = hours;
        }
        else {
            this.hours = 40;
        }
        return "Name: " + this.firstName + " Weekly wage is: " + this.hours * this.hourlyWage;
    };
    return Person;
}());
var user1 = new Person("Fred", "Jones", 20, "7882675", "VA", 28027, "Retired", 30, 40);
var user2 = new Person("Joe", "Jones", 30, "7823422", "VA", 28022, "Student", 15, 40);
//display fullName
document.getElementById("third").innerHTML = user1.fullName();
//display name and state
document.getElementById("second").innerHTML = user2.nameLocation();
// display weekly wage
document.getElementById("forth").innerHTML = user1.weeklyWage();
