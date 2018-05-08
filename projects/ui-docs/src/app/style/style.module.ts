import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorsComponent } from './colors/colors.component';
import { IconographyComponent } from './iconography/iconography.component';
import { StyleRoutingModule } from './style-routing.module';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    StyleRoutingModule,
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    IconographyComponent,
  ],
})
export class StyleModule {
}
