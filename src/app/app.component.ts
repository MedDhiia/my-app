import { Component } from '@angular/core';
import { Person } from './models/person.model';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedPerson ?: Person;
  persons:Array<Person> = [] ;

  constructor(private personService: PersonService){
    this.persons = personService.getPersons();
  }

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