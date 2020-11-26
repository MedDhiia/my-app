import { Component } from '@angular/core';
import { Person } from '../models/all.model';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'person-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class PersonListComponent {
  selectedPerson?: Person;
  persons: Array<Person> = [];
  keyword: string;

  displayedColumns: string[] = ['username', 'firstname', 'email', 'actions'];
  dataSource;

  constructor(private personService: PersonService) {
    personService.getPersons()
      .subscribe((persons: any) => {
        this.persons = persons;
      });
  }

  search() {
    console.log(this.keyword);
    this.personService
      .getPersons(this.keyword ? { id: this.keyword } : {})
      .subscribe((persons: any) => {
        this.persons = persons;
      });
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1);
  }

  showPerson(id: number) {
    this.personService.getOnePerson(id).subscribe((person: any) => {
      this.selectedPerson = person;
    });
  }

  clickedPerson(person: Person) {
    console.log(person);
  }
}