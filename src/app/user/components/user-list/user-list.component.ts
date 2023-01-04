import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ]
})
export class UserListComponent implements OnInit {
  users: any;
  usersHeader: string;
  usersFooter: string;

  constructor(private userService: UserService) {
    this.usersHeader = 'All Users';
    this.usersFooter = 'Back to top'
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();

  }

}
