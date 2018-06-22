import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitIconsModule } from '@ngx-kit/core';
import { ColorsComponent } from './colors/colors.component';
import { IconographyComponent } from './iconography/iconography.component';
import { StyleRoutingModule } from './style-routing.module';
import { TypographyComponent } from './typography/typography.component';
import { IconPreviewComponent } from './icon-preview/icon-preview.component';

@NgModule({
  imports: [
    CommonModule,
    StyleRoutingModule,
    KitIconsModule,
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    IconographyComponent,
    IconPreviewComponent,
  ],
})
export class StyleModule {
}
