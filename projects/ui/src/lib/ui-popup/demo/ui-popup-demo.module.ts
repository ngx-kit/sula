import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiPopupModule } from '../ui-popup.module';
import { UiPopupDemoComponent } from './ui-popup-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiPopupModule,
    UiButtonModule,
  ],
  declarations: [
    UiPopupDemoComponent,
  ],
  entryComponents: [
    UiPopupDemoComponent,
  ],
})
export class UiPopupDemoModule {
}
