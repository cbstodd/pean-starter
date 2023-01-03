import {Component, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../user/services/user.service';

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
    this.appInitials = `My Gift Network`;
    this.usernames = '';
  }

  ngOnInit(): void {
  }

  sidebarToggle(event: any): void {
    console.log(event.target);
    this.isCollapsed !== this.isCollapsed;
  }


}


