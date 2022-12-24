import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CommonModule } from '@angular/common';

const userRoutes: Routes = [
  {
    path: 'users', component: UserComponent, children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailComponent },
      { path: '**', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
