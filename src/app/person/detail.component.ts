import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/all.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'person-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person ?:Person;
  constructor(private personService: PersonService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      this.personService.getOnePerson(params.id).subscribe((person: any) => {
        this.person = person;
      })
    })
  }
}