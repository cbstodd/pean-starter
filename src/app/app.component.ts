import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit {
  title: string;
  subtitle: string;
  isCollapsed: boolean = false;

  constructor() {
    this.title = `My Gift Network`;
    this.subtitle = `Welcome to My Gift Network`;
  }

  ngOnInit(): void {
  }

  sidebarToggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
