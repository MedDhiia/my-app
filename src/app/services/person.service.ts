import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  persons:Array<Person> = [
    {
      firstname: 'Ahmed',
      lastname: 'Ahmed'
    },
    {
      firstname: 'Dhiaa',
      lastname: 'Dhiaa'
    },
    {
      firstname: 'Alaa',
      lastname: 'Namouchi'
    },
    {
      firstname: 'Mahmoud',
      lastname: 'Mahmoud'
    }
  ];

  
  getPersons(): Array<Person> {
    return this.persons ;
  }
  

}
