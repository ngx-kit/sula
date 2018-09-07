import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from 'ui';
import { UiNotificationModule } from '../ui-notification.module';
import { UiNotificationDemoComponent } from './ui-notification-demo.component';

/**
 * @demo
 */
@NgModule({
  imports: [
    CommonModule,
    UiNotificationModule,
    UiButtonModule,
  ],
  declarations: [UiNotificationDemoComponent],
  entryComponents: [
    UiNotificationDemoComponent,
  ],
})
export class UiNotificationDemoModule {
}
