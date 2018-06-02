import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiToggleComponent } from './ui-toggle/ui-toggle.component';
import { KitClassModule } from '@ngx-kit/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitClassModule,
  ],
  declarations: [
    UiToggleComponent,
  ],
  exports: [
    UiToggleComponent,
  ],
})
export class UiToggleModule {
}
