import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNotificationModule } from '../ui-notification.module';
import { UiNotificationDemoComponent } from './ui-notification-demo.component';

@NgModule({
  imports: [
    CommonModule,
    UiNotificationModule,
  ],
  declarations: [UiNotificationDemoComponent],
  exports: [],
  providers: [],
})
export class UiNotificationDemoModule {
}
