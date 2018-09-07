import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiVerticalMenuModule } from 'ui';
import { UiVerticalMenuDemoComponent } from './ui-vertical-menu-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiVerticalMenuModule,
  ],
  declarations: [
    UiVerticalMenuDemoComponent,
  ],
  entryComponents: [
    UiVerticalMenuDemoComponent,
  ],
})
export class UiVerticalMenuDemoModule {
}
