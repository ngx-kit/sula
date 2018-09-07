import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiDrawerModule } from '../ui-drawer.module';
import { UiDrawerDemoComponent } from './ui-drawer-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiDrawerModule,
    UiButtonModule,
  ],
  declarations: [
    UiDrawerDemoComponent,
  ],
  entryComponents: [
    UiDrawerDemoComponent,
  ],
})
export class UiDrawerDemoModule {
}
