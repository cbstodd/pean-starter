import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user.component';
import { Routes } from '@angular/router';

export const userRoutes: Routes = [
  {
    path: 'users', component: UserComponent, children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailComponent },
      { path: '**', redirectTo: 'users', pathMatch: 'full' },
    ],
  },
];

