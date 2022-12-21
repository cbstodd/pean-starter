import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LargeSidebarRightComponent } from './components/sidebars/large-sidebar-right/large-sidebar-right.component';
import { SmallSidebarRightComponent } from './components/sidebars/small-sidebar-right/small-sidebar-right.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CoreComponent } from './components/core.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    FooterComponent,
    LargeSidebarRightComponent,
    SmallSidebarRightComponent,
    NavbarComponent,
    CoreComponent,
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzIconModule
  ],
  exports: [
    NavbarComponent,
    CoreComponent
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule {}
