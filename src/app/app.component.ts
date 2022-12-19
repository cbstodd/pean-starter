import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  subtitle: string;

  constructor() {
    this.title = `My Gift Network`;
    this.subtitle = `Welcome to My Gift Network`;
  }

  ngOnInit(): void {


  }
}
