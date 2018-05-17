import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiCheckboxComponent } from './ui-checkbox/ui-checkbox.component';
import { KitClassModule } from '@ngx-kit/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitClassModule,
  ],
  declarations: [
    UiCheckboxComponent,
  ],
  exports: [
    UiCheckboxComponent,
  ],
})
export class UiCheckboxModule {
}
