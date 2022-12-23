import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  isCollapsed: boolean = false;
  appInitials: string;
  followers: string[] = [];
  following: string[] = [];


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
    ]

  }

}




