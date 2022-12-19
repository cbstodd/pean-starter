import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-sidebar-right',
  templateUrl: './small-sidebar-right.component.html',
  styleUrls: ['./small-sidebar-right.component.scss']
})
export class SmallSidebarRightComponent implements OnInit {
  visible: boolean = false;
  size: 'large' | 'small' = 'small';
  constructor() { }

  ngOnInit(): void {
  }



  get title(): string {
    return `${this.size} Drawer`;
  }

  showDefault(): void {
    this.size = 'small';
    this.open();
  }

  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
