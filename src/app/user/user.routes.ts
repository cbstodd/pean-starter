import { Routes } from "@angular/router";
import { UserComponent } from "./components/user.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";

export const userRoutes: Routes = [
  {
    path: 'users', component: UserComponent, children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailComponent },
      { path: '**', redirectTo: 'users', pathMatch: 'full' }
    ]
  }
];
