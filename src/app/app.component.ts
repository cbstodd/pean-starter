import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = '';
  subtitle: string = '';

  dummyCSS = '';

  constructor() {

  }

  ngOnInit(): void {
    this.title = 'My Gift Network - Version 2.0';
    this.dummyCSS = `this.dummyCSS =
  p, td, li, ol, ul, div, span {
  font-family: $body3-sans-font;
  font-weight: 500;
  line-height: 2rem;
  }`;
    this.subtitle = 'Second version which is a complete re-write using PostgreSQL versus Google Firestore.';
  }
}
