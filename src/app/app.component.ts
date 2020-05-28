import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { Person } from './person';
import {Observable, Subscription} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent { 
    
  title = 'angularecosystem';

  nameRobObservable: Observable<{isNameRob: false, string: "Rob"}>;

  firstSubscription: Subscription;
  subscriberOneValue: string = "Rob";

  person;

  constructor(private peopleservice : PeopleService) {}

  ngOnInit() {
    this.person = this.peopleservice.getPerson();

  }

}
