import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user/user';

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
  @Output() users: User;


  constructor() {
    this.appInitials = `MGN`;
  }

  ngOnInit(): void {
    this.followers = [
      'Name 1',
      'Name 2',
      'Name 3'
    ];

    this.following = [
      'Name 1',
      'Name 2',
      'Name 3'
    ];

  }

}




