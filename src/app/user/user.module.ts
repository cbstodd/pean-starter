import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserService } from './services/user.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzListModule } from "ng-zorro-antd/list";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";


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
    NzTypographyModule,
    NzListModule,
    NzSkeletonModule,
  ],
  providers: [
    UserService
  ],
  exports: [
    UserListComponent
  ],
  bootstrap: []
})
export class UserModule {}
