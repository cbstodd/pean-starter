import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  placeholderUserData: string = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {

  }

  getUsers(): any {
    return this.http.get(this.placeholderUserData);
  }
}
