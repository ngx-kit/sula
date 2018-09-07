import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiButtonModule } from 'ui';
import { UiTextModule } from '../../ui-text/ui-text.module';
import { UiDatePickerModule } from '../ui-date-picker.module';
import { UiDatePickerDemoComponent } from './ui-date-picker-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiDatePickerModule,
    UiButtonModule,
    UiTextModule,
  ],
  declarations: [
    UiDatePickerDemoComponent,
  ],
  entryComponents: [
    UiDatePickerDemoComponent,
  ],
})
export class UiDatePickerDemoModule {
}
