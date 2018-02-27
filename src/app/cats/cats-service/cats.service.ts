import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable()
export class CatsService {

  constructor(private http: HttpClient) { }

    allCats() {
      return this.http.get('http://localhost:3000/cats').map( res => res)
    }
}
