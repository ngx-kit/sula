import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KitIconsModule, KitModalModule, KitMqModule, KitOverlayModule } from '@ngx-kit/core';
import { UiButtonModule, UiLoadingBarModule, UiScrollModule, UiVerticalMenuModule } from 'ui';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiButtonModule,
    UiVerticalMenuModule,
    UiScrollModule,
    UiLoadingBarModule,
    KitIconsModule,
    KitMqModule,
    KitOverlayModule,
    KitModalModule,
  ],
  declarations: [
    HeaderComponent,
    LayoutComponent,
    NavComponent,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule {
}
