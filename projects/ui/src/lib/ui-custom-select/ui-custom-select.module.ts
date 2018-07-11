import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitIconsModule, KitOutsideClickModule, KitOverlayModule, KitPositionModule } from '@ngx-kit/core';
import { UiCustomSelectComponent } from './ui-custom-select/ui-custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
    KitPositionModule,
    KitOutsideClickModule,
    KitIconsModule,
  ],
  declarations: [
    UiCustomSelectComponent,
  ],
  exports: [
    UiCustomSelectComponent,
  ],
})
export class UiCustomSelectModule {
}
