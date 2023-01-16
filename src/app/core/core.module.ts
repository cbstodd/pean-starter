import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from '../user/user.module';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  ],
  imports: [
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
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CoreModule {
}
