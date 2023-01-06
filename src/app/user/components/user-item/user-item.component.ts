import { Component, Input, OnInit, Output } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: [ './user-item.component.css' ]
})
export class UserItemComponent implements OnInit {
  @Output() user: any;

  constructor() {
  }

  ngOnInit(): void {


  }

}
