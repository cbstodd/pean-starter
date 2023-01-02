import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/components/core.component';

const appRoutes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {
        path: '', component: CoreComponent, children: [
          { path: 'users', loadChildren: () => UserModule }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
