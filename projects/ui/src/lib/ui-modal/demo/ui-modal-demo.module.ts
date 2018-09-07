import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiModalModule } from '../ui-modal.module';
import { UiModalDemoComponent } from './ui-modal-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiModalModule,
    UiButtonModule,

  ],
  declarations: [UiModalDemoComponent],
  entryComponents: [
    UiModalDemoComponent,
  ],
})
export class UiModalDemoModule {
}
