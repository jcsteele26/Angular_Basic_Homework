export class Person {

    constructor(
        private name: string,
        private city: string,
        private state: string,
        private gender: string
    ){}

    public getName() : string{
        return this.name;
    }

    public getCity() : string{
        return this.city;
    }

    public getState() : string{
        return this.state;
    }

    public getGender() : string{
        return this.gender;
    }

      
  
}
