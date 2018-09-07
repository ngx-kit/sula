import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiTooltipModule } from '../ui-tooltip.module';
import { UiTooltipDemoComponent } from './ui-tooltip-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiTooltipModule,
    UiButtonModule,
  ],
  declarations: [UiTooltipDemoComponent],
  entryComponents: [
    UiTooltipDemoComponent,
  ],
})
export class UiTooltipDemoModule {
}
