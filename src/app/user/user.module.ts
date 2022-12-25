import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserService } from './services/user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [
    UserService
  ],
  bootstrap: [
  ]
})
export class UserModule {}
