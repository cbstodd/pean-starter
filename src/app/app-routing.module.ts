import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/components/core.component';
import { UserModule } from './user/user.module';

const appRoutes: Routes = [
  {
    path: '', component: CoreComponent, children: [
      { path: 'users', loadChildren: () => UserModule }
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
