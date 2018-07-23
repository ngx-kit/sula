import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitClassModule, KitModalModule, KitOverlayModule } from '@ngx-kit/core';
import { UiButtonModule } from '../ui-button/ui-button.module';
import { UiDialogComponent } from './ui-dialog/ui-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitClassModule,
    UiButtonModule,
  ],
  declarations: [
    UiDialogComponent,
  ],
  exports: [
    KitOverlayModule,
    KitModalModule,
  ],
  entryComponents: [
    UiDialogComponent,
  ],
})
export class UiDialogModule {
}
