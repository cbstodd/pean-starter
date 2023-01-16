import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/services/user.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: [ './core.component.css' ],
})
export class CoreComponent implements OnInit {
  title: string;
  usernames: string;

  // users: User;

  constructor(public userService: UserService) {
    this.title = `My Gift Network`;
    this.usernames = '';
  }

  ngOnInit(): void {
  }


}


