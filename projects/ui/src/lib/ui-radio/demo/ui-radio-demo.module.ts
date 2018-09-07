import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiRadioModule } from '../ui-radio.module';
import { UiRadioDemoComponent } from './ui-radio-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiRadioModule,
  ],
  declarations: [UiRadioDemoComponent],
  entryComponents: [
    UiRadioDemoComponent,
  ],
})
export class UiRadioDemoModule {
}
