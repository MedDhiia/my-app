import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) {

  }

  canActivate() {
    console.log(this.sessionService.getLocalUser());
    if (!this.sessionService.getLocalUser()) {
      this.router.navigate(["signin"]);
      return false;
    }
    return true;
  }

}
