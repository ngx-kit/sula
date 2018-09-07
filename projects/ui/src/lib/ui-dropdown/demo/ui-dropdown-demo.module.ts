import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiDropdownModule } from '../ui-dropdown.module';
import { UiDropdownDemoComponent } from './ui-dropdown-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiDropdownModule,
    UiButtonModule,
  ],
  declarations: [
    UiDropdownDemoComponent,
  ],
  entryComponents: [
    UiDropdownDemoComponent,
  ],
})
export class UiDropdownDemoModule {
}
