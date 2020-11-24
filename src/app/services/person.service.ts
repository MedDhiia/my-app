import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(private http: HttpClient) { }
  
  getPersons(params?: any) {
    return this
      .http.get("https://jsonplaceholder.typicode.com/users", {params: params});
  }

  getOnePerson(id: number){
    return this
    .http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }
  
}
