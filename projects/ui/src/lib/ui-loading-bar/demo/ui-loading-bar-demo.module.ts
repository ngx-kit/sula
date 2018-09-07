import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiLoadingBarModule } from '../ui-loading-bar.module';
import { UiLoadingBarDemoComponent } from './ui-loading-bar-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiLoadingBarModule,
    UiButtonModule,
  ],
  declarations: [
    UiLoadingBarDemoComponent,
  ],
  entryComponents: [
    UiLoadingBarDemoComponent,
  ],
})
export class UiLoadingBarDemoModule {
}
