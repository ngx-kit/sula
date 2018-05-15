import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAlertModule } from '../ui-alert.module';
import { UiAlertDemoComponent } from './ui-alert-demo.component';
import { UiButtonModule } from 'ui';

@NgModule({
  imports: [
    CommonModule,
    UiAlertModule,
    UiButtonModule,
  ],
  declarations: [UiAlertDemoComponent],
})
export class UiAlertDemoModule {
}
