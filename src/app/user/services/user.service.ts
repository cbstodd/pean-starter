import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { subscribeToArray } from 'rxjs/internal/util/subscribeToArray';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {

  }


  getUsers(): User[] {
    return [
      { username: 'Colper21', createdAt: Date.now(), uuid: '12345' },
      { username: 'Tom', createdAt: Date.now(), uuid: '14414' },
      { username: 'Jerry', createdAt: Date.now(), uuid: '42135' },
      { username: 'Elvis', createdAt: Date.now(), uuid: '98548' },
    ];
  }
}
