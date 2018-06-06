import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiTooltipModule } from '../ui-tooltip.module';
import { UiTooltipDemoComponent } from './ui-tooltip-demo.component';
import { UiButtonModule } from 'ui';

@NgModule({
  imports: [
    CommonModule,
    UiTooltipModule,
    UiButtonModule,
  ],
  declarations: [UiTooltipDemoComponent],
  exports: [],
  providers: [],
})
export class UiTooltipDemoModule {
}
