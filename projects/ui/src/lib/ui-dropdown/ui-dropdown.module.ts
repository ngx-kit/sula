import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitAnchorModule, KitOutsideClickModule, KitOverlayModule } from '@ngx-kit/core';
import { UiDropdownItemComponent } from './ui-dropdown-item/ui-dropdown-item.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiDropdownComponent,
    UiDropdownItemComponent,
  ],
  exports: [
    KitOverlayModule,
    KitAnchorModule,
    KitOutsideClickModule,
    UiDropdownComponent,
    UiDropdownItemComponent,
  ],
  providers: [],
})
export class UiDropdownModule {
}
