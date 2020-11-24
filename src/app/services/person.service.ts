import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  baseUrl: string = environment.baseUrl ;

  constructor(private http: HttpClient) { }
  
  getPersons(params?: any) {
    return this
      .http.get(this.baseUrl + "users", {params: params});
  }

  getOnePerson(id: number){
    return this
    .http.get(this.baseUrl + "users/" + id);
  }
  
}
