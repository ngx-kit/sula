import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDrawerModule } from '../ui-drawer.module';
import { UiDrawerDemoComponent } from './ui-drawer-demo.component';
import { UiButtonModule } from 'ui';

@NgModule({
  imports: [
    CommonModule,
    UiDrawerModule,
    UiButtonModule,
  ],
  declarations: [
    UiDrawerDemoComponent,
  ],
})
export class UiDrawerDemoModule {
}
