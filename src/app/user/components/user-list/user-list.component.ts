import { Component, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ]
})
export class UserListComponent implements OnInit {
  @Input() users: any;
  isLoading: boolean = true;
  usersHeader: string;
  usersFooter: string;


  constructor(private userService: UserService) {
    this.usersHeader = 'All Users';
    this.usersFooter = 'Back to top'
  }

  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe((users: object[]) => {
          try {
            this.isLoading = false;
            this.users = users;
            console.table(this.users);
          } catch (err) {
            this.isLoading = true;
            console.error(err);
          }
        });
  }

}
