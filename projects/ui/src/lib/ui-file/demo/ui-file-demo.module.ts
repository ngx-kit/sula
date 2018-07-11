import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiFileModule } from '../ui-file.module';
import { UiFileDemoComponent } from './ui-file-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiFileModule,
    UiButtonModule,
  ],
  declarations: [
    UiFileDemoComponent,
  ],
  entryComponents: [
    UiFileDemoComponent,
  ],
})
export class UiFileDemoModule {
}
