import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from '../models/all.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPersons(params?: any) {
    return this
      .http.get(this.apiUrl + "/users", { params: params })
      ;
  }

  getOnePerson(id: number) {
    return this
      .http.get(this.apiUrl + "/users/" + id)
      ;
  }

  createPerson(person: Person) {
    return this
      .http.post(this.apiUrl + "/users/create", person);
  }

  editPerson(person: Person, id: number) {
    return this
      .http.put(this.apiUrl + "/users/edit/" + id, person);
  }

  deletePerson(id: number) {
    return this.http.delete(this.apiUrl + "/users/delete/" + id);

  }

}
