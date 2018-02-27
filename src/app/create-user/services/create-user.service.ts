import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class CreateUserService {

  constructor(private http: HttpClient) { }
  newUser(formBody) {
    console.log("service submit", formBody)
    return this.http.post('http://localhost:3000/user', formBody, httpOptions)
  }
}
