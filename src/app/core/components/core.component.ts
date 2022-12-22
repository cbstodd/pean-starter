import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  isCollapsed: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
  }


  setCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
