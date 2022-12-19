import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MzButtonModule, MzIconModule, MzNavbarModule, MzSidenavModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    SidenavComponent,
    NavbarComponent,
  ],
  exports: [
    CommonModule,
    MzSidenavModule,
    MzNavbarModule,
    MzIconModule,
    MzButtonModule,

  ],
  imports: [
    MzSidenavModule,
    MzNavbarModule,
  ],
  providers: []
})
export class CoreModule {}
