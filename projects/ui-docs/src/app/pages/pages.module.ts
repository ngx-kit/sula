import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitIconsModule } from '@ngx-kit/core';
import { ColorsPageComponent } from './colors-page/colors-page.component';
import { IconographyPageComponent } from './iconography-page/iconography-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TypographyPageComponent } from './typography-page/typography-page.component';
import { IconPreviewComponent } from './iconography-page/icon-preview/icon-preview.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    KitIconsModule,
  ],
  declarations: [
    IntroPageComponent,
    ColorsPageComponent,
    TypographyPageComponent,
    IconographyPageComponent,
    IconPreviewComponent,
  ],
})
export class PagesModule {
}
