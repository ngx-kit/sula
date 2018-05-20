import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiRadioComponent } from './ui-radio/ui-radio.component';
import { KitClassModule } from '@ngx-kit/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitClassModule,
  ],
  declarations: [
    UiRadioComponent,
  ],
  exports: [
    UiRadioComponent,
  ],
})
export class UiRadioModule {
}
