import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user/user';
import { UserService } from '../../user/services/user.service';
import { map, Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  isCollapsed: boolean = false;
  appInitials: string;
  followers: string[] = [];
  following: string[] = [];
  usernames: string;
  // users: User;

  constructor(public userService: UserService) {
    this.appInitials = `MGN`;
    this.usernames = '';
  }

  ngOnInit(): void {
    this.userService.getUsers().forEach((user: User) => {
      this.usernames = user.username;
    });
  }


}


