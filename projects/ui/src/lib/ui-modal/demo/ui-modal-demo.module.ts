import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModalModule } from '../ui-modal.module';
import { UiModalDemoComponent } from './ui-modal-demo.component';
import { UiButtonModule } from 'ui';

@NgModule({
  imports: [
    CommonModule,
    UiModalModule,
    UiButtonModule,

  ],
  declarations: [UiModalDemoComponent],
  exports: [],
  providers: [],
})
export class UiModalDemoModule {
}
