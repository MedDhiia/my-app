import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from '../models/all.model';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPersons(params?: any) {
    return this
      .http.get(this.baseUrl + "/users", { params: params })
      ;
  }

  getOnePerson(id: number) {
    return this
      .http.get(this.baseUrl + "/users/" + id)
      ;
  }

  createPerson(person: Person) {
    return this
      .http.post(this.baseUrl + "/users/create", person);
  }
}
