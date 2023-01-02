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
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from '../user/user.module';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    LargeSidebarRightComponent,
    SmallSidebarRightComponent,
    NavbarComponent,
    CoreComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NzLayoutModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzPageHeaderModule,
    NzMenuModule,
    BrowserAnimationsModule,
    UserModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    NavbarComponent,
    CoreComponent
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule {}
