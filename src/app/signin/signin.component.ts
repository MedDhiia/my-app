import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService, private sessionService: SessionService, private router: Router) { }
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
      // localStorage.setItem('user', JSON.stringify(person));
      this.sessionService.setUser(person);
      this.router.navigate([""]);
    });
  }
}

