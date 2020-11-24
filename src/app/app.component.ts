import { Component } from '@angular/core';
import { Person } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPerson ?: Person;
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

  deletePerson(index: number) {
    this.persons.splice(index, 1);
  }

  showPerson(index: number) {
    this.selectedPerson = this.persons[index];
  }

  clickedPerson(person: Person){
    console.log(person);
  }
}