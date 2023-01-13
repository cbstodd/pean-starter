import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ],
})
export class UserListComponent implements OnInit, OnDestroy {
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
        .subscribe((user: object[]) => {
          try {
            this.isLoading = false;
            this.users = user;
            console.table(this.users);
          } catch (err) {
            this.isLoading = true;
            console.error(err);
          }
        });
  }

  ngOnDestroy(): void {
    this.userService.getUsers().unsubscribe();
  }

}
