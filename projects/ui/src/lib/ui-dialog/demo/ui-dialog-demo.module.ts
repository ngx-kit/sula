import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiButtonModule } from 'ui';
import { UiTextModule } from '../../ui-text/ui-text.module';
import { UiDialogModule } from '../ui-dialog.module';
import { UiDialogDemoComponent } from './ui-dialog-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiDialogModule,
    UiButtonModule,
    UiTextModule,
  ],
  declarations: [
    UiDialogDemoComponent,
  ],
  entryComponents: [
    UiDialogDemoComponent,
  ],
})
export class UiDialogDemoModule {
}
