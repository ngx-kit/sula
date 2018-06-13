import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiVerticalMenuModule } from 'ui';
import { UiScrollModule } from '../../../../ui/src/lib/ui-scroll/ui-scroll.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiVerticalMenuModule,
    UiScrollModule,
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
