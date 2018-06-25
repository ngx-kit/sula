import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLoadingBarModule } from '../ui-loading-bar.module';
import { UiLoadingBarDemoComponent } from './ui-loading-bar-demo.component';
import { UiButtonModule } from 'ui';

@NgModule({
  imports: [
    CommonModule,
    UiLoadingBarModule,
    UiButtonModule,
  ],
  declarations: [
    UiLoadingBarDemoComponent,
  ],
})
export class UiLoadingBarDemoModule {
}
