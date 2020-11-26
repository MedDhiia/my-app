import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  constructor(private personService: PersonService) { }

  form = new FormGroup({
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
    plainPassword: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
  }

  submitForm() {
    console.log(
      this.form.value
    );
    this.personService.createPerson(this.form.value).subscribe(() => { });
  }

}
