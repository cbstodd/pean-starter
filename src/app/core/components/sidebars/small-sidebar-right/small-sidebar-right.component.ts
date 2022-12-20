import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-small-sidebar-right',
  templateUrl: './small-sidebar-right.component.html',
  styleUrls: ['./small-sidebar-right.component.scss']
})
export class SmallSidebarRightComponent implements OnInit {
  @Output() open:  EventEmitter<any> = new EventEmitter();

  visible: boolean = false;
  size: 'large' | 'small' = 'small';
  constructor() { }

  ngOnInit(): void {
  }

  get title(): string {
    return `${this.size} Drawer`;
  }

  close(): void {
    this.visible = false;
  }


}
