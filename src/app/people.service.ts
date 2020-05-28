import { Injectable } from '@angular/core';
import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() {}

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  getPerson() {
    let person = new Person("Kyle", "Charlotte", "NC", "male");
    this.delay(4000).then(any => {return person});
    //return person;
  }  

}
