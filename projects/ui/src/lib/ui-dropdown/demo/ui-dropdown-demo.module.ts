import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiDropdownModule } from '../ui-dropdown.module';
import { UiDropdownDemoComponent } from './ui-dropdown-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiDropdownModule,
    UiButtonModule,
  ],
  declarations: [
    UiDropdownDemoComponent,
  ],
})
export class UiDropdownDemoModule {
}
