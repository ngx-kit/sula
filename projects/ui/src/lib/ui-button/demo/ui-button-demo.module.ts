import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiButtonModule } from 'ui';
import { UiButtonDemoComponent } from './ui-button-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiButtonModule,
  ],
  declarations: [
    UiButtonDemoComponent,
  ],
  entryComponents: [
    UiButtonDemoComponent,
  ],
})
export class UiButtonDemoModule {
}
