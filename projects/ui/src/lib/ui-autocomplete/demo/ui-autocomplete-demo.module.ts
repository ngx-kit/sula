import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiTextModule } from '../../ui-text/ui-text.module';
import { UiAutocompleteModule } from '../ui-autocomplete.module';
import { UiAutocompleteDemoComponent } from './ui-autocomplete-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiAutocompleteModule,
    UiTextModule,
  ],
  declarations: [
    UiAutocompleteDemoComponent,
  ],
})
export class UiAutocompleteDemoModule {
}
