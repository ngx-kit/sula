import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiButtonModule } from 'ui';
import { UiCheckboxModule } from '../../ui-checkbox/ui-checkbox.module';
import { UiRadioModule } from '../../ui-radio/ui-radio.module';
import { UiTextModule } from '../../ui-text/ui-text.module';
import { UiFormModule } from '../ui-form.module';
import { UiFormDemoComponent } from './ui-form-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiFormModule,
    // Combined demo
    UiTextModule,
    UiRadioModule,
    UiCheckboxModule,
    UiButtonModule,
  ],
  declarations: [UiFormDemoComponent],
  entryComponents: [
    UiFormDemoComponent,
  ],
})
export class UiFormDemoModule {
}
