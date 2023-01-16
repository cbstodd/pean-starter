import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  placeholderUserData: string;

  constructor(private http: HttpClient) {
    this.placeholderUserData = environment.placeholderUserData;

  }

  getUsers(): any {
    return this.http.get(this.placeholderUserData);
  }
}
