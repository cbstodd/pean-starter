import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ],
})
export class UserListComponent implements OnInit {
  @Output() users: any;
  isLoading: boolean = true;
  userHeader: string;
  userFooter: string;


  constructor(private userService: UserService) {
    this.userHeader = 'All Users';
    this.userFooter = 'Back to top';
  }

  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe((user: User): void => {
          try {
            this.isLoading = false;
            console.table(user);
            this.users = user;
          } catch (err) {
            this.isLoading = true;
            console.error(err);
          }
        });
  }


}
