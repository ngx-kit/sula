import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiDatePickerModule } from '../ui-date-picker.module';
import { UiDatePickerDemoComponent } from './ui-date-picker-demo.component';
import { UiButtonModule } from 'ui';
import { UiTextModule } from '../../ui-text/ui-text.module';

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
})
export class UiDatePickerDemoModule {
}
