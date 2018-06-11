import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPopupModule } from '../ui-popup.module';
import { UiPopupDemoComponent } from './ui-popup-demo.component';
import { UiButtonModule } from 'ui';

@NgModule({
  imports: [
    CommonModule,
    UiPopupModule,
    UiButtonModule,
  ],
  declarations: [
    UiPopupDemoComponent,
  ],
})
export class UiPopupDemoModule {
}
