import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CoreModule } from './core/core.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons)
  .map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    CoreModule,
    NzIconModule,
    NzGridModule,
    NzTypographyModule,
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
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule {
}
