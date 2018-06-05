import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiAutocompleteModule } from '../ui-autocomplete.module';
import { UiAutocompleteDemoComponent } from './ui-autocomplete-demo.component';
import { UiTextModule } from '../../ui-text/ui-text.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiAutocompleteModule,
    // Combined demo
    UiTextModule,
  ],
  declarations: [
    UiAutocompleteDemoComponent,
  ],
})
export class UiAutocompleteDemoModule {
}
