import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LargeSidebarRightComponent } from './components/sidebars/large-sidebar-right/large-sidebar-right.component';
import { SmallSidebarRightComponent } from './components/sidebars/small-sidebar-right/small-sidebar-right.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CoreComponent } from './components/core.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LargeSidebarRightComponent,
    SmallSidebarRightComponent,
    CoreComponent,
  ],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzButtonModule,
    NzSpaceModule,
    NzMenuModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LargeSidebarRightComponent,
    SmallSidebarRightComponent
  ]
})
export class CoreModule {}
