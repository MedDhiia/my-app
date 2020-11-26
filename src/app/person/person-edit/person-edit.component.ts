import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from '../../models/all.model';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person?: Person;
  isLoading: Boolean;

  constructor(private personService: PersonService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  form = new FormGroup({
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
    plainPassword: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    this.isLoading = true;
    this.activatedRouter.params.subscribe((params: any) => {
      this.personService.getOnePerson(params.id).subscribe((person: any) => {
        this.isLoading = false;
        this.form.patchValue(person);
        this.person = person;
      })
    })
  }

  clickSubmit() {
    console.log(this.person)
    console.log(this.person.id)
    this.personService.editPerson(this.form.value, this.person.id).subscribe((person: any) => {
      this.router.navigate(['/']);
    })
  }



}
