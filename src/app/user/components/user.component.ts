import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ]
})
export class UserComponent implements OnInit {
  @Output() users: any;
  isLoading: boolean = true;


  constructor() {
  }

  ngOnInit(): void {

  }

}
