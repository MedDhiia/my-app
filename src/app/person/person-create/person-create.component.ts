import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
  });

  ngOnInit(): void {
  }

  submitForm() {
    console.log(
      this.form.value
    );
  }

}
