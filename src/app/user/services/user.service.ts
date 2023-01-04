import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  randomNum: number;

  constructor(public http: HttpClient) {
    this.randomNum = Math.floor((Math.random() * 10) + 1);
  }

  // TODO: Add to 'Helper Service'.
  generateId = () => {
    const array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
    let str = '';
    for (let i = 0; i < array.length; i++) {
      str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4);
    }
    return str;
  };

  getUsers(): User[] {
    return [
      {
        uuid: `${ this.generateId() }`,
        username: 'Colper21',
        followersId: [ '123' ],
        followingId: [ '123' ],
        createdAt: Date.now() - Math.floor(Math.random() * (500 + 100)) + 1,
        updatedAt: Date.now() - Math.floor(Math.random() * (1000 + 500)) + 1,
        isOnline: false
      },
      {
        uuid: `${ this.generateId() }`,
        username: 'Tom',
        followersId: [ '123' ],
        followingId: [ '123' ],
        createdAt: Date.now() - Math.floor(Math.random() * (500 + 100)) + 1,
        updatedAt: Date.now() - Math.floor(Math.random() * (1000 + 500)) + 1,
        isOnline: false
      },
      {
        uuid: `${ this.generateId() }`,
        username: 'Jerry',
        followersId: [ '123' ],
        followingId: [ '123' ],
        createdAt: Date.now() - Math.floor(Math.random() * (500 + 100)) + 1,
        updatedAt: Date.now() - Math.floor(Math.random() * (1000 + 500)) + 1,
        isOnline: false
      },
      {
        uuid: `${ this.generateId() }`,
        username: 'Elvis',
        followersId: [ '123' ],
        followingId: [ '123' ],
        createdAt: Date.now() - Math.floor(Math.random() * (500 + 100)) + 1,
        updatedAt: Date.now() - Math.floor(Math.random() * (1000 + 500)) + 1,
        isOnline: false
      },
    ];
  }
}
