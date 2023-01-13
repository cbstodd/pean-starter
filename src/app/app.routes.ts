import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { CoreComponent } from './core/components/core.component';
import { UserModule } from './user/user.module';

export const appRoutes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {
        path: '', component: CoreComponent, children: [
          { path: 'users', loadChildren: () => UserModule },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

