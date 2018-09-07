import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiAlertModule } from '../ui-alert.module';
import { UiAlertDemoComponent } from './ui-alert-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiAlertModule,
    UiButtonModule,
  ],
  declarations: [UiAlertDemoComponent],
  entryComponents: [UiAlertDemoComponent],
})
export class UiAlertDemoModule {
}
