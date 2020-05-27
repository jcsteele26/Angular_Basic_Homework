function sayHello(person : string) : string {
    return "Hello, " + person;
}
    var user = "Super Student";
    document.getElementById("para").innerHTML = sayHello(user);

    class Person {
        firstName : string;
        lastName : string;
        age : number;
        phoneNumber : string;
        state : string;
        zipCode : number;
        occupation : string;
        hourlyWage : number;
        hours : number;
        degree[] : string;

        constructor(firstName: string, lastName: string, age: number, phoneNumber: string, state: string, zipCode: number, occupation: string, hourlyWage: number, hours: number, degree: string) {
            this.firstName = "Fred";
            this.lastName = "Smith";
            this.age = 26;
            this.phoneNumber = "7042225436";
            this.state = "FL";
            this.zipCode = 28025;
            this.occupation = "Baker";
            this.hourlyWage = 40.00;
            this.hours = 30;
            this.degree = "MBA" ;
        }
    
        fullName() : string {
            return "Full name is: " + this.firstName + " " + this.lastName;
        }

        namePhone() : string {
            return "Name: " + this.firstName + " Phone Number is: " + this.phoneNumber;
        }

        nameLocation(): string {
            return "Name: " + this.firstName + " lives in  this state: " + this.state;
        }

        nameWork(): string {
            return "Name: " + this.firstName + " works as a " + this.occupation;
        }

        weeklyWage(hours? : number) {
            if(hours) {
                this.hours = hours;
            } else {
                this.hours = 40;
            }
            return "Name: " + this.firstName + " Weekly wage is: " + this.hours * this.hourlyWage;
        }

       // addCerts : function(...args : any[]) {
           // for(var i=o, arg; arg=args[i]; i++){
              //  this.degree = this.degree + this.degree[i];
           // }
           // return this.degree;
       // }
    }

        // Interface for Person Options
        interface PersonOptions {
            firstName : string;
            lastName : string;
            age?: number;
            phone?: string;
            state?: string;
            zipCode?: number;
            occupation?: string;
            hourlyWage?: number;
            hours?: number;
            degree?: string;

        }
        var  user1 = new Person("Fred", "Jones", 20, "7882675", "VA", 28027, "Retired", 30, 40, "MBA");

        var user2 = new Person("Joe", "Jones", 30, "7823422", "VA", 28022, "Student", 15, 40, "CSM");
        
        //display fullName
        document.getElementById("third").innerHTML = user1.fullName();

        //display name and state
        document.getElementById("second").innerHTML = user2.nameLocation();

        // display weekly wage
        document.getElementById("forth").innerHTML = user1.weeklyWage();


    
