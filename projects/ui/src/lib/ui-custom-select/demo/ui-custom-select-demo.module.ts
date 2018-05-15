import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiCustomSelectModule } from '../ui-custom-select.module';
import { UiCustomSelectDemoComponent } from './ui-custom-select-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiCustomSelectModule,
  ],
  declarations: [UiCustomSelectDemoComponent],
  exports: [],
  providers: [],
})
export class UiCustomSelectDemoModule {
}
