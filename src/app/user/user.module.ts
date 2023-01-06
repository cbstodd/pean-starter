import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserService } from './services/user.service';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzListModule } from "ng-zorro-antd/list";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { UserItemComponent } from './components/user-item/user-item.component';
import { userRoutes } from "./user.routes";


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    UserItemComponent
  ],
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule,
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
    RouterModule
  ],
  bootstrap: [
    UserListComponent,
    UserItemComponent,
  ]
})
export class UserModule {
}
