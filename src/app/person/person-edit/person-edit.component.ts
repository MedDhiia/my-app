import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from '../../models/all.model';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person?: Person;
  isLoading: Boolean;

  constructor(private personService: PersonService, private router: ActivatedRoute) { }

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
  });

  ngOnInit(): void {
    this.isLoading = true;
    this.router.params.subscribe((params: any) => {
      this.personService.getOnePerson(params.id).subscribe((person: any) => {
        this.isLoading = false;
        this.form.patchValue(person)
      })
    })
  }



}
