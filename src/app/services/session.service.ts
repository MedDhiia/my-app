import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getLocalUser() {
    return localStorage.getItem("user")
  }

  setLocalUser(user: any) {
    return localStorage.setItem("user", user);
  }

  getUser() {
    return JSON.parse(this.getLocalUser());
  }

  setUser(user: any) {
    this.setLocalUser(JSON.stringify(user));
  }

}
