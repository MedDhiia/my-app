import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService) { }
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),

  });



  ngOnInit(): void {
  }
  submitForm() {
    console.log(
      this.form.value
    );
    this.authservice.signin(this.form.value).subscribe((person: any) => {
      localStorage.setItem('user', JSON.stringify(person));
    });
  }
}

