import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { UserModule } from './user/user.module';

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'users', loadChildren: () => UserModule },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];



